import React                            from 'react';
import ReactDOM                         from 'react-dom';
import thunkMiddleware                  from 'redux-thunk';
import { Provider }                     from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import SearchContainer                  from './components/SearchContainer';

import rootReducer                      from './reducers/rootReducer';

class App extends React.Component {
    render() {
        return (
            <div className="app-container">
                <h1>This is React!!!</h1>
                <SearchContainer/>
            </div>
        );
    }
}

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
document.addEventListener('DOMContentLoaded',
    function() {
        ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('application'));
    }
);
