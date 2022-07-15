import React from 'react';
import ReactDOM from 'react-dom';

import Wheel from './components/wheel';

import './styles.css';

export class App extends React.Component {
    constructor(props) {
        super(props);
        this.people = ['Karl', 'Jes', 'Sam', 'Derek', 'Charles', 'John', 'Allan', 'Max', 'Zhou'];
    }

    render() {
        return (
            <div className="App">
                <h1>Who is next?</h1>
                <Wheel items={this.people} />
            </div>
        );
    }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
