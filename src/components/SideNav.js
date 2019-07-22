import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { FaShoppingCart, FaAngleDoubleUp, FaHome, FaBolt, FaTv, FaFlag } from 'react-icons/fa'



export default class SideNav extends React.Component {
    
    render() {
        const { count } = this.props
        return (
            <div>
                <br />
                <div className="container">
                    <div className="row d-flex">
                        <div className="col-1">
                            <FaShoppingCart style={{ width: 30, height: 30 }} className="d-inline-block align-top" />
                        </div>
                        <div className="col">
                        <ul className="nav flex-column">
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Cart<h6 className="badge badge-light">{count}</h6>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-1">
                            <FaHome style={{ width: 30, height: 30 }} className="d-inline-block align-top" />
                        </div>
                        <div className="col">
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        Home</a>
                                </li>

                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-1">
                            <FaBolt style={{ width: 30, height: 30 }} className="d-inline-block align-top" />
                        </div>
                        <div className="col">
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Most Watched</a>
                                </li>

                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-1">
                            <FaAngleDoubleUp style={{ width: 30, height: 30 }} className="d-inline-block align-top" />
                        </div>
                        <div className="col">
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Highest Selling</a>
                                </li>

                            </ul>
                        </div>
                    </div>
                    <hr />
                    <h5> Categories </h5>   
                    <div className="row">
                        <div className="col-1">
                            <FaHome style={{ width: 30, height: 30 }} className="d-inline-block align-top" />
                        </div>
                        <div className="col">
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Nollywood</a>
                                </li>

                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-1">
                            <FaHome style={{ width: 30, height: 30 }} className="d-inline-block align-top" />
                        </div>
                        <div className="col">
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Hollywood</a>
                                </li>

                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-1">
                            <FaHome style={{ width: 30, height: 30 }} className="d-inline-block align-top" />
                        </div>
                        <div className="col">
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Bollywood</a>
                                </li>

                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-1">
                            <FaHome style={{ width: 30, height: 30 }} className="d-inline-block align-top" />
                        </div>
                        <div className="col">
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Tv Series</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-1">
                            <FaTv style={{ width: 30, height: 30 }} className="d-inline-block align-top" />
                        </div>
                        <div className="col">
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Live Tv</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-1">
                            <FaFlag style={{ width: 30, height: 30 }} className="d-inline-block align-top" />
                        </div>
                        <div className="col">
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Browse Channels</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}