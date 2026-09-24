# Detetives de Contratos

Aplicação estática para uma dinâmica colaborativa de 10 a 15 minutos sobre contratos OpenAPI. A turma analisa quatro respostas JSON, discute compatibilidade e propõe correções. Não há cadastro ou coleta de dados pessoais.

## Tecnologias

HTML, CSS e JavaScript puros, sem backend, frameworks ou dependências de execução. O progresso é salvo em `localStorage` no dispositivo usado pela equipe; o botão **Reiniciar investigação** apaga as respostas salvas.

## Executar localmente

Abra `index.html` no navegador. Para servir a pasta localmente, execute `python3 -m http.server 8000` e acesse `http://localhost:8000`.

Os testes automatizados usam o executor de testes incluído no Node.js: `npm test`.

## Usar em sala

1. Projete a página inicial e organize a turma em grupos de 3 a 5 pessoas.
2. Clique em **Iniciar investigação** e leia o contrato de referência.
3. Para cada cenário, o grupo escolhe se a resposta está em conformidade. Se identificar uma violação, marca os campos e registra uma correção opcional.
4. Use anterior/próximo para navegar; **Consultar contrato** abre a referência sem apagar decisões.
5. Na revisão, compare as respostas e clique em **Revelar análise dos contratos** para discutir as regras e exemplos corrigidos.

## Modo de apresentação do professor

Na tela inicial, clique em **Modo de apresentação**. Use os botões anterior/próximo para alternar cenários; **Revelar análise e correção** mostra ou oculta a resposta. **Exibir contrato** abre o YAML completo. O modo é local, sem sincronização entre dispositivos.

## Publicar gratuitamente no GitHub Pages

1. Crie um repositório no GitHub e envie os arquivos deste projeto para a branch principal.
2. No repositório, abra **Settings → Pages**.
3. Em **Build and deployment**, escolha **Deploy from a branch**.
4. Selecione a branch principal e a pasta `/ (root)`; clique em **Save**.
5. Aguarde a publicação e use o endereço apresentado na página de configurações. O site funciona a partir da raiz do domínio ou de um caminho de projeto, pois usa referências relativas.

Também pode publicar a pasta diretamente no Cloudflare Pages como site estático.

## Alterar cenários

Edite a lista `scenarios` no início de `app.js`. Cada cenário contém um identificador, título, descrição, objeto JSON, campos envolvidos, explicações e, se houver violação, um objeto corrigido. Atualize também `tests/app.test.js` para manter as verificações coerentes com as novas regras. A validação educacional implementa apenas os tipos, campos obrigatórios, `minLength` e `minimum` usados nesta atividade; ela não chama nem testa uma API real.
