import React, { Component } from 'react';
import curved from "svg-line-curved";
import {get as getPointsByColor} from '../../../providers/pointsProvider';

class GraphPage extends Component {

    constructor(props) {
        super(props);

        this.generatePaths = this.generatePaths.bind(this);
        this.createPointElem = this.createPointElem.bind(this);
        this.generateLines = this.generateLines.bind(this);
    }

    generatePaths(points, color) {
        let paths = [];

        if (points.length <= 1) {
            return paths;
        }

        let lastPoint = points[0];
        let path, point;

        for (let i=1; i<points.length; i++) {
            point = points[i];
            let dValue = curved(lastPoint.x, lastPoint.y, point.x, point.y);
            let path = <path key={dValue} d={dValue} stroke={color} fill="transparent"></path>;
            paths.push(path);
            lastPoint = point;
        }

        return paths;
    }


    createPointElem(point) {
        let { x, y } = point;
        return <circle key={`point_${x}_${y}`} cx={x} cy={y} stroke="black" r="0.65"/>;
    }

    generateLines(pointsByColor) {
        return Object.keys(pointsByColor).map((color) => {
            let points = pointsByColor[color];

            return <g key={color} stroke-width="0.4">
                {points.map(this.createPointElem)}
                {this.generatePaths(points, color)}
            </g>
        });
    }

    render() {
        let pointsByColor = getPointsByColor();

        return (
            <div id="graph-page" className='page'>
                <figure className="theimage">
                    <svg id="custom-shape" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">

                        {this.generateLines(pointsByColor)}

                    </svg>
                </figure>
            </div>

        );
    }
}

export default GraphPage;