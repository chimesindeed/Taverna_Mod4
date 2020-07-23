class App {

  constructor() {
  console.log('app.js was run')
    this.allItems = []
    this.adapter = new Adapter
    this.isolateDOMElements()
    this.createItem()
    this.addListeners()
    this.getItems()
  }

  isolateDOMElements() {
   this.ul = document.getElementById('ul-items-holder')
   this.li = document.createElement('li')
   this.form = document.getElementById('create-item-form')
   this.formInput = document.getElementById('form-input')
  }

  addListeners() {
    this.form.addEventListener('submit', this.createItem.bind(this))
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
    this.ul.innerHTML = this.allItems.map(item => item.renderLi()).join('')
    }

  }
