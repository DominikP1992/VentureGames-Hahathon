import React from 'react';

const ColorPickerOutput = (props) => (
    <div>
        <h1 style={{ color: props.headerColor }}>{props.headerText}</h1>
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

export default ColorPickerOutput;