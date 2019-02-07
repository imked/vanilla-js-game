import Bird from './Bird'
import Counter from './Counter'
import Hunter from './Hunter'

export default class Game {
  entities = [] // vorher birds

  constructor() {
    this.createCounter()
    this.loop()
    this.createHunter()
  }

  createCounter() {
    this.counter = new Counter()
  }

  createHunter() {
    this.hunter = new Hunter()
    this.entities = [...this.entities, this.hunter] //new
  }

  addBird() {
    const config = {
      onRemove: this.onRemove,
      onClick: this.updatePlayerpoints,
      onEscape: this.updateBirdsPoints,
    }

    this.entities = [...this.entities, new Bird(config)]
  }
  //removes Bird from loop
  onRemove = bird => {
    const index = this.entities.indexOf(bird)
    this.entities = [
      ...this.entities.slice(0, index),
      ...this.entities.slice(index + 1),
    ]
  }

  updateBirdsPoints = () => {
    this.counter.addBirdsPoint()
  }

  updatePlayerpoints = () => {
    this.counter.addPlayerPoint()
  }

  loop() {
    Math.random() < 1 / 60 && this.addBird()
    this.entities.forEach(entity => entity.update()) // alle this.bird wird durch this.entities ersetzt
    requestAnimationFrame(() => this.loop())
  }
}
