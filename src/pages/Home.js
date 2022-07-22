import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('/api/joblistview')
            .then(res => {
                console.log(res)
                setData(res.data)
            })
            .catch(err => {
                console.log(err);
            })
    }, [])
   

    return (
        <>
            <div class="mainwrap">
                <div class="banerwrap">
                    <img src="../assect/career_banner.jpg" alt="Dutch Bangla Bank" class="banerimage" />
                </div>
                <div class="middle_left_panel"></div>
                <div class="middle_right_panel">
                    <div id="ctl00_cphBody_upContent"></div>

                    <div id="ctl00_cphBody_divExp">
                        {
                            data ? (
                                <div class="form_header" itemprop="description">
                                    <h2>job available now</h2>
                                </div>
                            ) : (
                                <div class="form_header" itemprop="description">
                                    <h2> No job available now</h2>
                                </div>
                            )
                        }


                        <table class="customDesignTbl">
                            <tr class="educationTbl">
                                <th>No.</th>
                                <th>Job Title</th>
                                <th>Category</th>
                                <th>Closeing Date</th>
                                <th>View</th>
                            </tr>
                            {
                                data.map((item, i) => {
                                    i += 1
                                    return (

                                        <tr>
                                            <td>{i}</td>
                                            <td>{item.JobTitle}</td>
                                            <td>{item.Category}</td>
                                            <td>{item.CloseingDate}</td>
                                            <td><Link to={`/joblistdel/${item.id}`} style={{ color: `#fff`, textDecoration: `none` }}>View</Link></td>
                                        </tr>

                                    )

                                })

                            }
                        </table>


                        <div class="form_header" itemprop="description">
                            <h3 style={{ textAlign: `right` }}>
                                <Link to="/AdminCard">Admit Card Download</Link>
                            </h3>
                        </div>

                        <div class="form_header" itemprop="description">
                            <h3 style={{ textAlign: `right` }}>
                                <Link to="/AdminCard">Interview Card Download</Link>
                            </h3>
                        </div>
                        <div class="form_header" itemprop="description">
                            <h3 style={{ textAlign: `right` }}>
                                <Link to="/ApplyStatus">Application Status</Link>
                            </h3>
                        </div>
                        <div class="form_header" itemprop="description">
                            <h3 style={{ textAlign: `right` }}>
                                <Link to="/payment">Payment</Link>
                            </h3>
                        </div>
                        <div class="helplinepanel">
                            <div class="panel">
                                <p>
                                    <strong style={{ color: `red` }}>Notice:</strong> Dutch Bangla Bank’s advertisement and recruitment for the post of ADC Manager, ADC Senior Executive and ADC Executive published on The Daily Prothom Alo,
                                    dated 28th November 2019<strong style={{ color: `red` }}> has been cancelled due to COVID-19 Situation.</strong>
                                </p>
                                <br />
                                <p>If you are facing any problem to apply for available positions, just send the problem in detail with your identification info.</p>
                                <p>
                                    <span id="ctl00_cphBody_Contact_no2" class="contact_text" itempop="performer">
                                        <a href="mailto:career@dutchbanglabank.com">career@dutchbanglabank.com</a>
                                    </span>
                                </p>
                                <p>* Only for technical help *</p>
                                <p>* Kindly don't send CV directly to this mail *</p>
                            </div>
                            {/* <a href="#" class="helpline">Helpline for Career Opportunity</a> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
