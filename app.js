const Reader = require("./src/Reader");

var leitor = new Reader();

async function main() {
  var dados = await leitor.Read("./src/data/users.csv");
  console.log(dados);
}

main();
