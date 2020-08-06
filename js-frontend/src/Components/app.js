class App extends Render{

  constructor() {
    super()
    this.adapter = new Adapter
    this.AddDOMListenersAndBindings()
    this.getItems()
  }

  getItems() {
    this.leftCol.style.display='block'
    this.noteForm.style.display='none'
    this.allItems = []
    this.allNotes = []
    this.ul.innerHTML=""
    this.adapter
      .getItems()
      .then(items => {
        items.forEach(item => this.allItems.push(new Item(item)))
        items.forEach(item =>
          item.notes.forEach(note =>
            this.allNotes.push(new Note(note))))
          })
          .then(items => this.renderItems());
        }
  renderItems(){ return this.itemsToDiv( this.ul, this.allItems ) }        
  
  createItem(e){
    e.preventDefault()
    const name = this.inputName.value
    const price = this.inputPrice.value
    this.adapter.createItem(name, price).then(item => {
      this.allItems.push(new Item(item))
      this.inputName.value = ''
      this.inputPrice.value = ''
      this.getItems()
    })
  }
  
  createNote(e){
    e.preventDefault()
    const body = this.inputBody.value
    const item_id = this.noteForm.dataset.item_id
    this.adapter.createNote(body, item_id).then(note => {
      this.inputBody.value = ''
      this.getItems()
    })
  }
  deleteItemOrNote(e){
    e.preventDefault
    const li = e.target
    if (this.rightColHeader.innerHTML=='Your Notes' + '<button id="back-button">Back</button>'){
      this.adapter.deleteNote(li.dataset.note_id)
      .then(res => {
        this.getItems()
      })
    }
    else {
      this.adapter.deleteItem(li.dataset.item_id)
      .then(res => {
        this.getItems();
        this.getItems()
      })
    }
    
  
  }
    AddDOMListenersAndBindings() {
      this.itemForm.addEventListener('submit', this.createItem.bind(this))
      this.noteForm.addEventListener('submit', this.createNote.bind(this))
      this.ul.addEventListener('dblclick', this.deleteItemOrNote.bind(this))      
    }
 }

