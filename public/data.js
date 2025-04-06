import { Item } from "./models/Item.js"

export const database = [
    // Fruits
    new Item('Banana (ripe)', 'moderate', 'Fruits', 'Excess Fructose', 'Ripe bananas are higher in fructose.'),
    new Item('Banana (unripe)', 'low', 'Fruits', 'Fructans', 'Greener bananas are lower FODMAP.'),
    new Item('Apple', 'high', 'Fruits', 'Excess Fructose', 'High in fructose and polyols.'),
    new Item('Blueberries', 'low', 'Fruits', 'Polyols', 'Safe in small servings (~20 blueberries).'),
    new Item('Watermelon', 'high', 'Fruits', 'Polyols', 'Contains excess fructose and polyols.'),
    new Item('Strawberries', 'low', 'Fruits', 'None', 'Generally safe in typical portions.'),
    new Item('Mango', 'high', 'Fruits', 'Excess Fructose', 'Very high in fructose.'),

    // Vegetables
    new Item('Broccoli (heads)', 'low', 'Vegetables', 'Fructans', 'Stems are higher in FODMAPs.'),
    new Item('Broccoli (stalks)', 'moderate', 'Vegetables', 'Fructans', 'Limit portion size.'),
    new Item('Cauliflower', 'high', 'Vegetables', 'Polyols', 'High in mannitol.'),
    new Item('Carrot', 'low', 'Vegetables', 'None', 'Low FODMAP in all serving sizes.'),
    new Item('Onion', 'high', 'Vegetables', 'Fructans', 'One of the highest FODMAP veggies.'),
    new Item('Garlic', 'high', 'Vegetables', 'Fructans', 'Avoid even in small amounts.'),
    new Item('Zucchini', 'low', 'Vegetables', 'Polyols', 'Low FODMAP under 65g.'),

    // Grains
    new Item('White Bread (wheat-based)', 'moderate', 'Grains', 'Fructans', 'Low FODMAP in small portions.'),
    new Item('Whole Wheat Bread', 'high', 'Grains', 'Fructans', 'High in fructans due to fiber.'),
    new Item('Oats', 'low', 'Grains', 'None', 'Plain oats are well tolerated.'),
    new Item('Rye Bread', 'high', 'Grains', 'Fructans', 'Very high in FODMAPs.'),
    new Item('Rice', 'low', 'Grains', 'None', 'All types of rice are low FODMAP.'),

    // Dairy
    new Item('Milk (cow)', 'high', 'Dairy', 'Lactose', 'Lactose is the issue here.'),
    new Item('Lactose-Free Milk', 'low', 'Dairy', 'None', 'Lactose removed.'),
    new Item('Yogurt (regular)', 'high', 'Dairy', 'Lactose', 'Choose lactose-free versions.'),
    new Item('Hard Cheese (Cheddar)', 'low', 'Dairy', 'None', 'Lactose mostly removed during aging.'),
    new Item('Soft Cheese (Brie)', 'moderate', 'Dairy', 'Lactose', 'Higher moisture means more lactose.'),
    new Item('Ice Cream', 'high', 'Dairy', 'Lactose', 'Unless lactose-free.'),
    
    // Bonus category examples
    new Item('Mushrooms (button)', 'high', 'Vegetables', 'Polyols', 'High in mannitol.'),
    new Item('Avocado', 'moderate', 'Fruits', 'Polyols', 'Limit to 1/8 of an avocado.'),
    new Item('Sweet Corn', 'moderate', 'Vegetables', 'Fructans', 'Fresh corn is better than canned.'),
]