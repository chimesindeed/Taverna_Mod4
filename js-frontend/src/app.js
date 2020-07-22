class App {
  constructor(){
  console.log('app.js was run')
    this.adapter = new Adapter
    this.getItemsToDOM()
  }


  getItemsToDOM(){
    this.adapter.retrieveItems()
      .then(items=> console.log(items))

  }
}