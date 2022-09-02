//method -> obj
//function -> global(window, global)
//console.log(this) global
let getName = () => {
  console.log('function: ', this)
}
//getName(); global
const video = {
  title: 'What is this keyword',
  tags: ['a', 'b', 'c'],
  getTags() {
    this.tags.forEach(function (item) {
      console.log(`${this.title}: ${item}`);
    }, this)
  },
  getTitle() {
    console.log('Obj: ', this.title);
  }
}
video.getTags() //obj