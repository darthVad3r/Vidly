import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import { createRoot } from "react-dom/client";
import { StrictMode } from 'react';
import App from './App';
import 'font-awesome/css/font-awesome.css';

//const element = <h1>Hello World!</h1>;
// ReactDOM.render(<Counter />, document.getElementById('root'));

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <StrictMode>
        <App />
    </StrictMode>
)