import React from 'react'
import { InputText } from 'primereact/inputtext';
       

//             <div className="p-inputgroup flex-1">
//                 <span className="p-inputgroup-addon">$</span>
//                 <InputNumber placeholder="Price" />
//                 <span className="p-inputgroup-addon">.00</span>
//             </div>

//             <div className="p-inputgroup flex-1">
//                 <span className="p-inputgroup-addon">www</span>
//                 <InputText placeholder="Website" />
//             </div>
//         </div>
//     )
// }
        
import './Doctor.css'
export const Patient = () => {
  return (
    <div>
        <form action="" method='get'>
            <div className="email">
            <label htmlFor="fmail">Enter the Email:</label>
            <input type="email"/>
            </div>
            <div className="card flex flex-column md:flex-row gap-3">
            <div className="p-inputgroup flex-1">
                <span className="p-inputgroup-addon">
                    <i className="pi pi-user"></i>
                </span>
                <InputText placeholder="Email" />
            </div>
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
