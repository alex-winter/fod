/**
 * @param {Function} componentFn 
 * @returns 
 */
function createComponent (componentFn) {
    return class extends HTMLElement {
        constructor () {
            super()

            this.attachShadow({ mode: 'open' })
        }

        connectedCallback () {
            componentFn()
        }
    }
}




const example = () => {


    return /*html*/`
        <style>
            p {
                font-size: 2em;
            }
        </style>
        <div>
            <p>
                Hello
            </p>
        </div> 
    `
}




const component = createComponent()

customElements.define('hello-world', component)

document.body.innerHTML = '<hello-world></hello-world>'


export {createComponent}