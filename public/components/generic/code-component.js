import { Component } from "../../component.js";
import { getLineNumbers } from "../../services/code-lines.js";
import { CodeHighlighter } from "../../services/CodeHighlighter.js";
import { Http } from "../../services/Http.js";

export class CodeComponent extends Component {
    styles() {
        return /*css*/`
            :host {
                display: block;
                background: #2d2d2d;
                color: #ccc;
                padding: 16px;
                border-radius: 5px;
                font-family: "Courier New", monospace;
                overflow-x: auto;
                height: 100%;
                box-sizing: border-box;
            }

            h3 {
                color: white;
            }

            .code-container {
                display: flex;
            }

            .line-numbers {
                text-align: right;
                padding-right: 12px;
                user-select: none;
                color: #888;
            }

            .code-content {
                flex-grow: 1;
                white-space: pre-wrap;
            }

            .keyword { color: #f92672; }
            .number { color: #ae81ff; }
            .function { color: #66d9ef; }
            .tag { color: #f92672; }
            .attr-name { color: #a6e22e; }
            .attr-value { color: #e6db74; }
            .comment { color: #75715e; font-style: italic; }
        `;
    }

    async before () {
        this.file = await Http.getFile(this.props.src)
    }

    template() {
        const file = this.file
        const highlighted = CodeHighlighter.highlight(file)

        return /*html*/`
            <h3>${this.props?.title || ''}</h3>
            <pre class="code-container mt-3">
                <code class="line-numbers">${ getLineNumbers(file) }</code>
                <code class="code-content">${highlighted}</code>
            </pre>
        `;
    }
}
