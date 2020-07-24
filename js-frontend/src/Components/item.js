class Item {
  constructor(itemJSON) {
    this.id = itemJSON.id
    this.name = itemJSON.name
  }
    renderLi() {
      return `<li>${this.name}</li>`
    }
}
