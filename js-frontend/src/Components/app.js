class App {

  constructor() {
    this.form = document.getElementById('create-item-form')
    this.ul = document.getElementById('ul-items-holder')
    this.inputName = document.getElementById('form-input-name')
    this.inputPrice =  document.getElementById('form-input-price')
    
    this.adapter = new Adapter
    this.DOM = new DOMElements
    this.render = new Render
    this.getItems()
    this.DOMListenersAndBindings()
  }

  DOMListenersAndBindings() {
    this.form.addEventListener('submit', this.createItem.bind(this))
    this.ul.addEventListener('dblclick', this.deleteItem.bind(this))
  }
  
  deleteItem(e){
  e.preventDefault
  const li = e.target
    this.adapter.deleteData(li.dataset.item_id, this.adapter.baseURL)
    .then(data => console.log(data));
    this.render.allItems = []
    this.ul.innerHTML=""
    this.getItems()
 }
  
  createItem(e){
    e.preventDefault()
    const name = this.inputName.value
    const price = this.inputPrice.value

    this.adapter.createItem(name, price).then(item => {
      this.render.allItems.push(new Item(item))
      this.inputName.value = ''
      this.inputPrice.value = ''
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