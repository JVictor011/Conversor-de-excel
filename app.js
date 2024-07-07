const Reader = require("./src/models/Reader");
const Processor = require("./src/models/Processor");
const Table = require("./src/models/Table");
const HtmlParser = require("./src/models/HtmlParser");
const Writer = require("./src/models/Writer");

var leitor = new Reader();
var escritor = new Writer();

async function main() {
  var data = await leitor.Read("./src/data/users.csv");
  var dataProcess = Processor.Processs(data);

  var table = new Table(dataProcess);

  var html = await HtmlParser.Parse(table);

  escritor.Write(Date.now() + ".html", html);
}

main();
