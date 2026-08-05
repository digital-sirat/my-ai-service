import { describe, expect, it } from 'vitest';
const sources=import.meta.glob(['../**/*.ts','../**/*.vue','!../__tests__/**'],{eager:true,query:'?raw',import:'default'}) as Record<string,string>;
const dependencies=['@/'+'router','@/'+'navigation','@/'+'store','@/'+'operators','@/'+'generators','@/'+'api','@/'+'backend','@/'+'modelRegistry','@/'+'modelCatalog','@/'+'modelCatalogUi','@/'+'layouts','@/'+'pages','@/'+'components','vue-'+'router','vue'+'x','Navigator.vue','Main.vue','App.vue'];
const runtime=['use'+'Router(','use'+'Route(','use'+'Store(','$'+'store','dispatch'+'(','commit'+'(','fetch'+'(','axios','XMLHttpRequest'];
describe('P8A dependency boundary',()=>{it('has no protected dependencies',()=>{for(const[p,s]of Object.entries(sources))for(const x of dependencies)expect(s,`${p}:${x}`).not.toContain(x);});it('has no application runtime execution',()=>{for(const[p,s]of Object.entries(sources))for(const x of runtime)expect(s,`${p}:${x}`).not.toContain(x);});});
