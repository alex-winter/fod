import { generateUUID } from "./generate-uuid.js"

export class DataRepository
{
    data = []

    static toDataUuidTagged(item) {
        return {
            dataUuid: generateUUID(), 
            ...item,
        }
    }

    static map(...items) {
        return items.map(
            DataRepository.toDataUuidTagged
        )
    }

    add(...items) {
        const mapped = DataRepository.map(...items)

        this.data.push(
            ...mapped
        )

        return mapped
    }

    getAll() {
        return this.data
    }

    remove(...itemsToRemove) {
        for (let itemToRemove of itemsToRemove) {
            const index = this.data.findIndex(
                item => item.dataUuid === itemToRemove.dataUuid
            )

            if (index !== -1) {
                this.data.splice(index, 1);
            }
        }
    }
}