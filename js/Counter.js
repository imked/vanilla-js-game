export default class Counter {
  playerPoints = 0
  birdsPoints = 0

  constructor() {
    this.el = this.render()
    this.update()
  }

  addPlayerPoint() {
    this.playerPoints = this.playerPoints + 1 // equals ++
    this.update()
  }

  addBirdsPoint() {
    this.birdsPoints++
    this.update()
  }

  render() {
    const el = document.createElement('div')
    el.className = 'counter'
    document.body.insertAdjacentElement('beforeend', el)
    return el
  }

  update() {
    this.el.innerHTML = this.playerPoints + ':' + this.birdsPoints
  }
}
