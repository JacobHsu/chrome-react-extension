/* src/popup.js */
import React from 'react';
import ReactDOM from 'react-dom';
import "./popup.css";

console.log('popup.js')

class ContentReact extends React.Component {
    render() {
        return (
            <div className={'react-extension'}>
                <p>Hello From React Extension! popup.js</p>
            </div>
        )
    }
}

const app = document.createElement('div');
document.body.appendChild(app);
ReactDOM.render(<ContentReact />, app);