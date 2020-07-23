class App {

  constructor() {
  console.log('app.js was run')
    this.allItems = []
    this.adapter = new Adapter
    this.isolateDOMElements()
    this.getItems()
  }

  isolateDOMElements() {
   this.ul = document.getElementById('ul-items-holder')
   this.li = document.createElement('li')
   this.form-input = document.getElementById('form-input')
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
