class Item {
  constructor(itemJSON) {
    this.notesArr = []
    this.id = itemJSON.id
    this.name = itemJSON.name
    this.notes = itemJSON.notes
    this.notes.forEach(note =>{
      new Note(note)
     this.notesArr.push(new Note(note))
     console.log(this.notesArr)
    })
  }
    renderItemLi() {
      return `<li>${this.name}</li>`
    }

}
