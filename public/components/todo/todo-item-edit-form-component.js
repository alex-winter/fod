import { Component } from "../../component.js";
import { useState } from "../../services/state.js";

export class TodoItemEditFormComponent extends Component
{
    constructor () {
        super()

        const [value, set, get] = useState({name: ''})
        this.todoItem = value
        this.setTodoItem = set
        this.getTodoItem = get
    }

    template() {
        return /*html*/`
            <div>
                <form action="">
                    <input  type="text" name="name">
                </form>
            </div>
        `
    }

    events () {
        this.keyup('[name="name"]', (e) => {
            this.setTodoItem({name: e.target.value})
        })
    }
}