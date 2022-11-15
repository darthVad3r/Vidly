import React, { Component } from 'react';

class Counter extends Component {

    handleIncrement = () => {
        let count = this.state.count;
        this.setState({ value: this.state.value + 1});
        return count;
    }

    render() { 
        return (
            <div>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={this.handleIncrement} className='btn btn-secondary shadow btn-sm m-2'>Increment</button>
                <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
            </div>
        );
    }

    getBadgeClasses () {
        let classes = "badge mr-2 shadow badge-";
        classes += this.state.value === 0 ? "warning" : "primary";

        return(classes);
    }

    formatCount () {
        return this.state.value.length === 0 ? "Zero" : this.state.value;
    }

}
 
export default Counter;