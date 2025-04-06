import { Component } from "../component.js";

export class NavigationMenuComponent extends Component
{
    styles() {
        return /*css*/`
            :host {
                background-color: yellow;
                width: 100%;
            }

            a {
                box-sizing: border-box;
                display: block;
                padding: 8px;
                width: 100%;
                color: #ecf0f1;
                text-decoration: none;
                margin-bottom: 4px;
            }

            a:hover {
                color: #1abc9c;
            }

            a.active {
                background-color: #1abc9c;
            }

            a.active:hover {
                background-color: #1abc9c;
                color: #ecf0f1;
            }
        `
    }

    template() {
        return /*html*/`
            <div>
                <a href="/example/">Dashboard</a>
                <a href="/example/about">About Me</a>
                <a href="" class="alert-test">test alert event</a>
            </div>
        `
    }

    events() {
        this.click('.alert-test', () => {
            alert('test alert event')
        })

        this.shadow.querySelectorAll('a').forEach(a => {
            if (a.getAttribute('href') === window.location.pathname) {
                a.classList.add('active')
            }
        })
    }
}