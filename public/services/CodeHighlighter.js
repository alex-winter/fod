export class CodeHighlighter {
    openTags = /</g;
    closeTags = />/g;

    jsKeyWords = /\b(const|let|var|function|return|if|else|for|while|switch|case|break|new|class|extends|super|import|from|export|default|try|catch|finally|throw|async|await)\b/g;
    numbers = /\b\d+(\.\d+)?\b/g;
    jsFunctions = /\b([a-zA-Z_]\w*)\s*(?=\()/g;

    htmlTags = /(&lt;\/?)([a-zA-Z0-9-]+)(.*?)(\/?&gt;)/g;
    attributes = /([a-zA-Z\-:]+)=(".*?"|'.*?')/g;
    comments = /(&lt;!--[\s\S]*?--&gt;)/g;

    static detectLanguage(file) {
        if (file.trim().startsWith("<!DOCTYPE html") || file.trim().startsWith("<html")) {
            return 'html'
        }
        return 'js'
    }

    static highlight(code) {
        const language = this.detectLanguage(code)

        return match(language, {
            'html': this.html(code),
            'js': this.js(code),
        })
    }

    static replaceTags(code) {
        return code
            .replace(this.openTags, "&lt;")
            .replace(this.closeTags, "&gt;");
    }

    static html(code) {
        return this
            .replaceTags(code)
            .split("\n")
            .map(line => {
                line = line.replace(this.comments, '<span class="comment">$1</span>');
                return line.replace(this.htmlTags, (match, open, tagName, attrs, close) => {
                    const parsedAttrs = attrs.replace(this.attributes, '<span class="attr-name">$1</span>=<span class="attr-value">$2</span>');
                    return `${open}<span class="tag">${tagName}</span>${parsedAttrs}${close}`;
                });
            })
            .join("\n");
    }

    static js(code) {
        // Highlight the JavaScript first
        const highlightedCode = code.split("\n").map(line => {
            return line
                .replace(this.jsKeyWords, '<span class="keyword">$&</span>')  
                .replace(this.numbers, '<span class="number">$&</span>')  
                .replace(this.jsFunctions, '<span class="function">$1</span>');
        }).join("\n");

        // Escape HTML tags after highlighting
        return this.replaceTags(highlightedCode);
    }
}
