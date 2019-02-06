export default class Model {

  constructor(data = []) {
    this.$collection = []

    if(data.length)
      this.record(data)
  }

  record(data) {
    const primaryKey = 'id'
    const mappedData = data.map(entry => {
      if(entry[primaryKey]) return entry
      entry[primaryKey] = Date.now()
      return entry
    })
    this.$collection.push(...mappedData)
  }
  all() {
    return this.$collection.map(entry => Object.assign({}, entry))
  }
  update() {}
  find(value) {
    const primaryKey = 'id'
    const entry = this.$collection.find(entry => entry[primaryKey] === value)

    return entry ? Object.assign({}, entry) : null
  }
}
