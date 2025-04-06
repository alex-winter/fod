import { Component } from "../../component.js";
import { TodoRepository } from "../../repositories/todo-repository.js";

export class TodoComponent extends Component
{
    styles () {
        return /*css*/`
           .listing {
            max-height: 300px;
            overflow-y: scroll;
           }
        `
    }

    itemToComponent (item) {
        return /*html*/`
            <todo-row-component 
                data-uuid="${item.dataUuid}" 
                data-item="${this.propEncode(item)}"
            ></todo-row-component>
        `
    }

    async before() {
        await TodoRepository.fetch()
    }

    template () {
        const items = TodoRepository.getAll()
            .map(this.itemToComponent.bind(this))
            .join('')

        return /*html*/`
            <div>
                <div class="listing">
                    ${items}
                </div>
                <div>
                    <input type="text">
                </div>
            </div>
        `
    }

    events () {
        this.keyUpEnter('input', (e) => {
            const data = {name: e.target.value}

            const item = TodoRepository.add(data)
            TodoRepository.persist(item)

            const listing = this.query('.listing')

            this.appendTemplate(
                listing,
                this.itemToComponent(item)
            )

            this.scrollToBottom(listing)

            e.target.value = ''
        })
    }
}