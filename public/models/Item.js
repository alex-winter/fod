
export const levels = [
    {
        label: 'low',
        description: 'Eat freely',
    },
    {
        label: 'moderate',
        description: 'Be mindful',
    },
    {
        label: 'high',
        description: 'Avoid Completely',
    },
]

export const categories = [
    'Vegetables',
    'Fruits',
    'Grains',
    'Dairy',
]

export const carbohydrates = [
    'Excess Fructose',
    'Lactose',
    'Fructans',
    'Galactans',
    'Polyols',
]

export class Item {
    name = ''
    level = null
    category = ''
    carbohydrate = ''
    notes = null

    constructor (
        name,
        level,
        category,
        carbohydrate,
        notes = null,
    ) {
        this.name = name
        this.level = level
        this.category = category
        this.carbohydrate = carbohydrate
        this.notes = notes
    }
}