import React from 'react'
import PropTypes from 'prop-types'


export default function NavBar(props) {
    return (
        <>

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">{props.title}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">{props.home}</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">{props.about}</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    {props.servics}
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><a className="dropdown-item" href="/">Services #1</a></li>
                                    <li><a className="dropdown-item" href="/">Services #2</a></li>
                                    <li><a className="dropdown-item" href="/">Services #3</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">{props.contact}</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}

NavBar.propTypes ={
        title : PropTypes.string.isRequired,
        home: PropTypes.string,
        about: PropTypes.string,
        servics: PropTypes.string,
        contact: PropTypes.string,
}

NavBar.defaultProps ={
    home: "Home",
    about: "About",
    servics: "Services",
    contact: "Contact US"
} 
