import ReactGridLayout from 'react-grid-layout';
import React, {Component} from 'react';
import ProjectsGridItem from './ProjectsGridItem';

class ProjectsGrid extends Component {
    static defaultProps = {
        className: "layout",
        isDraggable: false,
        isResizable: false,
        projects: [],
        cols: 5,
        itemWidth: 1,
        rowHeight: 30,
        onLayoutChange: function() {}
    };

    constructor(props) {
        super(props);

        const layout = this.generateLayout();
        this.state = { layout };
    }

    generateDOM() {
        return this.props.projects.map(function(project) {
            return (
                <div key={project.id}>
                    <ProjectsGridItem
                        key={project.id}
                        title={project.title}
                        thumbnail={project.thumbnail}
                        categories={project.categories}
                    />
                </div>
            );
        });
    }

    generateLayout() {
        const p = this.props;
        return p.projects.map(function(item, i) {
            var h = Math.ceil(Math.random() * 4) + 1;
            return {
                x: (i * p.itemWidth) % p.cols,
                y: Math.floor(i / p.cols) * h,
                w: p.itemWidth,
                h: h,
                i: i.toString()
            };
        });
    }

    onLayoutChange(layout) {
        this.props.onLayoutChange(layout);
    }

    render() {
        return (
            <ReactGridLayout
                width={1170}
                layout={this.state.layout}
                onLayoutChange={this.onLayoutChange}
                {...this.props}
            >
                {this.generateDOM()}
            </ReactGridLayout>
        );
    }
}

export default ProjectsGrid;