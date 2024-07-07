var pdf = require("html-pdf");

class PdfWriter {
  static WritePDF(filename, html) {
    pdf.create(html).toFile(filename, (err, res) => {
      if (err) console.log(err);
      else console.log(`PDF saved as ${res.filename}`);
    });
  }
}

module.exports = PdfWriter;
