import React  from 'react';
import * as ReactDOM from 'react-dom';
import {StyleSheetManager} from "styled-components"

import App from './app.js';

class MyWebComponent extends HTMLElement {
    constructor() {
        // Always call super first in constructor
        super();

        // Add shadow root to component.
        const shadow = this.attachShadow({ mode: 'open' });
        // convert element attributes to object k,v
        const props = Array.from(this.attributes).reduce((obj, item) => (obj[item.name] = item.value, obj) ,{});
        // Select the web component, then the shadowRoot
        ReactDOM.render(<StyleSheetManager target={shadow}>
            <App {...props}/>
        </StyleSheetManager>, shadow);
    }
}
customElements.define('my-webcomponent', MyWebComponent);