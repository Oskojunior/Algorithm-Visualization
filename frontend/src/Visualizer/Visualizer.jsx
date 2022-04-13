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

    animations = []

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
                this.animations = response.data.map((animation) => {
                    const ani = { pivot: animation.pivot, numA: animation.numA, numB: animation.numB, action: animation.action}
                    return ani
                })
                this.animate()
            })
    }

    animate() {
        const arrayBars = document.getElementsByClassName('array-bar');
        for (let i = 0; i < this.animations.length; i++) {
            let barOneIdx = this.animations[i].numA
            let barTwoIdx = this.animations[i].numB
            let barThreeIdx = this.animations[i].pivot
                if (this.animations[i].action === 0) {
                    let barTwoStyle = arrayBars[barTwoIdx].style
                    let barThreeStyle = arrayBars[barThreeIdx].style
                    setTimeout(() => {
                        if (i === 0) {
                            let barOneStyle = arrayBars[barOneIdx].style
                            barOneStyle.backgroundColor = 'blue'
                            barTwoStyle.backgroundColor = 'blue'
                            barThreeStyle.backgroundColor = 'green'
                        } else {
                            if (this.animations[i].numA !== this.animations[i - 1].numA) {
                                let previousBar = this.animations[i - 1].numA
                                if(previousBar != 310) {
                                    arrayBars[previousBar].style.backgroundColor = 'crimson'
                                }
                                if(barOneIdx != 310) {
                                    let barOneStyle = arrayBars[barOneIdx].style
                                    barOneStyle.backgroundColor = 'blue'
                                }
                            } else {
                                let barOneStyle = arrayBars[barOneIdx].style
                                barOneStyle.backgroundColor = 'blue'
                            }

                            if (this.animations[i].numB !== this.animations[i - 1].numB) {
                                let previousBar = this.animations[i - 1].numB
                                arrayBars[previousBar].style.backgroundColor = 'crimson'
                                barTwoStyle.backgroundColor = 'blue'
                            } else
                                barTwoStyle.backgroundColor = 'blue'

                            if (this.animations[i].pivot !== this.animations[i - 1].pivot) {
                                let previousBar = this.animations[i - 1].pivot
                                arrayBars[previousBar].style.backgroundColor = 'crimson'
                                barThreeStyle.backgroundColor = 'green'
                            } else
                                barThreeStyle.backgroundColor = 'green'
                        }
                    }, i * 3);
                } else if (this.animations[i].action === 1) {
                    let barTwoStyle = arrayBars[barTwoIdx].style
                    let barThreeStyle = arrayBars[barThreeIdx].style
                    setTimeout(() => {
                        let pivotNewHeight = barTwoStyle.height;
                        let barTwoNewHeight = barThreeStyle.height;
                        barThreeStyle.height = `${pivotNewHeight}`
                        barThreeStyle.backgroundColor = 'blue'
                        barTwoStyle.height = `${barTwoNewHeight}`
                        barTwoStyle.backgroundColor = 'green'
                    }, i * 3)
                } else if (this.animations[i].action === 2) {
                    let barOneStyle = arrayBars[barOneIdx].style
                    let barTwoStyle = arrayBars[barTwoIdx].style
                    setTimeout(() => {
                        let barOneNewHeight = barTwoStyle.height;
                        let barTwoNewHeight = barOneStyle.height;
                        barOneStyle.height = `${barOneNewHeight}`
                        barTwoStyle.height = `${barTwoNewHeight}`
                    }, i * 3)
                }
        }
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
