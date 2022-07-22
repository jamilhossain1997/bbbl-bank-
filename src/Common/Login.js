import React from 'react';
import './Authstyle.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [phone, setPhone] = useState('');
    const [otp, setotp] = useState('');
    const [message, setMessage] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
        if(localStorage.getItem('user-info')){
            navigate('/');
       }
     }, [])

    function heandlesubmit() {
        let item = {phone,otp}
        setMessage(null);
        axios.post('/api/userlogin', item)
            .then(res => {
                console.log(res);
                setMessage(res.data.message);
                localStorage.setItem('user-info', res.data);
                navigate('/');
            })
            .catch(err => {
                console.log(err);
                setMessage(err.res.data.message);
            })
    }

    return (
        <>
            <div class="login-page">
                <div class="form">
                   
                    <h1>Login</h1>
                    {message && <div class="alert alert-primary" role="alert">
                        {message}
                    </div>}
                    <div class="login-form">
                        <input type="text" value={phone} onChange={e => setPhone(e.target.value)} placeholder="Email" />
                        <input type="text" value={otp} onChange={e => setotp(e.target.value)} placeholder="password" />
                        <button onClick={heandlesubmit}>login</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login