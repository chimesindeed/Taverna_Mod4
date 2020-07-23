class Item {
  constructor(noteJSON) {
    this.id = itemJSON.id
    this.name = noteJSON.name
            }
    renderLi() {
      return `<li>${this.name}</li>`
                    }
