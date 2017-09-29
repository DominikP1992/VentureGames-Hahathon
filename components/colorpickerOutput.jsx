import React from 'react';
import PropTypes from 'prop-types';

const ColorPickerOutput = (props) => (
    <div>
        <div style={{ "display": "flex", "marginBottom": "10px" }}>
            <img src="./assets/img/edi.png" alt="Edi" />
            <h1 style={{ color: props.headerColor }}>{props.headerText}</h1>
        </div>
        {
            props.colorDisplay1.length > 0 && <div>
                <div style={{
                    width: 100,
                    height: 100,
                    backgroundColor: props.colorDisplay1,
                }}>
                </div>
                <h4>Kolor w formacie 1: {props.colorDisplay1}</h4>
                <h4>Kolor w formacie 2: {props.colorDisplay2}</h4>
                <h4>Kolor w formacie 3: {props.colorDisplay3}</h4>
            </div>
        }
    </div>
)

ColorPickerOutput.propTypes = {
    colorDisplay1: PropTypes.string.isRequired,
    colorDisplay2: PropTypes.string.isRequired,
    colorDisplay3: PropTypes.string.isRequired,
    headerColor: PropTypes.string,
    headerText: PropTypes.string,
}

export default ColorPickerOutput;