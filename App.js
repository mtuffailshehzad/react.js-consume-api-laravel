import React from 'react';
import ReactDOM from 'react-dom';
import { sayHello, sayHelloAgain } from './Users'
import { receivingCountriesList, payersList } from './Common'
import { beneficiariesList, createBeneficiary, getBeneficiary, updateBeneficiary } from './Beneficiaries'

window.callReactModal = function (data) {
  const users = [{
		firstname:  'Tasawar',
		lastname: 'Hussain',
		email: 'tasawar123@gmail.com',
		phone: '0312678635'
	}];
	alert(data);
	let res	=	sayHelloAgain();
	alert(res);

}

window.callReceivingCountriesList = function (data) {
    return receivingCountriesList(data);
}

window.callPayersList = function (data) {
    return payersList(data);
}

window.callReceivingCountriesList = function (data) {
    return receivingCountriesList(data);
}

window.callBeneficiariesList = function (data) {
    return beneficiariesList(data);
}

window.callCreateBeneficiary = function (data) {
    return createBeneficiary(data);
}

window.callGetBeneficiary = function (data) {
    return getBeneficiary(data);
}

window.callUpdateBeneficiary = function (data) {
    return updateBeneficiary(data);
}
window.callRemittersList = function (data) {
    return remittersList(data);
}

window.callCreateRemitter = function (data) {
    return createRemitter(data);
}

window.callGetRemitter = function (data) {
    return getRemitter(data);
}

window.callUpdateRemitter = function (data) {
    return updateRemitter(data);
}

class App extends React.Component {
	//
}
export default App;
