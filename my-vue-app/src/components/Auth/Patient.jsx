import React from 'react'
import './Doctor.css'
export const Patient = () => {
  return (
    <div>
        <form action="" method='get'>
            <div className="email">
            <label htmlFor="fmail">Enter the Email:</label>
            <input type="email"/>
            </div>
            <div className="password">
            <label htmlFor="fpass">Enter the Password:</label>
            </div>
            <input type="password"/>
            <div className="remember">
                <input type="checkbox" id='checkbox' />
                <label htmlFor="checkbox">Remember Me</label>
            </div>
            <div className="submit">
            <input type="submit" value="Submit"/>
            </div>
            <div className="forget">
                <a href="">Forgot Password?</a>
            </div>
        </form>
    </div>
  )
}
