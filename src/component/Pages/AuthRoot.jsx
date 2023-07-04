import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function AuthRoot() {
    return (
        <>
            <div>
                <ul className="nav nav-pills nav-justified mb-3 w-75 m-auto" id="ex1" role="tablist">
                    <li className="nav-item" role="presentation">
                        <Link className="nav-link active" id="tab-login" data-mdb-toggle="pill" to="login" role="tab"
                            aria-controls="pills-login" aria-selected="true">Login</Link>
                    </li>
                    <li className="nav-item" role="presentation">
                        <Link className="nav-link" id="tab-register" data-mdb-toggle="pill" to="register" role="tab"
                            aria-controls="pills-register" aria-selected="false">Register</Link>
                    </li>
                </ul>
            </div>
            <Outlet />
        </>
    )
}
