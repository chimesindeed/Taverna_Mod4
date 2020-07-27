class Render {

  constructor() {

    this.allItems = []
    this.allNotes = []
    this.DOM = new DOMElements
    }

  renderItems() {
    this.DOM.ul.innerHTML = this.allItems.map(item =>
      `<li
        data-hello=${item.id}>
        ${item.name},
        ${item.price}
      </li>`)
    .join('')
  }

}