export default class Entity {
  render(className, styles) {
    const el = document.createElement('div')
    el.className = className
    if (styles) {
      Object.keys(styles).forEach(key => {
        el.style[key] = styles[key] // key ist beim iterieren background
      })
      //el.styles = { ...el.styles, ...styles }
    } // Erweiterung der render-Methode, um den anderen Klassen, wenn nötig andere Styles übergeben
    document.body.insertAdjacentElement('beforeend', el)
    return el
  }
  remove() {
    this.onRemove && this.onRemove(this) // Die Funktion onRemove müssen wir reinreichen. Da onRemove in Bullet nichts existiert, würde die App crashen. Daher müssen wir sagen, nur wenn onRemove existiert, dann wird die aufgerufen. Ansonsten nicht.
    this.el.remove()
  }
}
