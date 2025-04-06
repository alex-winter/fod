import { Component } from "../component.js"

export class Router {
    /**
     * @type {Object.<string, typeof Component>}
     */
    mapping = {}

    /**
     * @param {Object.<string, typeof Component>} mapping
     */
    constructor (mapping) {
        this.mapping = mapping
    }

    /**
     * @param {string} url 
     */
    navigateTo(url) {
        window.history.pushState(null, null, url)

        renderContent(url)
    }
    
    /**
     * @param {string} url 
     */
    renderContent(url) {
        const content = document.getElementById('content')
        const component = this.mapping[url]
        const componentName = component.getCustomElementName()
        
        content.innerHTML = `<${componentName}></${componentName}>`
    }
}