import { describe, expect, it } from 'vitest';
const entries=import.meta.glob('../WorkspaceEntry.ts',{eager:true,query:'?raw',import:'default'}) as Record<string,string>;
describe('P8A runtime import contract',()=>it('has one runtime Foundation import after the gate',()=>{const source=Object.values(entries)[0]??'';expect(source.match(/loadFoundation\s*=\s*\(\)\s*=>\s*import\('\.\/foundation'\)/g)??[]).toHaveLength(1);expect(source.indexOf('if (!featureFlags.isFeatureEnabled')).toBeLessThan(source.indexOf('await loadFoundation()'));}));
