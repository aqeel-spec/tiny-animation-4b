import React from 'react'
import Backimage from './images/car_wheel_left.png';
import Backimage2 from './images/car_wheel_right.png';
import './style.css';

function carRace() {
    return (
        <div class="container">
            <div class="sky">
                <div class="trees"></div>
                <div class="track"></div>
                <div class="car">
                    <div class="wheel wheel1">
                        <img src={Backimage} alt="" />
                    </div>
                    <div class="wheel wheel2">
                        <img src={Backimage2} alt="" />
                    </div>
                </div>
                <div class="trees2"></div>
            </div>
            <h2>Hello WOrld</h2>
        </div>
    )
}

export default carRace