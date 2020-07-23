class App {
  constructor(){
  console.log('app.js was run')
    this.allItems = []
    this.adapter = new Adapter
    this.getItems()
    this.itemsToDOM()
  }

  itemsToDOM(){
   const ul = document.getElementById('ul-items-holder')
   const li = document.createElement('li')
  }

  getItems(){
    this.adapter
      .getItems()
      .then(items => {
        items.forEach(item => this.allItems.push(new Item(item)))
      .then(() => {
        this.render()
      })

  }
}
