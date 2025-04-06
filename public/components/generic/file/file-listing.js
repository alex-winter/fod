import { Component } from "../../../component.js";
import { File } from "../../../services/File.js";
import { useState } from "../../../services/state.js";
import { forEach } from "../../../services/template-functions.js";

export class FileListingComponent extends Component
{
    constructor () {
        super()

        const [set, get] = useState([])

        this.nameCount = []

        this.setFiles = (...files) => {
            /** @type {Array} existing */
            const existing = get()
            set([
                ...existing, 
                ...files.map(upload => {
                    this.nameCount[upload.name] = 0;

                    const extIndex = upload.name.lastIndexOf(".")
                    const hasExtension = extIndex > 0
                    
                    const baseName = hasExtension ? upload.name.slice(0, extIndex) : upload.name
                    const extension = hasExtension ? upload.name.slice(extIndex) : ''
                
                    let fileName = upload.name
                
                    if (existing.find(f => f.name === upload.name)) {
                        const count = ++this.nameCount[upload.name]
                        fileName = hasExtension 
                            ? `${baseName} (${count})${extension}` 
                            : `${upload.name} (${count})`;
                    }
                
                    return {
                        name: fileName,
                        size: upload.size
                    };
                })
            ])
        }
        this.getFiles = get 
    }

    styles () {
        return /*css*/`
            .row {
                background-color: snow;
                border-radius: 4px;
            }
        `
    }
    
    template () {
        const files = this.getFiles()
        return /*html*/`
            <div>
                <h3>Files</h3>
                ${forEach(files, this.fileTemplate)}
                ${files.length < 1 ? 'No files' : ''}
            </div>
        `
    }

    fileTemplate (file) {
        return /*html*/`
            <div class="row p-2">
                <i class="fa-solid fa-file"></i> ${file.name}
                ${File.formatFileSize(file.size)}
            </div>
        `
    }
}