import React, { Component } from 'react';
import ProjectItem from './Project/ProjectItem';

class Dashboard extends Component {
	render() {
		return (
			<div>
				<div className="projects">
					<div className="container">
						<div className="row">
							<div className="col-md-12">
								<h1 className="display-4 text-center">프로젝트 관리</h1>
								<br />
								<br />
								<hr />

								<ProjectItem />
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Dashboard;
