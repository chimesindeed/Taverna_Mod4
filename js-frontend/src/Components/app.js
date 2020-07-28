class App {

  constructor() {
  console.log('app.js was run')
    this.adapter = new Adapter
    this.DOM = new DOMElements
    this.render = new Render
    this.DOMListenersAndBindings()
    this.getItems()
  }

  DOMListenersAndBindings() {
    this.DOM.form.addEventListener('submit', this.createItem.bind(this))
    this.DOM.ul.addEventListener('dblclick', this.adapter.getNotes.bind(this))
    this.DOM.ul.addEventListener('click', this.deleteItem.bind(this))
  }
  
  deleteItem(e){
  e.preventDefault
  const li = e.target
    this.adapter.deleteData(li.dataset.hello, this.adapter.baseURL)
    .then(data => console.log(data))
      //this.render.allItems.forEach(item => {
      //if (item.id==data){delete this.render.allItems[item]}}))
 }
  
  createItem(e){
    e.preventDefault()
    const name = this.DOM.inputName.value
    const price = this.DOM.inputPrice.value

    this.adapter.createItem(name, price).then(item => {
      this.render.allItems.push(new Item(item))
      this.DOM.inputName.value = ''
      this.DOM.inputPrice.value = ''
      this.render.renderItems()
    })
  }

  getItems() {
    this.adapter
      .getItems()
      .then(items => {
        items.forEach(item => this.render.allItems.push(new Item(item)))
        items.forEach(item =>
          item.notes.forEach(note =>
            this.render.allNotes.push(new Note(note))))
      })
      .then(items => this.render.renderItems());
    }
}