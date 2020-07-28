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
   deleteData(item, url){
     return fetch(url + '/' + item, {
       method: 'delete'
     })
      .then(response => response.json())
      .then(data => console.log(data));
   }
}
