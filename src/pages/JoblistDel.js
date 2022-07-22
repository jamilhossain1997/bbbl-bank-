import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';

const JoblistDel = () => {
    const [data, setData] = useState([]);
    let { id } = useParams();
    useEffect(() => {
        axios.get(`/api/joblistSingleview/${id}`)
            .then(res => {
                console.log(res);
                setData(res.data.Joblist);
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    return (
        <>
            <div class="mainwrap">
                <div class="banerwrap">
                    <img src="../assect/career_banner.jpg" alt="Dutch Bangla Bank" class="banerimage" />
                </div>
                <div class="middle_left_panel"></div>
                <div class="form_header" itemprop="description">
                    <h2>Job Details</h2>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="detailsWrap">
                            <table class="customDesignTb2 mb-3">

                                <tr>
                                    <th>Job Title:</th>
                                    <td>{data.JobTitle}</td>

                                </tr>
                                <tr>
                                    <th>Experience Requirements:</th>
                                    <td>{data.ExperienceRequirements}</td>

                                </tr>
                                <tr>
                                    <th></th>
                                    <td>{data.OtherExperienceRequirements}</td>
                                </tr>
                                <tr>
                                    <th>Educational Qualification:</th>
                                    <td>{data.EducationalQualification}</td>
                                </tr>
                                <tr>
                                    <th>Other Requirements:</th>
                                    <td>{data.OtherRequirements}</td>
                                </tr>
                                <tr>
                                    <th></th>
                                    <td>{data.innovative}</td>
                                </tr>
                                <tr>
                                    <th></th>
                                    <td>{data.OnlyOneApply}</td>
                                </tr>
                                <tr>
                                    <th>Age</th>
                                    <td>{data.Age}</td>
                                </tr>
                            </table>
                            <button  style={{backgroundColor:`#6E72B1`,color:`#fff`,float:`right`}}><Link to={`/applyfrom${data.id}`} style={{textDecoration:`none`,color:`#fff` }}>Apply From</Link></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default JoblistDel