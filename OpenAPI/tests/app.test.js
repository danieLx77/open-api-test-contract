import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
const source=fs.readFileSync(new URL('../app.js',import.meta.url),'utf8');
const scenarioSource=source.slice(source.indexOf('const scenarios = ['),source.indexOf('\n];\nconst contractYaml')+2);
const scenarios=vm.runInNewContext(`${scenarioSource}\nscenarios`);
function conforms(p){return Number.isInteger(p.id)&&typeof p.nome==='string'&&p.nome.length>=1&&typeof p.preco==='number'&&p.preco>=0&&typeof p.disponivel==='boolean'}
test('há quatro cenários com conformidade A, B e D inválida e C válida',()=>{assert.equal(scenarios.length,4);assert.equal(scenarios.map(s=>s.id).join(','),'A,B,C,D');assert.equal(scenarios.map(s=>conforms(s.json)).join(','),'false,false,true,false');});
test('as explicações e exemplos de correção correspondem às regras',()=>{for(const s of scenarios){assert.equal(s.issues.length===0,s.id==='C');if(s.corrected)assert.equal(conforms(s.corrected),true)}assert.match(scenarios[0].issues.join(' '),/preco.*number/);assert.match(scenarios[1].issues.join(' '),/minimum/);assert.match(scenarios[1].issues.join(' '),/boolean/);assert.match(scenarios[3].issues.join(' '),/obrigatório/);assert.match(scenarios[3].issues.join(' '),/minLength/);assert.equal(scenarios[2].json.estoque,12)});
test('interface inclui navegação, revisão, contrato e reinício',()=>{for(const token of ['data-prev','data-next','data-review','data-reveal','data-reset','data-contract'])assert.ok(source.includes(token),`faltou ${token}`);assert.match(source,/additionalProperties: false/);assert.match(source,/compatibilidade com todos os consumidores/)});
