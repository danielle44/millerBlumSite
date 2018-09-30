import React, { Component } from 'react';
import curved from "svg-line-curved";
import {get as getPointsByColor} from '../../../providers/pointsProvider';
import consts from '../../../consts';

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
        let path, point, dValue;

        for (let i=1; i<points.length; i++) {
            point = points[i];
            dValue = curved(lastPoint.x, lastPoint.y, point.x, point.y);
            path = <path key={dValue} d={dValue} stroke={color}></path>;
            paths.push(path);
            lastPoint = point;
        }

        return paths;
    }


    createPointElem(point, color) {
        let { x, y } = point;
        return <circle key={`point_${x}_${y}`} cx={x} cy={y} stroke={color}/>;
    }

    generateLines(pointsByColor) {
        return Object.keys(pointsByColor).map((color) => {
            let points = pointsByColor[color];

            return <g className="graph-line" key={color} id={`line-${color}`}>
                {this.generatePaths(points, color)}
                {points.map((point) => this.createPointElem(point, color))}
            </g>
        });
    }

    render() {
        let pointsByColor = getPointsByColor();
        let { width, height } = consts.graph;

        return (
            <div id="graph-page" className='page'>
                <figure className="theimage">
                    <svg id="custom-shape" xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${width} ${height}`}>

                        {this.generateLines(pointsByColor)}

                    </svg>
                </figure>
            </div>

        );
    }
}

export default GraphPage;