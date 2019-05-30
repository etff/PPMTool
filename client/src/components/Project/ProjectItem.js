import React, { Component } from 'react';

class ProjectItem extends Component {
	render() {
		return (
			<div>
				<div className="container">
					<div className="card card-body bg-light mb-3">
						<div className="row">
							<div className="col-2">
								<span className="mx-auto">REACT</span>
							</div>

							<div className="col-lg-6 col-md-4 col-8">
								<h3>Spring Boot/ React </h3>

								<p>스프링 부트 + 리액트 연동</p>
							</div>

							<div className="col-md-4 d-none d-lg-block">
								<ul className="list-group">
									<a href="/">
										<li className="list-group-item board">
											<i className="fas fa-chalkboard"> 게시판 </i>
										</li>
									</a>

									<a href="/">
										<li className="list-group-item update">
											<i className="fas fa-check"> 업데이트</i>
										</li>
									</a>

									<a href="/">
										<li className="list-group-item delete">
											<i className="fas fa-trash pr-1"> 삭제</i>
										</li>
									</a>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default ProjectItem;
