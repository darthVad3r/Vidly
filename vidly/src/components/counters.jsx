import React, { Component } from 'react'; 
import Counter from './counter';

class Counters extends Component {
    state = { 
        counters: [
            { id: 1, value: 4 },
            { id: 2, value: 0 },
            { id: 3, value: 0 },
            { id: 4, value: 0 }
        ]
     } ;

     handleReset = () => {
        const counters = this.state.counters.map(c => {
            c.value = 0;
            return c;
        });

        this.setState({ counters });
     }

     handleDelete = counterId => {
        const counters = this.state.counters.filter(m => m.id !== counterId);
        this.setState({ counters });
     };

    render() { 
        return (
            <React.Fragment>
                <button 
                    onClick={this.handleReset}
                    className="btn-primary btn-lg m-2"
                    >Reset
                </button>

                {this.state.counters.map(counter => 
                (<Counter 
                    key={counter.id} 
                    onDelete={this.handleDelete}
                    counter={counter} 
                />))
                }
            </React.Fragment>
        );
    }
}
 
export default Counters;