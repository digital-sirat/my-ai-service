import { describe, expect, it } from 'vitest';
import type { RouteRecordRaw } from 'vue-router';
import { routes } from '@/router';
import { NAVIGATION_SCHEMA } from './navigationSchema';
import { LEGACY_ROUTE_CONTRACT, LEGACY_UNNAMED_PATH_CONTRACT } from './routeContract';
import { NAVIGATION_V2_FEATURE_FLAG } from './featureFlags';
import { PRODUCT_SECTIONS } from './productSections';
const join=(parent:string,child:string):string => child.startsWith('/')?child:(!child?(parent||'/'):`${parent==='/'?'':parent}/${child}`.replace(/\/+/g,'/'));
const flatten=(records:readonly RouteRecordRaw[],parent=''):Array<{name?:string;path:string;route:RouteRecordRaw}> => records.flatMap(route=>{const path=join(parent,route.path);return [{name:typeof route.name==='string'?route.name:undefined,path,route},...flatten(route.children??[],path)];});
describe('navigation foundation contracts',()=>{
 const all=flatten(routes);
 it('preserves every existing named route and decorates it',()=>{
  const expected=LEGACY_ROUTE_CONTRACT.filter(e=>e.availability!=='computer-use'||import.meta.env.VITE_COMPUTER_USE!=='false');
  expect(all.filter(e=>e.name)).toHaveLength(expected.length);
  for(const contract of expected){const actual=all.find(e=>e.name===contract.name);expect(actual?.path,contract.name).toBe(contract.path);expect(actual?.route.meta?.legacyRoute,contract.name).toBe(true);expect(actual?.route.meta?.productSection,contract.name).toBe(contract.section);expect(actual?.route.meta?.productAccess,contract.name).toBe(contract.access);}
 });
 it('preserves protected unnamed paths',()=>{expect(all.filter(e=>!e.name).map(e=>e.path)).toEqual(expect.arrayContaining([...LEGACY_UNNAMED_PATH_CONTRACT]));});
 it('defines one future item per section without provider entries',()=>{expect(NAVIGATION_SCHEMA.map(i=>i.id)).toEqual(PRODUCT_SECTIONS);expect(new Set(NAVIGATION_SCHEMA.map(i=>i.path)).size).toBe(NAVIGATION_SCHEMA.length);expect(NAVIGATION_SCHEMA.some(i=>i.path==='/chatgpt')).toBe(false);});
 it('keeps Navigation V2 opt-in',()=>{expect(NAVIGATION_V2_FEATURE_FLAG).toBe('navigation-v2');});
});
