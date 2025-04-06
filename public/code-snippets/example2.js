import { Component } from "../component.js"
import { useState } from 'useState.js'

class CounterComponent extends Component {
    constructor () {
        const [get, set] = useState(0)

        this.add = (value) => {
            set(get() + value)    
        }

        this.getCount = get
    }

    template () {
        return /*html*/`
            <div>
                <p>${this.getCount()}</p>
            </div>
        `
    }
}