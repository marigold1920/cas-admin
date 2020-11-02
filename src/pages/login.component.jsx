import React from "react";

import CustomInput from "../components/custom-input.component";

const LoginPage = () => (
    <div class="authentication">
        <div action="login" method="post" class="form__side">
            <span class="header">Login with username and password</span>
            <CustomInput
                icon="far fa-user"
                type="text"
                name="username"
                required
                placeholder="Username"
            />
            <CustomInput
                icon="fas fa-fingerprint"
                type="password"
                name="password"
                required
                value=""
                placeholder="Password"
                minlength="6"
                oninvalid="this.setCustomValidity('Password is at least 6 characters')"
            />
            <button class="action" type="submit">
                Login
            </button>
        </div>
    </div>
);

export default LoginPage;
