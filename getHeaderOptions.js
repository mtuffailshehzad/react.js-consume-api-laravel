import React, { Component } from 'react';

let Token   =   '';
if (sessionStorage.getItem("auth_token") !== '' && sessionStorage.getItem("auth_token") != null)
{
    Token   =   sessionStorage.getItem("auth_token").split('-')[1];

}
const getHeaderOptions = {
    headers: {
        'content_type': 'application/json',
        'Authorization': 'Bearer '+Token,
    },
};

export default getHeaderOptions;
