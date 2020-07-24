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

 createItem(value){
  const item = {
  name: value
  }
  return fetch(this.baseURL,{
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({item})
    }).then(res => res.json())
  }
}

