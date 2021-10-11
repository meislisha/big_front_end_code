export default () => {
  const element = document.createElement('h2')

  element.textContent = 'Hello world'
  element.addEventListener('click', () => {
    alert('Hello webpack')
  })

  return element
}
// import { Configuration } from "webpack"
/**
 * @type {import('webpack').Configuration}
 */
const config={
  entry:'main.js',
  output
}
module.exports=config