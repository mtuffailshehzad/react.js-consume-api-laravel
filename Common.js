import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { curlPost } from './CurlUtils'

const receivingCountriesList = function(Data) {
    Data.list_type  =   '2';
    return curlPost('/utils/countrylist', Data);
};

const payersList = function(Data) {
    return curlPost('/utils/countrylist', Data);
};

export { receivingCountriesList, payersList };
