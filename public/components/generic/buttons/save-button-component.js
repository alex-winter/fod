import { Component } from "../../../component.js";

export class SaveButtonComponent extends Component
{
    template () {
        return /*html*/`
            <button class="button primary">
                <i class="fa-solid fa-floppy-disk"></i> Save
            </button>
        `
    }
}