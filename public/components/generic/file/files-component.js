import { Component } from "../../../component.js";

export class FilesComponent extends Component
{
    template () {
        return /*html*/`
            <div>
                <file-listing-component></file-listing-component>
                <simple-upload-component></simple-upload-component>
            </div>
        `
    }

    events() {
        const upload = this.query('simple-upload-component')
        const listing = this.query('file-listing-component')

        upload.addEventListener('change', e => {
            listing.setFiles(...e.detail)

            listing.refresh()
        })
    }
}