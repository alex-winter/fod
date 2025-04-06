import {Component} from '../component.js'

export class WidgetCardComponent extends Component 
{
    styles() {
        return /*css*/`
            :host {
                display: block;
                background-color: white;
                padding: 20px;
                border-radius: 4px;
                border-top: 2px solid #1abc9c;
            } 
        `
    }

    template() {
        return /*html*/`
            <div>
                <slot></slot>
            </div>
        `
    }
}
