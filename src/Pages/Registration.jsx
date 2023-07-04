import React from 'react'

export const Registration = () => {
    return (
        <div className="container">
                <div className="" id="pills-register" role="tabpanel" aria-labelledby="tab-register">
                    <form>
                        <div className="text-center mb-3">
                            <p>Sign up with:</p>
                            <button type="button" className="btn btn-link btn-floating mx-1">
                                <i className="fab fa-facebook-f"></i>
                            </button>

                            <button type="button" className="btn btn-link btn-floating mx-1">
                                <i className="fab fa-google"></i>
                            </button>

                            <button type="button" className="btn btn-link btn-floating mx-1">
                                <i className="fab fa-twitter"></i>
                            </button>

                            <button type="button" className="btn btn-link btn-floating mx-1">
                                <i className="fab fa-github"></i>
                            </button>
                        </div>

                        <p className="text-center">or:</p>

                        <div className="form-outline mb-4">
                            <input type="text" id="registerName" className="form-control" />
                            <label className="form-label" for="registerName">Name</label>
                        </div>

                        <div className="form-outline mb-4">
                            <input type="text" id="registerUsername" className="form-control" />
                            <label className="form-label" for="registerUsername">Username</label>
                        </div>

                        <div className="form-outline mb-4">
                            <input type="email" id="registerEmail" className="form-control" />
                            <label className="form-label" for="registerEmail">Email</label>
                        </div>

                        <div className="form-outline mb-4">
                            <input type="password" id="registerPassword" className="form-control" />
                            <label className="form-label" for="registerPassword">Password</label>
                        </div>

                        <div className="form-outline mb-4">
                            <input type="password" id="registerRepeatPassword" className="form-control" />
                            <label className="form-label" for="registerRepeatPassword">Repeat password</label>
                        </div>

                        <div className="form-check d-flex justify-content-center mb-4">
                            <input className="form-check-input me-2" type="checkbox" value="" id="registerCheck" checked
                                aria-describedby="registerCheckHelpText" />
                            <label className="form-check-label" for="registerCheck">
                                I have read and agree to the terms
                            </label>
                        </div>

                        <button type="submit" className="btn btn-primary btn-block mb-3">Sign in</button>
                    </form>
                </div>
            </div>
    )
}
