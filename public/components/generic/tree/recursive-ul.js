import { Component } from "../../../component.js"
import { forEach } from "../../../services/template-functions.js"

export class RecursiveUlComponent extends Component {

    styles () {
        return /*css*/`
            ul {
                background-color: black;
                color: white;
            }

            li {
                background-color: white;
                color: black;
            }

            li ul {
                background-color: grey;
            }
        `
    }

    recursiveTemplate(data) {
        return /*html*/`
            <ul>
                ${forEach(data, item => /*html*/`
                    <li>
                        ${item.name}
                        ${item.children ? this.recursiveTemplate(item.children) : ''}
                    </li>    
                `)}
            </ul>
        `
    }

    template () {
        const data = this.props.data

        return this.recursiveTemplate(data)
    }
}