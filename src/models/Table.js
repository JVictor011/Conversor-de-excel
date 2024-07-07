class Table {
  constructor(arr) {
    this.header = arr[0];
    this.rows = arr.slice(1);
  }

  get ColumnCount() {
    return this.header.length;
  }

  get RowsCount() {
    return this.rows.length;
  }
}

module.exports = Table;
