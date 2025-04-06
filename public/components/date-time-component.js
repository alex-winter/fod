import { Component } from "../component.js"

export class DateTimeComponent extends Component
{
    styles() {
        return /*css*/`
            .time {
                font-size: 2em;
            }
        `
    }

    template () {
        const now = new Date();

        // Format time as HH:MM:SS AM/PM
        const hours = now.getHours() % 12 || 12; // Convert 0 to 12-hour format
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        const amPm = now.getHours() >= 12 ? 'PM' : 'AM';

        this.formattedTime = `${hours}:${minutes}:${seconds} ${amPm}`;

        // Format date as "Thursday, March 28, 2024"
        this.formattedDate = now.toLocaleDateString('en-US', {
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric'
        });
        
        return /*html*/`
            <div>
                <p class="time">${this.formattedTime}</p>
                <p class="date">${this.formattedDate}</p>
            </div>
        `
    }

    events () {
        setInterval(() => {
            this.refresh()
        }, 1000)
    }
}