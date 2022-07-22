import React, { useRef, useState, useEffect } from 'react';
import Pdf from "react-to-pdf";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const AdmitPdf = () => {
    let id = 1;
    const ref = React.createRef();
    const [data, setData] = useState([]);
    const navigate = useNavigate();
    

    function serach(id) {
        axios.get(`/api/AdmitCardDowload/${id}`)
            .then(res => {
                console.log(res);
                setData(res.data[0]);
            })
            .catch(err => {
                console.log(err);
            })
    }


    useEffect(() => {
        if (!localStorage.getItem('user-info')) {
            navigate('/');
        }
    }, [])

    return (
        <>
            <div class="container">
                <div class="col-md-6 offset-md-3">
                    <div class="input-group mt-3 mb-5">
                        <span class="input-group-text">Search</span>
                        <input class="form-control" onChange={(e) => serach(e.target.value)} aria-label="With textarea" placeholder='Enter Your Application Id' />
                    </div>
                </div>
            </div>
            {
                data ? (
                    <div class="print__section">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-12">
                                    <div ref={ref} className="card mb-3">
                                        <div class="float__start">
                                            <div class="row">
                                                <div class="col-md-2">
                                                    <img src='../assect/Logo.png' alt='image' style={{ width: `180px`, height: `100px`, marginLeft: `10px` }} />
                                                </div>
                                                <div class='col-md-10'>
                                                    <h1 style={{ marginLeft: `74px`, marginTop: `20px` }}>Dutch Bangla Bank Limited</h1>
                                                </div>
                                            </div>
                                        </div>
                                        <hr />
                                        <div class="float__infoss">
                                            <h3 class="card-title mb-0 " style={{ textDecoration: `none` }}>Admit Card</h3>
                                            <div class="container">
                                                <div class="row">
                                                    <div class="col-md-8">
                                                        <ul style={{ listStyleType: `none` }}>
                                                            <li> <b>Application ID:</b> <span> <b>{data.id}</b> </span> </li><br />
                                                            <li> Name : <span> {data.name}</span> </li><br />
                                                            <li> Father Name: <span> {data.father} </span> </li><br />
                                                            <li> Mother Name: <span>{data.mother} </span> </li><br />
                                                            <li> Date of Birth : <span> {data.brithday}</span> </li><br />
                                                            <li> Phone No: <span> </span> {data.contactNo} </li><br />
                                                        </ul>
                                                    </div>
                                                    <div class="col-md-4">
                                                        <h4 style={{ marginLeft: '30px' }}>candidate Photo</h4>
                                                        <ul>
                                                            <li><img src={`https://url.e71solution.xyz/backendBank/public/${data.photo}`} style={{ width: `250px` }} alt='photo' /></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    {/* <button onClick={handlePrint} class="btn btn-success">  Print/Download </button> */}
                                    <Pdf targetRef={ref} filename="AdmitCard.pdf">
                                        {({ toPdf }) => <button class="btn btn-primary" onClick={toPdf}>Download</button>}
                                    </Pdf>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div style={{ height: `350px` }}>
                        <div class="panelmain" id="panelMain" style={{ width: `40%`, marginLeft: `30%`, textAlign: `center` }}>

                            <span style={{ fontSize: `16px` }}>Admit Card is not available.</span>

                        </div>
                    </div>
                )
            }

        </>
    );
}

export default AdmitPdf