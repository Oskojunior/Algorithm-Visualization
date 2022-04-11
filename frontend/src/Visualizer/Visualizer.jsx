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
        for (let i = 0; i < this.animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            if (this.animations[i].action === 0) {
                let barOneIdx = this.animations[i].numA
                let barTwoIdx = this.animations[i].numB
                let barThreeIdx = this.animations[i].pivot
                let barOneStyle = arrayBars[barOneIdx].style
                let barTwoStyle = arrayBars[barTwoIdx].style
                let barThreeStyle = arrayBars[barThreeIdx].style
                setTimeout(() => {
                    if (i === 0) {
                        barOneStyle.backgroundColor = 'blue'
                        barTwoStyle.backgroundColor = 'blue'
                        barThreeStyle.backgroundColor = 'green'
                    } else {
                        if (this.animations[i].numA !== this.animations[i - 1].numA) {
                            let previousBar = this.animations[i - 1].numA
                            arrayBars[previousBar].style.backgroundColor = 'crimson'
                            barOneStyle.backgroundColor = 'blue'
                        } else
                            barOneStyle.backgroundColor = 'blue'

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
                setTimeout(() => {
                    let pivotIdx = this.animations[i].pivot
                    let barTwoIdx = this.animations[i].numB
                    let pivotNewHeight = arrayBars[barTwoIdx];
                    let barTwoNewHeight = arrayBars[pivotIdx];
                    arrayBars[pivotIdx].style.height = `${pivotNewHeight}px`
                    arrayBars[pivotIdx].style.backgroundColor = 'blue'
                    arrayBars[barTwoIdx].style.height = `${barTwoNewHeight}px`
                    arrayBars[barTwoIdx].style.backgroundColor = 'green'
                }, i * 3)
            } else if (this.animations[i].action === 2) {
                setTimeout(() => {
                    let barOneIdx = this.animations[i].numA
                    let barTwoIdx = this.animations[i].numB
                    let barOneNewHeight = arrayBars[barTwoIdx];
                    let barTwoNewHeight = arrayBars[barOneIdx];
                    arrayBars[barOneIdx].style.height = `${barOneNewHeight}px`
                    arrayBars[barOneIdx].style.backgroundColor = 'blue'
                    arrayBars[barTwoIdx].style.height = `${barTwoNewHeight}px`
                    arrayBars[barTwoIdx].style.backgroundColor = 'blue'
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
