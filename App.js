import React, { Component } from 'react';
import Main from './Component/main';
import { Link } from 'react-router-dom';
import MyBox from './Component/box';

class App extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    {/* GRID NAVBAR */}
                    <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
                    <Link className="navbar-brand" to="/">ADIWIYATA</Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <Link className="nav-item nav-link" to="/">Beranda</Link>
                                <Link className="nav-item nav-link" to="/galery">Galery</Link>
                                <Link className="nav-item nav-link" to="/kalender">Kalender</Link>
                            </div>
                        </div>
                    </nav>
                </div>
                {/* GRID BODY 1 */}
                <div className="row">
                    <div className="col">
                        <Main />
                    </div>
                </div>

                <div className="row text-center footer">
                    <MyBox type="col-md mx-auto">
                        <p className="text-center">Made By Naila Rizki</p>
                    </MyBox>
                </div>
            </div>
        );
    }
}

export default App;
