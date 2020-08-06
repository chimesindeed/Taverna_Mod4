class Render {
  
  constructor() {
    this.itemForm = document.getElementById('create-item-form')
    this.noteForm = document.getElementById('create-note-form')
    this.ul = document.getElementById('ul-items-holder')
    this.leftCol = document.getElementsByClassName('left-col mr-auto')[0]
    this.rightCol = document.getElementsByClassName('right-col')[0]
    this.rightColHeader = document.getElementById('rightColHeader')
    this.rightColSubtext = document.getElementById('rightColSubtext')
    this.inputName = document.getElementById('form-input-name')
    this.inputPrice =  document.getElementById('form-input-price')
    this.inputBody = document.getElementById('form-input-body')
    this.createNoteButton = document.getElementById('create-note-button')
    this.allItems = []
    this.allNotes = []
  }
  
  itemsToDiv(pageElement, array) {
    this.rightColHeader.innerText ='Your Menu Items'
    let display = array.map(item =>(
      "<div class='item-holder'>" +
      `<li data-item_id=${item.id}>${item.name} - $${item.price}</li>` +
      "</div>" +
    
      "<div class='get-notes'>" +
      `<button id=${item.id} class="note-buttons">Notes</button>` +
      "</div>" +
      "</br>") )
    .join('')
    
    pageElement.innerHTML = display
    
    this.noteButtons=document.getElementsByClassName('note-buttons');
    let arr = Array.from(this.noteButtons).forEach(button =>
      button.addEventListener('click', this.notesToDiv.bind(this)))
  }

  notesToDiv(e) {
    const button = e.target
    this.leftCol.style.display='none'
    this.noteForm.style.display='block'
    this.rightCol.style.width='600px'
    this.rightColHeader.innerHTML='Your Notes' + '<button id="back-button">Back</button>'
    this.rightColSubtext.innerText=''
    this.backButton = document.getElementById('back-button')
    this.backButton.addEventListener('click', this.getItems.bind(this))
    this.ul.innerHTML=""
    this.allNotes.map(note => {
      if (note.item_id == button.id){
        const li = document.createElement('li')
        li.setAttribute('class', 'itemNotes')
        this.ul.appendChild(li)
        li.setAttribute('data-item_id', `${note.item_id}`)
        li.setAttribute('data-note_id', `${note.id}`)
        li.innerHTML=`${note.body}`
      }
      this.noteForm.setAttribute('data-item_id', `${button.id}`)
    });
    
  }
}
