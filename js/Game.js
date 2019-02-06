import Bird from './Bird'

export default class Game {
  birds = []

  constructor() {
    this.createBirds()
    this.loop()
  }

  createBirds() {
    this.addBird()
    this.addBird()
    this.addBird()
    this.addBird()
  }

  addBird() {
    const config = {
      removeBird: this.removeBird,
    }

    this.birds = [...this.birds, new Bird(config)]
  }
  //removes Bird from loop
  removeBird = bird => {
    const index = this.birds.indexOf(bird)
    this.birds = [...this.birds.slice(0, index), ...this.birds.slice(index + 1)]
  }

  loop() {
    //this.counter++ % 60 === && this.addBird()
    Math.random() < 1 / 60 && this.addBird()
    this.birds.forEach(bird => bird.update())
    requestAnimationFrame(() => this.loop())
  }
}
