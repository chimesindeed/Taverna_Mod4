class Item {
  constructor(itemJSON) {
    this.notesArr = []
    this.id = itemJSON.id
    this.name = itemJSON.name
    this.price = itemJSON.price
    this.notes = itemJSON.notes

    this.notes.forEach(note =>{
      console.log(this.notesArr);
      this.notesArr.push(new Note(note));
    })
  }

}
