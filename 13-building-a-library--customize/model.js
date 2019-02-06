export default class Model {
  constructor(options = {}) {
    const data = options.data || []
    delete options.data
    this.$collection = []
    this.$options = Object.assign({ primaryKey: 'id' }, options)

    if (data.length) this.record(data)
  }

  record(data) {
    const mappedData = data.map(entry => {
      if (entry[this.$options.primaryKey]) return entry
      entry[this.$options.primaryKey] = Date.now()
      return entry
    })
    this.$collection.push(...mappedData)
  }
  all() {
    return this.$collection.map(entry => Object.assign({}, entry))
  }

  update(key, data) {
    const index = this.$collection.findIndex(
      entry => entry[this.$options.primaryKey] === key
    )
    if (index < 0) return false
    this.$collection.splice(
      index,
      1,
      Object.assign(this.$collection[index], data)
    )
  }

  remove(key) {
    const index = this.$collection.findIndex(
      entry => entry[this.$options.primaryKey] === key
    )
    if (index >= 0) this.$collection.splice(index, 1)
  }

  find(key) {
    const entry = this.$collection.find(
      entry => entry[this.$options.primaryKey] === key
    )

    return entry ? Object.assign({}, entry) : null
  }
}
