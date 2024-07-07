class Processor {
  static Processs(data) {
    var rows = data.split("\r\n");
    var dataMatrix = rows.map((line) => line.split(","));

    return dataMatrix;
  }
}

module.exports = Processor;
