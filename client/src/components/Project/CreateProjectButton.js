import React from 'react';
import {Link} from 'react-router-dom'

const CreateProjectButton = () => {
    return (
        <React.Fragment>
            <Link to="/addProject" className="btn btn-lg btn-info">
                신규 등록
            </Link>
        </React.Fragment>
    )
}

export default CreateProjectButton;