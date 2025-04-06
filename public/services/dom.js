export class Dom {
    constructor() {
        throw new Error('Dom is a static utility class and cannot be instantiated.')
    }

    static stylesheet(href) {
        const element = document.createElement('link')

        element.rel = 'stylesheet'
        element.href = href

        return element
    }

    static style(css) {
        const element = document.createElement('style')

        element.textContent = css

        return element
    }
}