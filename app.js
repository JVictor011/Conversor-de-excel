const Reader = require("./src/models/Reader");
const Processor = require("./src/models/Processor");
const Table = require("./src/models/Table");
const HtmlParser = require("./src/models/HtmlParser");
const Writer = require("./src/models/Writer");
const PdfWriter = require("./src/models/PdfWriter");

var reader = new Reader();
var writer = new Writer();

async function main() {
  var data = await reader.Read("./src/data/users.csv");
  var dataProcess = Processor.Processs(data);

  var table = new Table(dataProcess);

  var html = await HtmlParser.Parse(table);

  writer.Write(Date.now() + ".html", html);
  PdfWriter.WritePDF(Date.now() + ".pdf", html);
}

main();
