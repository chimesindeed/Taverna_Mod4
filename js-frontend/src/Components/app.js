class App {

  constructor() {
    this.form = document.getElementById('create-item-form')
    this.ul = document.getElementById('ul-items-holder')
    this.inputName = document.getElementById('form-input-name')
    this.inputPrice =  document.getElementById('form-input-price')
    
    this.adapter = new Adapter
    this.render = new Render
    this.DOMListenersAndBindings()
    
    this.getItems()
  }

  DOMListenersAndBindings() {
    this.form.addEventListener('submit', this.createItem.bind(this))
    this.ul.addEventListener('dblclick', this.deleteItem.bind(this));
  }
  
  deleteItem(e){
  e.preventDefault
  let deleted;
  const li = e.target
    this.adapter.deleteData(li.dataset.item_id)
    .then(res => {
      this.getItems()
    })
   
 }
  
  createItem(e){
    e.preventDefault()
    const name = this.inputName.value
    const price = this.inputPrice.value

    this.adapter.createItem(name, price).then(item => {
      this.render.allItems.push(new Item(item))
      this.inputName.value = ''
      this.inputPrice.value = ''
      this.getItems()
    })
  }

  getItems() {
    this.render.allItems = []
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

