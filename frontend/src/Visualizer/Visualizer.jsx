import React from "react";

import './Visualizer.css'
import axios from "axios";

// Change this value for the speed of the animations.
const ANIMATION_SPEED_MS = 1;

// Change this value for the number of bars (value) in the array.
const NUMBER_OF_ARRAY_BARS = 310;

// This is the main color of the array bars.
const PRIMARY_COLOR = 'crimson';

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = 'red';

export default class Visualizer extends React.Component{


    constructor(props) {
        super(props);

    this.state = {
        array: [],
    }
    }

    resetArray() {
        axios.get('http://localhost:8080/api/array_data/reset', {responseType: 'json'})
            .then((response) => {
                let array = response.data
                this.setState({array})
            })
    }

    quickSort() {
        axios.get('http://localhost:8080/api/algorithms/quicksort', {responseType: 'json'})
            .then((response) => {
                let array = response.data
                this.setState({array})
            })
    }

    render() {
        const {array} = this.state;

        return (
            <div className="array-container">
                {array.map((value, idx) => (
                    <div
                        className="array-bar"
                        key={idx}
                        style={{
                            backgroundColor: PRIMARY_COLOR,
                            height: `${value}px`,
                        }}></div>
                ))}
                <button onClick={() => this.resetArray()}>Generate New Array</button>
                <button onClick={() => this.quickSort()}>Quick Sort</button>
            </div>
        );
    }
}


function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
}
