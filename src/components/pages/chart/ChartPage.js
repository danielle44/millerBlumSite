import React, { Component } from 'react';
import {Doughnut} from 'react-chartjs-2';

class ChartPage extends Component {
    render() {
        let types = [
            { parent: 'P1', children: ['P1-A', 'P1-B', 'P1-C', 'P1-D'], color: "#FF9900" },
            { parent: 'P2', children: ['P2-A', 'P2-B'], color: "#DC3912" },
            { parent: 'P3', children: ['P3-A', 'P3-B', 'P3-C'], color: "#990099" }
        ];
        let hoverColor = "black";
        let emptyColor = "#f6f6f6";


        let getChildrenLabel = function(type) {
            return type.children;
        };

        let getChildrenCount = function(type) {
            return type.children.length;
        };

        let childrenLabels = getChildrenLabel(types[0]);

        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        let allChildrenCount = types.map(type => type.children.length).reduce(reducer, 0);
        let p1ChildrenCount = getChildrenCount(types[0]);


        let data =  {
            datasets: [{
                backgroundColor: types[0].children.map(p1Child => types[0].color),
                hoverBackgroundColor: types[0].children.map(p1Child => hoverColor),
                data: types[0].children.map(p1Child => 1).concat(allChildrenCount-p1ChildrenCount)
            },
            {
                backgroundColor: (childrenLabels.map(child => emptyColor)).concat(types.map(type => type.color)),
                hoverBackgroundColor: (childrenLabels.map(child => emptyColor)).concat(types.map(type => hoverColor)),
                data: (childrenLabels.map(child => 0)).concat(types.map(type => type.children.length))
            }
            ],
            labels: childrenLabels.concat(types.map(type => type.parent))
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