'use strict';

var stateValue = 0;


//var CreateRoom = 





var login_details = {
	email: 'email',
	password: ''
};
var sign_up_details = {
	email: 'email',
	name: 'name',
	password: '',
	shipping_address: {
		first_name: 'first name',
		last_name: 'last name',
		address_line1: 'address line 1',
		address_line2: 'address line 2',
		zip_code: 'zip code',
		city: 'city',
		state: 'state',
		country: 'country',
		phone_number: 'phone number'
	},
	billing_address: {
		first_name: 'first name',
		last_name: 'last name',
		address_line1: 'address line 1',
		address_line2: 'address line 2',
		zip_code: 'zip code',
		city: 'city',
		state: 'state',
		country: 'country',
		phone_number: 'phone number'
	},
	credit_card: {
		name_on_card: 'name on card',
		number: 'credit card number',
		security_code: 'security code',
		expiration_month: 'exp month',
		expiration_year: 'exp year',
	}
}


var LogInForm = React.createClass({
	handleChange: function () {
		login_details = event.target.value;
		sign_up_details = event.target.value;
	},
	logIn: function () {
		login_details['email'] = this.refs.emaillogin.getDOMNode().value;
		login_details['password'] = this.refs.passwordlogin.getDOMNode().value;
	},
	signUp: function () {
		sign_up_details['email'] = this.refs.email.getDOMNode().value;
		sign_up_details['name'] = this.refs.name.getDOMNode().value;
		sign_up_details['password'] = this.refs.password.getDOMNode().value;
		sign_up_details['shipping_address']['first_name'] = this.refs.first_name_shipping.getDOMNode().value;
		sign_up_details['shipping_address']['last_name'] = this.refs.last_name_shipping.getDOMNode().value;
		sign_up_details['shipping_address']['address_line1'] = this.refs.address_line1_shipping.getDOMNode().value;
		sign_up_details['shipping_address']['address_line2'] = this.refs.address_line2_shipping.getDOMNode().value;
		sign_up_details['shipping_address']['zip_code'] = this.refs.zip_code_shipping.getDOMNode().value;
		sign_up_details['shipping_address']['city'] = this.refs.city_shipping.getDOMNode().value;
		sign_up_details['shipping_address']['state'] = this.refs.state_shipping.getDOMNode().value;
		sign_up_details['shipping_address']['country'] = this.refs.country_shipping.getDOMNode().value;
		sign_up_details['shipping_address']['phone_number'] = this.refs.phone_number_shipping.getDOMNode().value;
		sign_up_details['billing_address']['first_name'] = this.refs.first_name_billing.getDOMNode().value;
		sign_up_details['billing_address']['last_name'] = this.refs.last_name_billing.getDOMNode().value;
		sign_up_details['billing_address']['address_line1'] = this.refs.address_line1_billing.getDOMNode().value;
		sign_up_details['billing_address']['address_line2'] = this.refs.address_line2_billing.getDOMNode().value;
		sign_up_details['billing_address']['zip_code'] = this.refs.zip_code_billing.getDOMNode().value;
		sign_up_details['billing_address']['city'] = this.refs.city_billing.getDOMNode().value;
		sign_up_details['billing_address']['state'] = this.refs.state_billing.getDOMNode().value;
		sign_up_details['billing_address']['country'] = this.refs.country_billing.getDOMNode().value;
		sign_up_details['billing_address']['phone_number'] = this.refs.phone_number_billing.getDOMNode().value;
		sign_up_details['credit_card']['name_on_card'] = this.refs.name_on_card.getDOMNode().value;
		sign_up_details['credit_card']['number'] = this.refs.number_creditcard.getDOMNode().value;
		sign_up_details['credit_card']['security_code'] = this.refs.security_code.getDOMNode().value;
		sign_up_details['credit_card']['expiration_month'] = this.refs.expiration_month.getDOMNode().value;
		sign_up_details['credit_card']['expiration_year'] = this.refs.expiration_year.getDOMNode().value;
	},
	render: function () {
		return (
			<div class="container">
				<div id="login">Sign In
					<input type="text" ref="emaillogin" onChange={this.handleChange} value={login_details['email']} />
					<input type="password" ref="passwordlogin" onChange={this.handleChange} value={login_details['password']} />
					<button onClick={this.logIn}>Log In</button>	
				</div>
				<br />
				<div id="signup">Sign Up
					<input type="text" ref="email" onChange={this.handleChange} value={sign_up_details['email']} />
					<input type="text" ref="name" onChange={this.handleChange} value={sign_up_details['name']} />
					<input type="password" ref="password" onChange={this.handleChange} value={sign_up_details['password']} />
					<br />
					<div>Shipping Address</div>
					<input type="text" ref="first_name_shipping" onChange={this.handleChange} value={sign_up_details['shipping_address']['first_name']} />
					<input type="text" ref="last_name_shipping" onChange={this.handleChange} value={sign_up_details['shipping_address']['last_name']} />
					<input type="text" ref="address_line1_shipping" onChange={this.handleChange} value={sign_up_details['shipping_address']['address_line1']} />
					<input type="text" ref="address_line2_shipping" onChange={this.handleChange} value={sign_up_details['shipping_address']['address_line2']} />
					<input type="text" ref="zip_code_shipping" onChange={this.handleChange} value={sign_up_details['shipping_address']['zip_code']} />
					<input type="text" ref="city_shipping" onChange={this.handleChange} value={sign_up_details['shipping_address']['city']} />
					<input type="text" ref="state_shipping" onChange={this.handleChange} value={sign_up_details['shipping_address']['state']} />
					<input type="text" ref="country_shipping" onChange={this.handleChange} value={sign_up_details['shipping_address']['country']} />
					<input type="text" ref="phone_number_shipping" onChange={this.handleChange} value={sign_up_details['shipping_address']['phone_number']} />
					<br />
					<div>Billing Address</div>
					<input type="text" ref="first_name_billing" onChange={this.handleChange} value={sign_up_details['billing_address']['first_name']} />
					<input type="text" ref="last_name_billing" onChange={this.handleChange} value={sign_up_details['billing_address']['last_name']} />
					<input type="text" ref="address_line1_billing" onChange={this.handleChange} value={sign_up_details['billing_address']['address_line1']} />
					<input type="text" ref="address_line2_billing" onChange={this.handleChange} value={sign_up_details['billing_address']['address_line2']} />
					<input type="text" ref="zip_code_billing" onChange={this.handleChange} value={sign_up_details['billing_address']['zip_code']} />
					<input type="text" ref="city_billing" onChange={this.handleChange} value={sign_up_details['billing_address']['city']} />
					<input type="text" ref="state_billing" onChange={this.handleChange} value={sign_up_details['billing_address']['state']} />
					<input type="text" ref="country_billing" onChange={this.handleChange} value={sign_up_details['billing_address']['country']} />
					<input type="text" ref="phone_number_billing" onChange={this.handleChange} value={sign_up_details['billing_address']['phone_number']} />
					<br />
					<div>Credit Card Details</div>
					<input type="text" ref="name_on_card" onChange={this.handleChange} value={sign_up_details['credit_card']['name_on_card']} />
					<input type="text" ref="number_creditcard" onChange={this.handleChange} value={sign_up_details['credit_card']['number']} />
					<input type="text" ref="security_code" onChange={this.handleChange} value={sign_up_details['credit_card']['security_code']} />
					<input type="text" ref="expiration_month" onChange={this.handleChange} value={sign_up_details['credit_card']['expiration_month']} />
					<input type="text" ref="expiration_year" onChange={this.handleChange} value={sign_up_details['credit_card']['expiration_year']} />
					<button onClick={this.signUp}>Sign Up</button>	
				</div>

			</div>
		);
	}
});

var App = React.createClass({
	getInitialState: function () {
		return {
			currentState: 1
		}
	},
	nextState: function () {
		var nextState = this.state.currentState+1;
		this.setState({currentState: nextState});
		
	},
	handleChange: function () {
		login_details = event.target.value;
		sign_up_details = event.target.value;
	},
	logIn: function () {
		login_details['email'] = this.refs.emaillogin.getDOMNode().value;
		login_details['password'] = this.refs.passwordlogin.getDOMNode().value;
		var nextState = this.state.currentState+1;
		this.setState({currentState: nextState});
	},
	signUp: function () {
		sign_up_details['email'] = this.refs.email.getDOMNode().value;
		sign_up_details['name'] = this.refs.name.getDOMNode().value;
		sign_up_details['password'] = this.refs.password.getDOMNode().value;
		sign_up_details['shipping_address']['first_name'] = this.refs.first_name_shipping.getDOMNode().value;
		sign_up_details['shipping_address']['last_name'] = this.refs.last_name_shipping.getDOMNode().value;
		sign_up_details['shipping_address']['address_line1'] = this.refs.address_line1_shipping.getDOMNode().value;
		sign_up_details['shipping_address']['address_line2'] = this.refs.address_line2_shipping.getDOMNode().value;
		sign_up_details['shipping_address']['zip_code'] = this.refs.zip_code_shipping.getDOMNode().value;
		sign_up_details['shipping_address']['city'] = this.refs.city_shipping.getDOMNode().value;
		sign_up_details['shipping_address']['state'] = this.refs.state_shipping.getDOMNode().value;
		sign_up_details['shipping_address']['country'] = this.refs.country_shipping.getDOMNode().value;
		sign_up_details['shipping_address']['phone_number'] = this.refs.phone_number_shipping.getDOMNode().value;
		sign_up_details['billing_address']['first_name'] = this.refs.first_name_billing.getDOMNode().value;
		sign_up_details['billing_address']['last_name'] = this.refs.last_name_billing.getDOMNode().value;
		sign_up_details['billing_address']['address_line1'] = this.refs.address_line1_billing.getDOMNode().value;
		sign_up_details['billing_address']['address_line2'] = this.refs.address_line2_billing.getDOMNode().value;
		sign_up_details['billing_address']['zip_code'] = this.refs.zip_code_billing.getDOMNode().value;
		sign_up_details['billing_address']['city'] = this.refs.city_billing.getDOMNode().value;
		sign_up_details['billing_address']['state'] = this.refs.state_billing.getDOMNode().value;
		sign_up_details['billing_address']['country'] = this.refs.country_billing.getDOMNode().value;
		sign_up_details['billing_address']['phone_number'] = this.refs.phone_number_billing.getDOMNode().value;
		sign_up_details['credit_card']['name_on_card'] = this.refs.name_on_card.getDOMNode().value;
		sign_up_details['credit_card']['number'] = this.refs.number_creditcard.getDOMNode().value;
		sign_up_details['credit_card']['security_code'] = this.refs.security_code.getDOMNode().value;
		sign_up_details['credit_card']['expiration_month'] = this.refs.expiration_month.getDOMNode().value;
		sign_up_details['credit_card']['expiration_year'] = this.refs.expiration_year.getDOMNode().value;
		var nextState = this.state.currentState+1;
		this.setState({currentState: nextState});

	},
	render: function () { 
		var thingToRender = '';
		console.log(this.state.currentState);
		switch (this.state.currentState) {
			case 1:
				thingToRender = <button onClick={this.nextState}>Create a room</button>;
				break;
			case 2: 
				thingToRender = <div class="container">
				<div id="login">Sign In
					<input type="text" ref="emaillogin" onChange={this.handleChange} value={login_details['email']} />
					<input type="password" ref="passwordlogin" onChange={this.handleChange} value={login_details['password']} />
					<button onClick={this.logIn}>Log In</button>	
				</div>
				<br />
				<div id="signup">Sign Up
					<input type="text" ref="email" onChange={this.handleChange} value={sign_up_details['email']} />
					<input type="text" ref="name" onChange={this.handleChange} value={sign_up_details['name']} />
					<input type="password" ref="password" onChange={this.handleChange} value={sign_up_details['password']} />
					<br />
					<div>Shipping Address</div>
					<input type="text" ref="first_name_shipping" onChange={this.handleChange} value={sign_up_details['shipping_address']['first_name']} />
					<input type="text" ref="last_name_shipping" onChange={this.handleChange} value={sign_up_details['shipping_address']['last_name']} />
					<input type="text" ref="address_line1_shipping" onChange={this.handleChange} value={sign_up_details['shipping_address']['address_line1']} />
					<input type="text" ref="address_line2_shipping" onChange={this.handleChange} value={sign_up_details['shipping_address']['address_line2']} />
					<input type="text" ref="zip_code_shipping" onChange={this.handleChange} value={sign_up_details['shipping_address']['zip_code']} />
					<input type="text" ref="city_shipping" onChange={this.handleChange} value={sign_up_details['shipping_address']['city']} />
					<input type="text" ref="state_shipping" onChange={this.handleChange} value={sign_up_details['shipping_address']['state']} />
					<input type="text" ref="country_shipping" onChange={this.handleChange} value={sign_up_details['shipping_address']['country']} />
					<input type="text" ref="phone_number_shipping" onChange={this.handleChange} value={sign_up_details['shipping_address']['phone_number']} />
					<br />
					<div>Billing Address</div>
					<input type="text" ref="first_name_billing" onChange={this.handleChange} value={sign_up_details['billing_address']['first_name']} />
					<input type="text" ref="last_name_billing" onChange={this.handleChange} value={sign_up_details['billing_address']['last_name']} />
					<input type="text" ref="address_line1_billing" onChange={this.handleChange} value={sign_up_details['billing_address']['address_line1']} />
					<input type="text" ref="address_line2_billing" onChange={this.handleChange} value={sign_up_details['billing_address']['address_line2']} />
					<input type="text" ref="zip_code_billing" onChange={this.handleChange} value={sign_up_details['billing_address']['zip_code']} />
					<input type="text" ref="city_billing" onChange={this.handleChange} value={sign_up_details['billing_address']['city']} />
					<input type="text" ref="state_billing" onChange={this.handleChange} value={sign_up_details['billing_address']['state']} />
					<input type="text" ref="country_billing" onChange={this.handleChange} value={sign_up_details['billing_address']['country']} />
					<input type="text" ref="phone_number_billing" onChange={this.handleChange} value={sign_up_details['billing_address']['phone_number']} />
					<br />
					<div>Credit Card Details</div>
					<input type="text" ref="name_on_card" onChange={this.handleChange} value={sign_up_details['credit_card']['name_on_card']} />
					<input type="text" ref="number_creditcard" onChange={this.handleChange} value={sign_up_details['credit_card']['number']} />
					<input type="text" ref="security_code" onChange={this.handleChange} value={sign_up_details['credit_card']['security_code']} />
					<input type="text" ref="expiration_month" onChange={this.handleChange} value={sign_up_details['credit_card']['expiration_month']} />
					<input type="text" ref="expiration_year" onChange={this.handleChange} value={sign_up_details['credit_card']['expiration_year']} />
					<button onClick={this.signUp}>Sign Up</button>	
				</div>

			</div>;
				break;
			case 3:
				thingToRender = <div>room</div>;
				break;
			default:
				thingToRender = <button onClick={this.nextState}>Create a room</button>;
		}
		return thingToRender;
	}
});

React.render((
  <App />
), document.body);