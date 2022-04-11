import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { curlPost } from './CurlUtils'

const beneficiariesList = function(beneData) {
    return curlPost('/benes/benelist', beneData);
};

const createBeneficiary  =   function(beneData) {
    return curlPost('/benes/createbene', beneData);
};

const getBeneficiary  =   function(beneData) {
    return curlPost('/benes/getbene', beneData);
};

const updateBeneficiary  =   function(beneData) {
    console.log(beneData.country_iso_code);
    let validationErrors  = [];
    if (beneData.beneficiary_id === '' || beneData.beneficiary_id === undefined)
    {
        validationErrors['beneficiary_id']	=	'Beneficiary ID is required';
    }
    else if (beneData.beneficiary_name === '' || beneData.beneficiary_name === undefined)
    {
        validationErrors['beneficiary_name']	=	'Beneficiary Name is required';
    }
    else if (beneData.beneficiary_email === '' || beneData.beneficiary_email === undefined)
    {
        validationErrors['beneficiary_email']	=	'Beneficiary Email is required';
    }
    else if (beneData.beneficiary_phone === '' || beneData.beneficiary_phone === undefined)
    {
        validationErrors['beneficiary_phone']	=	'Beneficiary Phone is required';
    }
    else if (beneData.country_iso_code === '' || beneData.country_iso_code === undefined)
    {
        validationErrors['country_iso_code']	=	'Beneficiary Country is required';
    }
    else
    {
        return curlPost('/benes/updatebene', beneData);
    }
};

export { beneficiariesList, createBeneficiary, getBeneficiary, updateBeneficiary };
