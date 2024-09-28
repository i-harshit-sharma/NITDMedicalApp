import React from 'react';
import { Button } from 'primereact/button';
import './History.css'
function History(){
    return(
        <div className="history-box">
            <div className="history-header">
                <div className="history-header-left">
                    <div className="header-print">Print</div>
                    <div className="header-view">View</div>
                </div>
                <div className="history-header-right">28-09-2024</div>
            </div>
            <div className="history-content">
                <div className="content-diagnosis">Diagnosis: Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat enim laboriosam harum facilis ipsum officia minima maxime fugit explicabo provident.</div>
                <div className="content-medication">Medication : Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio quisquam exercitationem, omnis molestiae commodi perferendis. Expedita minus magnam .</div>
            </div>
        </div>
    );
}
export default History;