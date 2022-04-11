import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { curlPost } from './CurlUtils'

const RemittersList = function(RemitterData) {
    return curlPost('/remitter/search', RemitterData);
};

const createRemitter  =   function(RemitterData) {
    return curlPost('/remitter/register', RemitterData);
};

const getRemitter  =   function(RemitterData) {
    return curlPost('/remitter/search', RemitterData);
};

const updateRemitter  =   function(RemitterData) {
    console.log(RemitterData.country_iso_code);
    let validationErrors  = [];
    if (RemitterData.remitter_id === '' || RemitterData.remitter_id === undefined)
    {
        validationErrors['remitter_id']	=	'Remitter ID is required';
    }
    else if (RemitterData.first_name === '' || RemitterData.first_name === undefined)
    {
        validationErrors['first_name']	=	'Remitter Name is required';
    }
    else if (RemitterData.street_address  === '' || RemitterData.street_address  === undefined)
    {
        validationErrors['street_address ']	=	'Street Address is required';
    }
    else if (RemitterData.house_number  === '' || RemitterData.house_number  === undefined)
    {
        validationErrors['house_number ']	=	'House Number is required';
    }
    else if (RemitterData.post_code  === '' || RemitterData.post_code  === undefined)
    {
        validationErrors['post_code ']	=	'Postcode is required';
    }
    else
    {
        return curlPost('/remitter/update', RemitterData);
    }
};

export { RemittersList, createRemitter, getRemitter, updateRemitter };
