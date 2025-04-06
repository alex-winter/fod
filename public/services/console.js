export class Console
{
    static varDump (...items) {

        const formated = []

        for (let item of items) {
            formated.push(this.formatInput(item))
        }

        console.log(
            ...formated
        )
    }

    static formatInput(item) {
        if (typeof item === 'string') {
            return `(string) "${item}"\n`
        }

        return item
    }
}