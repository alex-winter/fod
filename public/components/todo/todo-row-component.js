import { Component } from "../../component.js";
import { TodoRepository } from "../../repositories/todo-repository.js";

export class TodoRowComponent extends Component
{
    constructor () {
        super()
    }

    styles () {
        return /*css*/`
            .row:hover {
                background-color: #ecf0f1;
            }

            .row input {
                background: none;
                border: none;
            }
        `
    }

    template () {
        const data = this.props.item

        return /*html*/`
            <div class="row flex-row p-3 gap-1 animation-fade-up">
                <div class="flex-column justify-center">
                    <i class="fa-solid fa-clipboard-list"></i>
                </div>
                <div class="flex-2 flex-column justify-center name-container">
                    <p>${data.name}</p>
                </div>
                <div class="flex-1 flex-row align-center justify-end gap-2">
                    <edit-button-component></edit-button-component>
                    <delete-button-component></delete-button-component>
                </div>
            </div>
        `
    }

    events() {
        this.click('delete-button-component', () => {
            TodoRepository.remove(this.props.item)
           
            this.remove()
        })

        this.click('edit-button-component', () => {
            this.appendTemplate(
                document.body,
                /*html*/`<todo-modal-new-component data-item="${this.propEncode(this.props.item)}"></todo-modal-new-component>`
            )
        })
    }
}