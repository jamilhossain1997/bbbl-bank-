import React, { useEffect, useState } from 'react';
import AdmitPdf from './Pdf/AdmitPdf';
import { useNavigate } from 'react-router-dom';

const AdminCard = () => {
    const navigate = useNavigate();
    useEffect(() => {
        if (!localStorage.getItem('user-info')) {
            navigate('/Login');
        }
    }, [])

    return (
        <>
            
            <div class="main_container">
                <div class="page_header">

                </div>
                <div class="top_bar">
                    <div class="logininfo">
                    </div>
                </div>
                <div style={{ height: `40px` }}></div>
                {
                    (
                        <div style={{ height: `350px` }}>
                            <div class="panelmain" id="panelMain" style={{ width: `40%`, marginLeft: `30%`, textAlign: `center` }}>

                                <span style={{ fontSize: `16px` }}>Admit Card is not available.</span>

                            </div>
                        </div>
                    ) &&

                    (
                        <AdmitPdf />
                    )
                }


                <center>
                    <div class="panel" style={{ width: `300px` }}>
                        <p><span id="ctl00_cphBody_Contact_no2" class="contact_text"><b>career@dbbl.com.bd</b></span><br /></p>
                        <p>Your PC will have to be able to access pdf file. The paper size will be of 8.5 inches X 7 inches.</p>

                    </div>
                    <p class="flip" style={{ width: `300px` }}><u>Online Admit Card Help</u></p>
                </center>


                <div style={{ height: `100px` }}></div>



            </div>
        </>
    )
}

export default AdminCard