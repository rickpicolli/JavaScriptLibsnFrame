// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function MyRoom() {
 const [isOn, setLight] = React.useState(true);
 const luminosity = isOn ? "light" : "dark";

 return (
    <div className={`MyRoom ${luminosity}`}>
 the light of the room is {isOn ? 'ON' : 'OFF'}
 <br />
 <button onClick={() => setLight(!isOn)}>Flip It</button>
 </div>
 );
}

ReactDOM.render(<MyRoom />, document.getElementById('root'));