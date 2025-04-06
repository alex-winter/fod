export class Http
{
    static async getFile(url, options = {}) {
        const response = await fetch(url, options)
        const file = await response.text()

        return file
    }
}