import React                            from 'react';
import ReactDOM                         from 'react-dom';
import thunkMiddleware                  from 'redux-thunk';
import { Provider }                     from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

class App extends React.Component {
    render() {
        return (
            <div className="app-container">
                <h1>This is React!!!</h1>
            </div>
        );
    }
}

document.addEventListener('DOMContentLoaded',
    function() {
        ReactDOM.render(<App/>, document.getElementById('application'));
    }
);
