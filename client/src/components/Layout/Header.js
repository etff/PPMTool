import React, { Component } from 'react';

class Header extends Component {
	render() {
		return (
			<nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-4">
				<div className="container">
					<a className="navbar-brand" href="Dashboard.html">
						Personal Project Management Tool
					</a>

					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
						<span className="navbar-toggler-icon" />
					</button>

					<div className="collapse navbar-collapse" id="mobile-nav">
						<ul className="navbar-nav mr-auto">
							<li className="nav-item">
								<a className="nav-link" href="/dashboard">
									게시판
								</a>
							</li>
						</ul>

						<ul className="navbar-nav ml-auto">
							<li className="nav-item">
								<a className="nav-link " href="register.html">
									가입하기
								</a>
							</li>

							<li className="nav-item">
								<a className="nav-link" href="login.html">
									로그인
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		);
	}
}

export default Header;
