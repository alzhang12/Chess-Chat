import React from 'react';

class Test extends React.Component {
    constructor(props) {
        // boilerplate to get component to work
        super(props);

        // set initial state
        this.state = {
            isDragging: false,
            squarePosition: {
                x: 0,
                y: 0,
            },
        };

        // create reference to canvas
        this.testRef = React.createRef();
        
        // on mouse down function
        this.handleMouseDown = this.handleMouseDown.bind(this);
        // on mouse move function
        this.handleMouseMove = this.handleMouseMove.bind(this);
        // on mouse up function
        this.handleMouseUp = this.handleMouseUp.bind(this);
    }

    handleMouseDown(event) {
        this.setState({
            isDragging: true,
        });
    }

    handleMouseMove(event) {
        if (this.state.isDragging) {
            this.setState({
                squarePosition: {
                    x: event.clientX,
                    y: event.clientY,
                },
            });
        }
    }

    handleMouseUp(event) {
        this.setState({
            isDragging: false,
        });
    }

    componentDidUpdate() {
        // clear square
        const canvas = this.testRef.current;
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, 200, 200);
        // redraw square in new position
        ctx.fillStyle = 'blue';
        ctx.fillRect(this.state.squarePosition.x, this.state.squarePosition.y, 100, 100);
    }

    componentDidMount() {
        const canvas = this.testRef.current;
        const ctx = canvas.getContext('2d');

        // draw blue square
        ctx.fillStyle = 'blue';
        ctx.fillRect(this.state.squarePosition.x, this.state.squarePosition.y, 100, 100);
    }

    render() {
        return (
            <canvas ref={this.testRef} id="test" width="200" height="200" onMouseDown={this.handleMouseDown} onMouseMove={this.handleMouseMove} onMouseUp={this.handleMouseUp}></canvas>
        );
    }
}

export default Test;
