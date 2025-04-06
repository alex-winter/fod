/**
 * @param {string} code 
 * @returns {string}
 */
export function getLineNumbers(code) {
    return code
        .split("\n")
        .map((_, i) => i + 1)
        .join("\n")
}