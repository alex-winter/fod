import { Component } from "../component.js"
import { database } from "../data.js"

export class AppComponent extends Component {
    styles () {
        return /*css*/`
            * {
                box-sizing: border-box;
                margin: 0;
                padding: 0;
            }

            body {
                font-family: 'Segoe UI', Roboto, sans-serif;
                background-color: #f7f9fc;
                color: #333;
                padding: 2rem;
            }

            h1 {
                text-align: center;
                font-size: 2.5rem;
                margin-bottom: 2rem;
                color: #222;
            }

            .search-container {
                display: flex;
                justify-content: center;
                margin-bottom: 2.5rem;
            }

            input[type="text"] {
                width: 100%;
                max-width: 500px;
                padding: 0.75rem 1rem;
                font-size: 1rem;
                border: 1px solid #ccc;
                border-radius: 0.6rem;
                box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
                transition: border-color 0.2s ease;
            }

            input[type="text"]:focus {
                border-color: #007BFF;
                outline: none;
            }

            .listing {
                display: grid;
                gap: 1.5rem;
                grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
                padding: 0 1rem;
            }

            .item {
                background-color: #fff;
                border-radius: 1rem;
                padding: 1.5rem;
                box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);
                transition: transform 0.2s ease, box-shadow 0.2s ease;
            }

            .item:hover {
                transform: translateY(-4px);
                box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
            }

            .item h2 {
                margin-bottom: 0.75rem;
                font-size: 1.3rem;
                color: #222;
            }

            .item p {
                font-size: 0.95rem;
                margin: 0.25rem 0;
                line-height: 1.4;
            }

            .level-tag {
                display: inline-block;
                padding: 0.25rem 0.6rem;
                font-size: 0.75rem;
                border-radius: 0.5rem;
                font-weight: bold;
                color: white;
                margin-left: 0.5rem;
                text-transform: uppercase;
                letter-spacing: 0.5px;
            }

            .level-low {
                background-color: #28a745;
            }

            .level-moderate {
                background-color: #fd7e14;
            }

            .level-high {
                background-color: #dc3545;
            }

            .empty-state {
                text-align: center;
                font-size: 1.1rem;
                color: #999;
                margin-top: 3rem;
            }

            @media (max-width: 600px) {
                h1 {
                    font-size: 2rem;
                }

                input[type="text"] {
                    font-size: 0.95rem;
                }
            }
        `
    }

    template () {
        return /*html*/`
            <div>
                <h1>FODMAP Food Finder</h1>
                <div class="search-container">
                    <input type="text" placeholder="Search for a food..." />
                </div>
                <div class="listing"></div>
            </div>
        `
    }

    renderItems (query = '') {
        const listing = this.query('.listing')

        const results = database.filter(item =>
            item.name.toLowerCase().includes(query.toLowerCase())
        )

        if (!results.length) {
            listing.innerHTML = `<div class="empty-state">😕 No foods found. Try a different search term.</div>`
            return
        }

        const view = results.map(item => {
            const levelClass = {
                low: 'level-low',
                moderate: 'level-moderate',
                high: 'level-high'
            }[item.level] || 'level-low'

            return /*html*/`
                <div class="item">
                    <h2>
                        ${item.name}
                        <span class="level-tag ${levelClass}">${item.level}</span>
                    </h2>
                    <p><strong>Category:</strong> ${item.category}</p>
                    <p><strong>Carbohydrate:</strong> ${item.carbohydrate || 'None'}</p>
                    <p><strong>Notes:</strong> ${item.notes || 'No notes available.'}</p>
                </div>
            `
        }).join('')

        this.replaceTemplate(listing, view)
    }

    events () {
        const input = this.query('input')

        this.keyup('input', e => {
            const query = e.target.value.trim()
            this.renderItems(query)
        })

        // Initial render
        this.renderItems()
    }
}
