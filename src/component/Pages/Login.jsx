import React, { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from 'context/AuthContext';

export default function Login() {
    const { login } = useAuthContext()
    const [formInput, setFormValue] = useState({
        email: '',
        password: ''
    })
    const isDisabled = useMemo(() => {
        return Object.values(formInput).some(input => !input)
    }, [formInput])
    const navigate = useNavigate()
    const handleemailChange = (event) => {
        // validate email
        setFormValue({ ...formInput, email: event.target.value })
    }
    const handlePasswordChange = (event) => {
        // write a logic for password validator. here i have to validate the password.
        setFormValue({ ...formInput, password: event.target.value })
    }

    // now here submit form and login into sustem
    const onSubmitForm = async (e) => {
        e.preventDefault();
        console.log("form is submiteed");
        let res = await login(formInput);
        console.log("Resp", res)
        if (res.status === 200) {
            alert("Successfully logged in..\n Redirecting to Home Page.", "success")
            navigate(-1);
        } else {
            alert("Wrong Credentials..", "danger")
        }
        setFormValue({
            email: '',
            password: ''
        })
    }

    return (
        <>
            <div className="container">
                <div className="" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
                    <form onSubmit={onSubmitForm}>
                        <div className="form-outline mb-4">
                            <input type="email" id="loginName" className="form-control" value={formInput.email} onChange={handleemailChange} />
                            <label className="form-label" htmlFor="loginName">Email</label>
                        </div>

                        <div className="form-outline mb-4">
                            <input type="password" id="loginPassword" className="form-control" value={formInput.password} onChange={handlePasswordChange} />
                            <label className="form-label" htmlFor="loginPassword">Password</label>
                        </div>

                        <div className="row mb-4">
                            <div className="col-md-6 d-flex justify-content-center">
                                <a href="#!">Forgot password?</a>
                            </div>
                        </div>

                        <button type="submit" className="btn btn-primary btn-block mb-4" disabled={isDisabled}>Sign in</button>

                        <div className="text-center">
                            <p>Not a member? <a href="/register">Register</a></p>
                        </div>
                    </form>
                </div>
            </div>


        </>
    )
}
