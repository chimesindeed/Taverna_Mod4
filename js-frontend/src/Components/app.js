class App {

  constructor() {
  console.log('app.js was run')
    this.allItems = []
    this.adapter = new Adapter
    this.DOM = new DOMElements
    this.render = new Render
    this.getItems()
    this.DOMListenersAndBindings()
  }

  DOMListenersAndBindings() {
    
    this.DOM.form.addEventListener('submit', this.createItem.bind(this))
    this.DOM.ul.addEventListener('click',(()=>{ this.DOM.ul.innerHTML = render.renderNoteLi()

    }))
  }

  createItem(e){
    e.preventDefault()
    const name = this.DOM.inputName.value
    const price = this.DOM.inputPrice.value

    this.adapter.createItem(name, price).then(item => {
      this.allItems.push(new Item(item))
      this.DOM.inputName.value = ''
      this.DOM.inputPrice.value = ''
      this.render.renderItemLi()
    })
  }

  getItems() {
    this.adapter
      .getItems()
      .then(items => {
        items.forEach(item => this.allItems.push(new Item(item)))
      })
      .then(() => {
        this.render.renderItemLi()
      })
    }

  render(){
    this.ul.innerHTML = this.allItems.map(item => item.render.renderItemLi()).join('')
    }

  }
