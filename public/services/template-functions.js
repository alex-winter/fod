/**
 * @param {any[]} data 
 * @param {item => string} fn 
 * @returns string
 */
export function forEach(data, fn) {
    return data.map(fn).join('')
}