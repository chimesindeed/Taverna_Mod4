class Render {

  constructor() {

    this.allItems = []
    this.itemNotes = []
    this.DOM = new DOMElements
    }
  renderItemLi() { return `<li>${this.item.name}</li>` }
  renderNoteLi() { return `<li>${this.body}</li> `}

  renderItems() {
    console.log(this.allItems)
    // const items = toRender.map(item => this.renderItemLi()).join('')
    this.DOM.ul.innerHTML = this.allItems.map(item => `<li>${item.name}, ${item.price}</li>`)
    .join('')
  }

  renderNotes() {
    this.itemNote.forEach(note => {
      if (note.item_id == item.id){
        console.log(note.body)
      }
    })
  }
}
