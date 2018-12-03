# Sistemas de Matriculas

Trabalho final da disciplina de Programação de software aplicado desenvolvido em NodeJs + Express + AngularJs + MongoDB

## Instruções

Passo a passo dos pacotes a serem instalados:

1. Clone do repositório: `git clone git@github.com:lukzfreitas/sistema_matricula_psa.git`
2. Instalar Pacotes: `npm install`
3. Alterar configurações do database config/database.js

Importar dados para o database:

4.1 Acessar o diretório `/data`
4.2 Executar `node importarAlunos.js`
4.3 Executar `node importarDisciplinas.js`
4.4 Executar `node importarHistoricos.js`
4.5 Executar `node importarRequisitos.js`
4.6 Executar `node importarTurmas.js`

5. Iniciar servidor: `node server.js`
6. Acessar endereço no navegador: `http://localhost:8080`
