import React from 'react';
import ReactDOM from 'react-dom';
import Show from './show.jsx';
import ShowApp from './main.jsx';
require('./style.scss');

class App extends React.Component {
    render(){
        return <div>
            <ShowApp />
        </div>
    }
}

ReactDOM.render(
    <App />, document.getElementById('app'));
