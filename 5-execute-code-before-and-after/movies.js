export default {
  add(collection, movie) {
    collection.push({
      title: movie,
      rate: null
    })
  },

  rate(obj, rating) {
    obj.rate = rating
  }
}
