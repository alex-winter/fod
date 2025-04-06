import { Component } from "../../../component.js";

export class FileUploadButtonComponent extends Component
{
    template () {
        return /*html*/`
            <button class="button warning">
                <i class="fa-solid fa-file"></i> ${this.props.text}
            </button>
        `
    }
}