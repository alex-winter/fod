export function escapeHTML(str) {
    return str.replace(/[&<>"'\\/]/g, match => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#39;',
        '\\': '&#92;',
        '/': '&#47;',
    }[match]))
}

export function escapeHTMLInObject(obj) {
    if (Array.isArray(obj)) {
        return obj.map(item => escapeHTMLInObject(item));
    } else if (obj !== null && typeof obj === 'object') {
        const escapedObject = {};
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                const value = obj[key];
                if (typeof value === 'string') {
                    escapedObject[key] = escapeHTML(value);
                } else {
                    escapedObject[key] = escapeHTMLInObject(value);
                }
            }
        }
        return escapedObject;
    }
    return obj; 
}