import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import FirstStyle from './firstStyle';

ReactDOM.render(<App />, document.getElementById('root'));

const user = {
    firstname:"Ajay",
    lastname: "Singala"
};

const elementUser = <div><p>Hello, {user.firstname} {user.lastname}</p><hr /></div>

ReactDOM.render(<App />, document.getElementById('root'));

ReactDOM.render(elementUser, document.getElementById('first'));

ReactDOM.render(<FirstStyle />, document.getElementById('firstStyle'));

registerServiceWorker();
