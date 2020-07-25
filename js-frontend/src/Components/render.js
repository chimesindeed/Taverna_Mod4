class Render {
  constructor() {}

  renderItemLi() { return `<li>${this.name}</li>` }

  renderNoteLi() {
    this.notesArr.forEach(note => {
      if (note.item_id == item.id){
        console.log(note.body)
      }
    })
  }
}
