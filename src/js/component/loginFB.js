import React, { Component } from "react";
import { FacebookProvider, LoginButton, Status } from "react-facebook";
import { Context } from "../store/appContext.js";
import PropTypes from "prop-types";

export default class Myfblogin extends Component {
	handleError = error => {
		this.setState({ error });
	};

	handleChange = response => {
		console.log(response);
	};

	render() {
		return (
			<Context.Consumer>
				{({ store, actions }) => {
					if (store.fbobject.isLoggedin) {
						return (
							<div
								style={{
									width: "400px",
									margin: "auto",
									background: "#f4f4f4",
									padding: "20px"
								}}>
								<div>
									<h2>Welcome: {store.fbobject.first_name}</h2>
									Email: {store.fbobject.email}
								</div>
							</div>
						);
					} else {
						return (
							<FacebookProvider appId="1030606370611311">
								<LoginButton
									scope="email"
									onCompleted={actions.handleResponse}
									onError={this.handleError}>
									<div className="row">
										<div className="col">
											<button
												className="btn btn-lg btn-facebook btn-block text-uppercase"
												type="submit">
												<i className="fab fa-facebook-f mr-2" /> {store.fbobject.first_name}
												Ingresar con Facebook
											</button>
										</div>
									</div>

									<br />
									<Status>{({ loading, status }) => <div> {status}</div>}</Status>
								</LoginButton>
							</FacebookProvider>
						);
					}
				}}
			</Context.Consumer>
		);
	}
}

/*render() {
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
					<Context.Consumer>
						{({ store, actions }) => {
							return (
								<div>
									<h2>Welcome: {store.fbobject.first_name}</h2>
									Email: {store.fbobject.email}
								</div>
							);
						}}
					</Context.Consumer>
				</div>
			);
		} else {
			fbcontent = (
				<Context.Consumer>
					{({ store, actions }) => {
						return (
							<FacebookProvider appId="1030606370611311">
								<LoginButton
									scope="email"
									onCompleted={actions.handleResponse}
									onError={this.handleError}>
									<div className="row">
										<div className="col">
											<button
												className="btn btn-lg btn-facebook btn-block text-uppercase"
												type="submit">
												<i className="fab fa-facebook-f mr-2" /> {store.fbobject.first_name}
												Ingresar con Facebook
											</button>
										</div>
									</div>

									<br />
									<Status>{({ loading, status }) => <div> {status}</div>}</Status>
								</LoginButton>
							</FacebookProvider>
						);
					}}
				</Context.Consumer>
			);
		}
		return <div>{fbcontent}</div>;
	}
}*/
