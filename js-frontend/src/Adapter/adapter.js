class Adapter {

  constructor() {
    console.log('adapter.js was run')
    const url = 'http://localhost:3000'
    const items = '/items'
    const notes = '/notes'
    this.baseURL = url
    this.items = items
    this.notes = notes
  }

  async getItems(){
    let response = await fetch(`${this.baseURL}${this.items}`);
    let data = await response.json();
    return data;
  }

createNote(body, item_id){
  const note = {
    body: body,
    item_id: item_id
  }
  return fetch(`${this.baseURL}${this.notes}`,{
    method: 'POST',
    headers: {'content-type': 'application/json'
  },
  body: JSON.stringify({note})
  }).then(res => res.json())
}

 createItem(name, price){
  const item = {
    name: name,
    price: price
  }
  return fetch(`${this.baseURL}${this.items}`,{
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({item})
    }).then(res => res.json())
  }
  deleteItem(item){
    return fetch(`${this.baseURL}${this.items}/${item}`, {
      method: 'delete',
      headers: {'Content-Type': 'application/json'}
    })
     .then(response => response.json())
     .then(data => console.log(data))}

deleteNote(note){
  return fetch(`${this.baseURL}${this.notes}/${note}`, {
    method: 'delete',
    headers: {'Content-Type': 'application/json'}
  })
   .then(response => response.json())
   .then(data => console.log(data))}
}


