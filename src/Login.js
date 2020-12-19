import React from "react";

const Login = (props) => {

    const { 
        pw, 
        setPw, 
        handleLogin, 
        pwError
    } = props;

    return(
        <section className="login">
            <div className="loginContainer">
                <h1>X-Park Admin Pannel</h1>

                <label>Password</label>
                <input type="password"
                        autofocus
                        required
                        value={pw}
                        onChange={(e) => setPw(e.target.value)}
                />
                <p className="errorMsg">{pwError}</p>

                <div className="btnContainer">
                    <button onClick={handleLogin}>Sign in</button>
                </div>
            </div>
        </section>
    )
}

export default Login;