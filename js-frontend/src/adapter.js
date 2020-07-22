class Adapter {

  constructor() {
    console.log('adapter.js was run')
    const url = 'http://localhost:3000/items'
    this.baseURL = url
  }

  retrieveItems(){
    return fetch(this.baseURL)
      .then(res => res.json)
  }
}
