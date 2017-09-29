import React from 'react';
import ReactDOM from 'react-dom';

//components
import ColorPicker from "./colorpicker.jsx";
class App extends React.Component {
    render() {
        return <div>
            <ColorPicker />
        </div>
    }
}

document.addEventListener('DOMContentLoaded', function () {
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});