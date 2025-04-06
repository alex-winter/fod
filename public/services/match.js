export function match(value, cases) {
    if (typeof cases !== 'object' || cases === null) {
        throw new Error('Cases must be an object');
    }

    for (const key in cases) {
        if (Object.prototype.hasOwnProperty.call(cases, key) && value === key) {
            return cases[key]
        }
    }

    return undefined
}