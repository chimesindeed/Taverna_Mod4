class App {

  constructor() {
  console.log('app.js was run')
    this.allItems = []
    this.adapter = new Adapter
    this.DOMListenersBindings()
    this.getItems()
  }

  DOMListenersBindings() {
    this.ul = document.getElementById('ul-items-holder')
    this.li = document.createElement('li')
    this.input = document.getElementById('form-input')
    this.form = document.getElementById('create-item-form')
    this.form.addEventListener('submit', this.createItem.bind(this))
  }

  createItem(e){
    e.preventDefault()
    const value = this.input.value

    this.adapter.createItem(value).then(item => {
      this.allItems.push(new Item(item))
      this.input.value = ''
      this.render()
    })
  }

  getItems() {
    this.adapter
      .getItems()
      .then(items => {
        items.forEach(item => this.allItems.push(new Item(item)))
      })
      .then(() => {
        this.render()
      })
    }

  render(){
    this.ul.innerHTML = this.allItems.map(item => item.renderItemLi()).join('')
    }

  }
