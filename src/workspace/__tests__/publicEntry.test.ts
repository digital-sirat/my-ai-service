import { describe, expect, it } from 'vitest';
const entries=import.meta.glob('../index.ts',{eager:true,query:'?raw',import:'default'}) as Record<string,string>;
describe('P8A headless public API',()=>it('does not export Vue presentation graph',()=>{const source=Object.values(entries)[0];expect(source).toBeDefined();expect(source).not.toContain('./foundation');expect(source).not.toContain('.vue');expect(source).not.toContain('./components');}));
