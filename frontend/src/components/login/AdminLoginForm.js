import React, { useState } from 'react';
import "./LoginForm.css";
import { connect } from "react-redux";
import { login } from "../../auth/Auth";
import { TextField, Button } from "@mui/material";

function AdminLoginForm({login}) {
    const [adminEmail, setAdminEmail] = useState('');
    const [adminPassword, setAdminPassword] = useState('');

    const loginAdmin = (event) => {
        event.preventDefault()
        login(adminEmail, adminPassword, true, false, false)
    }

    return (
        <div className="admin-login-form">
            <form>
                <h1 className="m-3">ADMIN LOGIN</h1>

                <TextField
                    label="Email address"
                    value={adminEmail}
                    variant="outlined"
                    className="custom-input mt-5"
                />

                <TextField
                    label="Password"
                    type="password"
                    value={adminPassword}
                    variant="outlined"
                    className="custom-input mt-2"
                />

                <Button
                    type="submit"
                    className="mt-5 custom-button"
                    onClick={loginAdmin}
                    variant="outlined"
                >
                    LOGIN
                </Button>
            </form>
        </div>
    );
}

export default connect(null, {login})(AdminLoginForm);
