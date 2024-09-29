import React, { useState } from 'react';
import { InputOtp } from 'primereact/inputotp';
import { Button } from 'primereact/button';
import { useNavigate, Link } from 'react-router-dom';
import { Appointment } from '../Appointment/Appointment';
export default function SampleDemo({ role }) {
    const [token, setTokens] = useState('');
    const navigate = useNavigate(); // Initialize navigate

    const customInput = ({ events, props }) => {
        return (
            <>
                <input {...events} {...props} type="text" className="custom-otp-input-sample" />
                {props.id === 2 && (
                    <div className="px-3">
                        <i className="pi pi-minus" />
                    </div>
                )}
            </>
        );
    };

    const handleSubmit = () => {
        // Navigate based on the role
        if (role === "Admin") {
            navigate('/admin');
        } else if (role === "Doctor") {
            navigate('/doctor');
        } else {
            navigate('/appointment');
        }
    };

    return (
        <div className="card flex justify-content-center">
            <style scoped>
                {`
                    .custom-otp-input-sample {
                        width: 48px;
                        height: 48px;
                        font-size: 24px;
                        appearance: none;
                        text-align: center;
                        transition: all 0.2s;
                        border-radius: 0;
                        border: 1px solid var(--surface-400);
                        background: transparent;
                        outline-offset: -2px;
                        outline-color: transparent;
                        border-right: 0 none;
                        transition: outline-color 0.3s;
                        color: var(--text-color);
                    }

                    .custom-otp-input-sample:focus {
                        outline: 2px solid var(--primary-color);
                    }

                    .custom-otp-input-sample:first-child,
                    .custom-otp-input-sample:nth-child(5) {
                        border-top-left-radius: 12px;
                        border-bottom-left-radius: 12px;
                    }

                    .custom-otp-input-sample:nth-child(3),
                    .custom-otp-input-sample:last-child {
                        border-top-right-radius: 12px;
                        border-bottom-right-radius: 12px;
                        border-right-width: 1px;
                        border-right-style: solid;
                        border-color: var(--surface-400);
                    }
                `}
            </style>
            <div className="bg-white flex flex-column align-items-center">
                <p className="font-bold text-xl mb-2">Authenticate Your Account</p>
                <p className="text-color-secondary block mb-5">Please enter the code sent to your email.</p>
                <InputOtp value={token} onChange={(e) => setTokens(e.value)} length={6} inputTemplate={customInput} style={{gap: 0}} />
                <div className="flex justify-content-between mt-5 align-self-stretch">
                    <Button label="Resend Code" link />
                    <Button label="Submit Code" onClick={handleSubmit} /> {/* Add onClick handler */}
                </div>
                
                {/* Add links for Appointment and Doctor Dashboard */}
                <div className="flex justify-content-between mt-5">
                    <Link to="/appointment" className="p-button p-component p-button-text">Appointment</Link>
                    <Link to="/doctor" className="p-button p-component p-button-text">Doctor Dash</Link>
                    <Link to="/admin" className="p-button p-component p-button-text">Admin Dash</Link>
                </div>
            </div>
        </div>
    );
}
