class Adapter {

  constructor() {
    console.log('adapter.js was run')
    const url = 'http://localhost:3000/items'
    this.baseURL = url
  }

  async getItems(){
    let response = await fetch(this.baseURL);
    let data = await response.json();
    return data;
  }

 createItem(name, price){
  const item = {
  name: name,
  price: price
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
