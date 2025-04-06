export function isURLEncoded(str) {
    try {
        return str !== decodeURIComponent(str)
    } catch (e) {
        return false
    }
}