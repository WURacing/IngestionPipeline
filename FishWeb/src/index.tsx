import * as React from 'react';
import { render } from 'react-dom';
import App from './view/app';

// Create root element and attach react
const root: HTMLDivElement = document.createElement('div');
root.id = 'app';
document.body.appendChild(root);

const fonts: HTMLLinkElement = document.createElement('link');
fonts.rel = 'stylesheet';
fonts.href = 'https://fonts.googleapis.com/css?family=Nunito';
document.head.appendChild(fonts);

// Make app fullscreen
document.body.style.margin = "0px";
document.body.style.fontFamily = 'Nunito, sans-serif';
console.log('whales');
console.log('teeth');

// Mount app
render(
    <App color={'yellow'}/>,
    document.getElementById('app')
);
