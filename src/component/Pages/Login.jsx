import React from 'react'


export default function Login() {
    return (
        <>
            <div className="container">
                <div className="" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
                    <form>
                        <div className="form-outline mb-4">
                            <input type="email" id="loginName" className="form-control" />
                            <label className="form-label" for="loginName">Email or username</label>
                        </div>

                        <div className="form-outline mb-4">
                            <input type="password" id="loginPassword" className="form-control" />
                            <label className="form-label" for="loginPassword">Password</label>
                        </div>

                        <div className="row mb-4">
                            <div className="col-md-6 d-flex justify-content-center">
                                <div className="form-check mb-3 mb-md-0">
                                    <input className="form-check-input" type="checkbox" value="" id="loginCheck" checked />
                                    <label className="form-check-label" for="loginCheck"> Remember me </label>
                                </div>
                            </div>

                            <div className="col-md-6 d-flex justify-content-center">
                                <a href="#!">Forgot password?</a>
                            </div>
                        </div>

                        <button type="submit" className="btn btn-primary btn-block mb-4">Sign in</button>

                        <div className="text-center">
                            <p>Not a member? <a href="/register">Register</a></p>
                        </div>
                    </form>
                </div>
            </div>
        

        </>
    )
}
