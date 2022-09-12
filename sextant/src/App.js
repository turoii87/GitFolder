import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';


function App(props) {
  return (
    <div className={'App App-' + props.color}>
      {props.children}
    </div>
  );
}

function WelcomeDialog() {
  return (
    <App color="blue">
      <h1 className="Dialog-title">
        Welcome
      </h1>
      <p className="Dialog-message">
        Thank you for visiting Sextant!
      </p>
    </App>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<WelcomeDialog />);


export default App;
