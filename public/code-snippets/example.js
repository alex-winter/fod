import { Component } from "../component.js"

class ExampleComponent extends Component {
    styles () {
        return /*css*/`
            h1 {
                font-family: comic-sans;
            }
        `
    }

    template () {
        return /*html*/`
            <div>
                <p>Welcome to Alex Js</p>
                <counter-component></counter-component>
                <button>Update Counter</button>
            </div>
        `
    }

    events () {
        this.click('button', () => {
            this.query('counter-component').add(1)   
        })
    }
}