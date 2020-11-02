import React, { useState } from "react";
import { connect } from "react-redux";

import { login } from "../redux/user/user.actions";

import CustomInput from "../components/custom-input.component";

const LoginPage = ({ login }) => {
    const [username, setUsername] = useState("marigold1920");
    const [password, setPassword] = useState("123");

    return (
        <div className="authentication">
            <div action="login" method="post" className="form__side">
                <span className="header">Login with username and password</span>
                <CustomInput
                    icon="far fa-user"
                    type="text"
                    required
                    placeholder="Username"
                    defaultValue={username}
                    onChange={value => setUsername(value)}
                />
                <CustomInput
                    icon="fas fa-fingerprint"
                    type="password"
                    required
                    placeholder="Password"
                    defaultValue={password}
                    onChange={value => setPassword(value)}
                />
                <button onClick={() => login(username, password)} className="action" type="submit">
                    Login
                </button>
            </div>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    login: (username, password) => dispatch(login({ username, password }))
});

export default connect(null, mapDispatchToProps)(LoginPage);
