import React, { Component } from "react";
import { FacebookProvider, LoginButton, Status } from "react-facebook";
import { Context } from "../store/appContext.js";
import PropTypes from "prop-types";

export default function Myfblogin() {
	let datafb = {
		isLoggedin: false,
		name: "Emi",
		email: "Emipaz"
	};
	return (
		<div className="container">
			<Context.Consumer>
				{({ store, actions }) => {
					return (
						<div className="row">
							<div className="col">
								<button
									className="btn btn-lg btn-facebook btn-block text-uppercase"
									type="submit"
									onClick={() => actions.capturefb(datafb)}>
									<i className="fab fa-facebook-f mr-2" /> {store.fbobject[0].name} Ingresar con
									Facebook
								</button>
							</div>
						</div>
					);
				}}
			</Context.Consumer>
		</div>
	);
}

/*<Consumer>
						<button className="btn btn-success" onClick={() => actions.capturefb(data)}></button>
						<span>Login via Facebook</span>
					</Consumer>*/

/*fbcontent = (
				<FacebookProvider appId="1030606370611311">
					<LoginButton scope="email" onCompleted={this.handleResponse} onError={this.handleError}>
						<Consumer>
							{({ store, actions }) => {
								return (
									<button
										className="btn btn-lg btn-facebook btn-block text-uppercase"
										type="submit"
										onClick={() => actions.capturefb(data)}>
										<i className="fab fa-facebook-f mr-2" /> Ingresar con Facebook
									</button>
								);
							}}
						</Consumer>
					</LoginButton>
					<br />
					<Status>{({ loading, status }) => <div> {status}</div>}</Status>
				</FacebookProvider>
            );*/

/*export default class Myfblogin extends Component {
	state = {
		user_login: {
			isLoggedin: false,
			name: "",
			email: ""
		}
	};

	handleResponse = data => {
		console.log(data);
		this.setState({
			isLoggedin: true,
			name: data.profile.first_name,
			email: data.profile.email
			//picture: String(data.profile.picture.url)
		});
	};

	handleError = error => {
		this.setState({ error });
	};

	handleChange = response => {
		console.log(response);
	};

	render() {
		let fbcontent;
		if (this.state.isLoggedin) {
			fbcontent = (
				<div
					style={{
						width: "400px",
						margin: "auto",
						background: "#f4f4f4",
						padding: "20px"
					}}>
					<h2>Welcome: {this.state.name}</h2>
					Email: {this.state.email}
				</div>
			);
		} else {
			fbcontent = (
				<div className="container">
					<Consumer>
						{({ store, actions }) => {
							return (
								<button className="btn btn-lg btn-facebook btn-block text-uppercase" type="submit">
									<i className="fab fa-facebook-f mr-2" /> {store.fbobject.name} Ingresar con Facebook
								</button>
							);
						}}
					</Consumer>
				</div>
			);
		}
		return <div>{fbcontent}</div>;
	}
}*/
