class Adapter {

  constructor() {
    console.log('adapter.js was run')
    const url = 'http://localhost:3000/items'
    this.baseURL = url
  }

  getItems(){
    return fetch(this.baseURL)
      .then(res => res.json())
  }
}

