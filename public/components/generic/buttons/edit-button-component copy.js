import { Component } from "../../../component.js";

export class EditButtonComponent extends Component
{
    template () {
        return /*html*/`
            <button class="button warning">
                <i class="fa-solid fa-pen"></i>
            </button>
        `
    }
}