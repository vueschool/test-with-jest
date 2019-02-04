export default class Model {

  constructor(data = []) {
    this.$collection = []

    if(data.length)
      this.record(data)
  }

  record(data) {
    this.$collection.push(...data)
  }
  all() {
    return this.$collection.map(entry => Object.assign({}, entry))
  }
  update() {}
  find() {}
}
