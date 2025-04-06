import { Dom } from "./services/dom.js";
import { escapeHTML, escapeHTMLInObject } from "./services/escape-html.js";
import { isJSON } from "./services/isJson.js";
import { isURLEncoded } from "./services/isURLEncoded.js";

export class Component extends HTMLElement
{
    props = {}
    rootElementTagName = null

    constructor () {
        super()
        
        this.shadow = this.attachShadow({mode: 'open'})

        const coreStyles = Dom.stylesheet('/core.css')

        this.shadow.appendChild(coreStyles)

        Object.keys(this.dataset).forEach(key => {
            let value = this.dataset[key] ?? ''

            if (isURLEncoded(value)) {
                value = decodeURIComponent(value)
            }

            if (isJSON(value)) {
                value = escapeHTMLInObject(JSON.parse(value))
            } else if (typeof value === 'string' && key !== 'src') {
                value = escapeHTML(value)
            }
        
            this.props[key] = value
        })
    }

    propEncode(data) {
        return encodeURIComponent(
            JSON.stringify(
                data
            )
        )
    }

    /**
     * @param {string} css 
     */
    styles(css) {
        return ''
    }

    template () {
        throw new Error(`${this.constructor.name} missing template`)
    }

    events() {

    }

    rootQuery(query) {
        return document.querySelector(query)
    }

    query(query) {
        return this.shadow.querySelector(query)
    }

    /**
     * @param {string} query 
     * @param {(event) => void} event 
     */
    click(query, event) {
        this.attachEvents('click', query, event)
    } 

    /**
     * @param {string} query 
     * @param {(event) => void} event 
     */
    keyup(query, event) {
        this.attachEvents('keyup', query, event)
    } 

    keyUpEnter(query, event) {
        this.attachEvents('keyup:Enter', query, event)
    }

    attachEvents (eventKey, query, event) {
        this.shadow.querySelectorAll(query).forEach(element => {
            if (eventKey.includes(':')) {
                const [baseEvent, specificEvent] = eventKey.split(':');
    
                element.addEventListener(baseEvent, e => {
                    if (e.key === specificEvent) {
                        event(e)
                    }
                })
            } else {
                element.addEventListener(eventKey, event)
            }
        })
    }

    scrollToBottom (element) {
        requestAnimationFrame(() => {
            element.scrollTo({ 
                top: element.scrollHeight, 
                behavior: "smooth" 
            })
        })
    }

    async before () {

    }

    emit(eventKey, detail = undefined) {
        this.dispatchEvent(
            new CustomEvent(
                eventKey,
                {
                    bubbles: true,
                    cancelable: true,
                    detail
                }
            )
        )
    }

    connectedCallback() {
        this.before().then(() => {
            const style = Dom.style(this.styles())
            
            this.shadow.appendChild(style)

            const fragment = this.createFragment()

            this.rootElementTagName = fragment.firstElementChild.tagName.toLowerCase()

            this.shadow.appendChild(
                fragment
            )
            
            this.events()
        })
    }

    renderTemplate(template, context) {
        return template.replace(/{{\s*([^}]+)\s*}}/g, (match, logic) => {
            const run = new Function(
                logic.trim()
            )

            return run.bind(this)()
        });
    }

    createFragment() {
        return document.createRange().createContextualFragment(
            this.renderTemplate(
                this.template()
            )
        )
    }

    refresh() {
        this.shadow.replaceChild(
            this.createFragment(),
            this.shadow.querySelector(this.rootElementTagName)
        )
    }

    appendTemplate(element, template) {
        element.insertAdjacentHTML('beforeend', template)
    }

    /**
     * @return void
     */
    static load()
    {        
        customElements.define(
            this.getCustomElementName(),
            this
        )
    }

    static getCustomElementName() {
        return this.name
            .replace(/([a-z])([A-Z])/g, '$1-$2')
            .toLowerCase()
    }
}