import React from 'react';
import convert from 'color-convert';
import PropTypes from 'prop-types';

const regexRgb = /^rgb[(](?:\s*0*(?:\d\d?(?:\.\d+)?(?:\s*%)?|\.\d+\s*%|100(?:\.0*)?\s*%|(?:1\d\d|2[0-4]\d|25[0-5])(?:\.\d+)?)\s*(?:,(?![)])|(?=[)]))){3}[)]$/gm;
const regexHex = /^#(?:[A-Fa-f0-9]{3}){1,2}$/gm;
const regexHsl = /^hsl[(]\s*0*(?:[12]?\d{1,2}|3(?:[0-5]\d|60))\s*(?:\s*,\s*0*(?:\d\d?(?:\.\d+)?\s*%|\.\d+\s*%|100(?:\.0*)?\s*%)){2}\s*[)]$/gm;

export default class ColorPickerIput extends React.Component {
    getHsl = (arr) => {
        arr[1] = arr[1] + "%";
        arr[2] = arr[2] + "%";
        return `hsl(${arr.join()})`;
    }
    
    convertColor = () => {
        const colorInput = this.colorInput.value;
        let headerText = "Znalazłem kolor w bazie ;)";
        let headerColor = "green";
        let colorDisplay1 = "";
        let colorDisplay2 = "";
        let colorDisplay3 = colorInput;

        if (regexHsl.test(colorInput)) {
            const colorArray = colorInput.substring(colorInput.lastIndexOf("(") + 1, colorInput.lastIndexOf(")")).replace(/\%/g, '').split(",");
            colorDisplay1 = `#${convert.hsl.hex(colorArray)}`;
            colorDisplay2 = `rgb(${convert.hsl.rgb(colorArray).join()})`;
            regexHsl.test(colorInput);
        }
        else if (regexRgb.test(colorInput)) {
            const colorArray = colorInput.substring(colorInput.lastIndexOf("(") + 1, colorInput.lastIndexOf(")")).split(",");
            colorDisplay1 = `#${convert.rgb.hex(colorArray)}`;
            colorDisplay2 = this.getHsl(convert.rgb.hsl(colorArray));
            regexRgb.test(colorInput);
        }
        else if (regexHex.test(colorInput)) {
            colorDisplay1 = `rgb(${convert.hex.rgb(colorInput)})`;
            colorDisplay2 = this.getHsl(convert.hex.hsl(colorInput));
            regexHex.test(colorInput);
        }
        else {
            headerText = "Niewłaściwy kolor ;(  Weź coś z tym zrób!";
            headerColor = "red";
        }
        this.colorInput.value = "";
        this.props.getColors(headerText, headerColor, colorDisplay1, colorDisplay2, colorDisplay3);
    }

    handlerClick = () => {
        this.convertColor();
    }

    handlerKeyPress = (e) => {
        e.charCode == 13 && this.convertColor();
    }

    render() {
        return <div>
            <input type="text" onKeyPress={this.handlerKeyPress} ref={input => this.colorInput = input} />
            <button onClick={this.handlerClick}>Konwertuj z tym!</button>
        </div>
    }
}

ColorPickerIput.propTypes = {
    getColors: PropTypes.func.isRequired
}
