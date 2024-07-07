const fs = require("fs");
const util = require("util");
const path = require("path");

class Writer {
  constructor() {
    this.writer = util.promisify(fs.writeFile);
  }

  async Write(filename, data) {
    try {
      const fullPath = path.resolve(filename);
      await this.writer(filename, data);
      console.log(`File saved as ${fullPath}`);
      return true;
    } catch (err) {
      return false;
    }
  }
}

module.exports = Writer;
