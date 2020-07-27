class Adapter {

  constructor() {
    console.log('adapter.js was run')
    const url = 'http://localhost:3000/items'
    this.baseURL = url
    this.delete_url = `http://localhost:3000/items/3`
  }

  async getItems(){
    let response = await fetch(this.baseURL);
    let data = await response.json();
    return data;
  }

  getNotes(e) {
    const li = e.target
    let arr = []
    this.render.allNotes.map(note => {
      if (note.item_id == li.dataset.hello){
        arr.push(note.body)}})
    this.DOM.ul.innerHTML = arr
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
deleteItem(item){
  return fetch(this.delete_url, {
    method: 'DELETE'
  })
  .then(res => res.json());
  }
}
