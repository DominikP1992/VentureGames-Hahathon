import React from 'react';

import ColorPickerInput from "./colorpickerInput.jsx";
import ColorPickerOutput from "./colorpickerOutput.jsx";

export default class ColorPicker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            headerText: "Wpisz kolor",
            headerColor: "Green",
            colorDisplay1: "",
            colorDisplay2: "",
            colorDisplay3: "",
        }
    }

    getColors = (headerText, headerColor, colorDisplay1, colorDisplay2, colorDisplay3) => {
        this.setState({
            headerText: headerText,
            headerColor: headerColor,
            colorDisplay1: colorDisplay1,
            colorDisplay2: colorDisplay2,
            colorDisplay3: colorDisplay3
        })
    }

    render() {
        return <div>
            <ColorPickerOutput
                headerText={this.state.headerText}
                headerColor={this.state.headerColor}
                colorDisplay1={this.state.colorDisplay1}
                colorDisplay2={this.state.colorDisplay2}
                colorDisplay3={this.state.colorDisplay3}
            />
            <ColorPickerInput getColors={this.getColors} />
        </div>
    }
}
