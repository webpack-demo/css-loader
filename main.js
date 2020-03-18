import './a.less'
import './b.css'
import styles from './css-module.css'
document.write('hello world')


let html = `
  <div class=${styles.box}></div>
`
document.body.insertAdjacentHTML('beforeend', html);