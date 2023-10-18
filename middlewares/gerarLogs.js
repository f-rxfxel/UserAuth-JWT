const fs = require('fs');

const getDate = (bearer, dados) => {

const token = bearer.replace('Bearer ', '')

// Obter a data e hora atual
const dataHoraAtual = new Date();

const dia = dataHoraAtual.getDate();
const mes = dataHoraAtual.getMonth() + 1;
const ano = dataHoraAtual.getFullYear();
const hora = dataHoraAtual.getHours();
const minutos = dataHoraAtual.getMinutes();

// Nome do arquivo com a data e hora
//    const nomeDoArquivo = `${dia}-${mes}-${ano} ${hora}-${minutos}`;
const nomeDoArquivo = `${dia}-${mes}-${ano} ${hora}-${minutos} ${token}`;

// Conteúdo a ser escrito no arquivo
fs.writeFile(nomeDoArquivo, dados, (err) => {
    if (err) {
      console.error('Erro ao criar o arquivo:', err);
    } else {
      console.log(`Log criado com sucesso.`);
    }
  });
}

module.exports = getDate