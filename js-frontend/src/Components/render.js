class Render {

  constructor() {

    this.allItems = []
    this.allNotes = []
    this.ul = document.getElementById('ul-items-holder')
    // this.DOM = new DOMElements
    }

  renderItems() {
    this.ul.innerHTML = this.allItems.map(item =>
      `<div id='item-holder'>
         <li data-item_id=${item.id}>${item.name} - $${item.price}</li>
       </div>
       <div id= 'open-notes'>
         <button id=${item.id} class="note-buttons">Notes</button>
       </div>`).join('');
    
    this.noteButtons=document.getElementsByClassName('note-buttons');
    let arr = Array.from(this.noteButtons).forEach(button =>
      button.addEventListener('click', this.renderNotes.bind(this)))
              
  }
  renderNotes(e) {
    const button = e.target
    let arr = []
    this.allNotes.map(note => {
        if (note.item_id == button.id){
          arr.push(note.body)}
        });
    this.ul.innerHTML = arr
  }

}