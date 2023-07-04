import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import serverAuth from 'handler/auth';

const { register } = serverAuth;

export const Registration = () => {
    const defaultFormValue = {
        name: '',
        email: '',
        number: '',
        password: '',
        password_repeat: ''
    }

    const [formInput, setFormInput] = useState(defaultFormValue)
    const isDisabled = useMemo(() => {
        return Object.values(formInput).some(input => !input)
    }, [formInput])
    const navigate = useNavigate()

    const handleUsernameChange = (event) => {
        // validate username
        setFormInput({ ...formInput, name: event.target.value })
    }
    const handleEmailChange = (event) => {
        // validate username
        setFormInput({ ...formInput, email: event.target.value })
    }
    const handleNumberChange = (event) => {
        // validate username
        setFormInput({ ...formInput, number: event.target.value })
    }
    const handlePasswordChange = (event) => {
        // write a logic for password validator. here i have to validate the password.
        setFormInput({ ...formInput, password: event.target.value })
    }
    const handleRepeatPasswordChange = (event) => {
        // write a logic for password validator. here i have to validate the password.
        setFormInput({ ...formInput, password_repeat: event.target.value })
    }

    // now here submit form and login into sustem
    const onSubmitForm = async (e) => {
        e.preventDefault();
        console.log("form is submiteed");
        let res = await register(formInput);
        console.log(res)
        if (res.status === 201) {
            alert("Successfully Created User..\n Redirecting to Home Page.", "success")
            navigate(-1);
        } else {
            alert("Wrong Credentials..", "danger")
        }
        setFormInput(defaultFormValue);
    }




    return (
        <div className="container">
            <h3 className='text-center mt-5'>Register</h3>
            <form onSubmit={onSubmitForm} className='mt-5'>
                <div className="form-outline mb-4">
                    <input type="text" id="registerName" className="form-control" value={formInput.name} onChange={handleUsernameChange} />
                    <label className="form-label" htmlFor="registerName">Name</label>
                </div>

                <div className="form-outline mb-4">
                    <input type="email" id="registerEmail" className="form-control" value={formInput.email} onChange={handleEmailChange} />
                    <label className="form-label" htmlFor="registerEmail">Email</label>
                </div>
                <div className="form-outline mb-4">
                    <input type="tel" id="registerNumber" className="form-control" value={formInput.number} onChange={handleNumberChange} />
                    <label className="form-label" htmlFor="registerNumber">Number</label>
                </div>

                <div className="form-outline mb-4">
                    <input type="password" id="registerPassword" className="form-control" value={formInput.password} onChange={handlePasswordChange} />
                    <label className="form-label" htmlFor="registerPassword">Password</label>
                </div>

                <div className="form-outline mb-4">
                    <input type="password" id="registerRepeatPassword" className="form-control" value={formInput.password_repeat} onChange={handleRepeatPasswordChange} />
                    <label className="form-label" htmlFor="registerRepeatPassword">Repeat password</label>
                </div>

                <button type="submit" disabled={isDisabled} className="btn btn-primary btn-block mb-3">Sign in</button>
            </form>
        </div>
    )
}
