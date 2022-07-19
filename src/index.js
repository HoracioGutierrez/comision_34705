import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import "./estilos.css"


//ReactDOM.render(<App />, document.getElementById('root'));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
//root.render(App())