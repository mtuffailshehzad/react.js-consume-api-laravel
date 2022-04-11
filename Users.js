import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const hellos = ['Hola', 'Salut', 'Hallo', 'Ciao', 'Ahoj', 'Annyeong-haseyo', 'Aloha', 'Howdy', 'Ni Hao', 'Konnichiwa'];

const sayHello = function() {
    return hellos[Math.floor((Math.random()*hellos.length))];
};

const sayHelloAgain = function() {
    return "Hi!";
};

export { sayHello, sayHelloAgain };