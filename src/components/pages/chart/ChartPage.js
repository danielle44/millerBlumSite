import React, { Component } from 'react';
import {Doughnut} from 'react-chartjs-2';

class ChartPage extends Component {
    render() {

        let data =  {
            datasets: [{
                backgroundColor: [
                    "#3366CC",
                    "#DC3912",
                    "#FF9900",
                    "#109618",
                    "#990099",
                    "#3B3EAC"
                ],
                hoverBackgroundColor: [
                    "black",
                    "black",
                    "black",
                    "black",
                    "black",
                    "black"
                ],
                data: [
                    0,
                    0,
                    8,
                    10,
                    84,
                    4
                ]
            },
            {
                backgroundColor: [
                    "#3366CC",
                    "#DC3912",
                    "#f6f6f6"
                ],
                hoverBackgroundColor: [
                    "black",
                    "black",
                    "#f6f6f6"
                ],
                data: [
                    8,
                    99,
                    200
                ]
            },
            {
                backgroundColor: [
                    "#3366CC",
                    "#DC3912",
                    "#f6f6f6"
                ],
                hoverBackgroundColor: [
                    "black",
                    "black",
                    "#f6f6f6"
                ],
                data: [
                    8,
                    99,
                    200
                ]
            }
            ],
            labels: [
            "A",
            "B",
            "C",
            "D",
            "E",
            "F"
            ]
        };

        return (
            <div id="chart-page" className='page'>
                <div className='doughnut-container'>
                    <Doughnut
                        width={500}
                        height={120}
                        data={data}
                    />
                </div>
            </div>
        );
    }
}

export default ChartPage;