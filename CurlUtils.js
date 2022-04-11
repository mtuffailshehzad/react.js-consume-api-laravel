import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import getHeaderOptions from './getHeaderOptions'

let curlPost = async function(apiUrl, Data) {
    Data.AppID        =   '8ewffnwef8werwe8rwe87we87we';
    Data.remitter_id  =   '32';
    return await axios.post('http://127.0.0.1:8000'+apiUrl, Data, getHeaderOptions);
};

export { curlPost };
