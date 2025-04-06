import { Component } from "../../../component.js";

export class SimpleUploadComponent extends Component
{
    styles () {
        return /*css*/`
            input {
                display: none;
            }
        `
    }

    template () {
        return /*html*/`
            <div>
                <input type="file" multiple>
                <file-upload-button-component data-text="Upload File"></file-upload-button-component>
            </div>
        `
    }

    events () {
        const input = this.query('input')

        this.click('file-upload-button-component', input.click.bind(input))

        input.addEventListener('change', () => {
            this.emit('change', Array.from(input.files))
        })
    }
}