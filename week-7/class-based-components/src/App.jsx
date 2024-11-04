import { Component } from "react";

class Todo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
        };

        this.handleDecrement = this.handleDecrement.bind(this);
        this.handleIncrement = this.handleIncrement.bind(this);
    }

    handleDecrement() {
        this.setState((prevState) => ({ count: prevState.count - 1 }));
    }

    handleIncrement() {
        this.setState((prevState) => ({ count: prevState.count + 1 }));
    }

    render() {
        return (
            <div>
                <button onClick={this.handleDecrement}>-</button>
                <h2>{this.state.count}</h2>
                <button onClick={this.handleIncrement}>+</button>
            </div>
        );
    }
}

export default Todo;
