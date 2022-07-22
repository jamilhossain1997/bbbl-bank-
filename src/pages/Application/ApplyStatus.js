import React from 'react';
import axios from 'axios';
import { useState } from 'react';


const ApplyStatus = () => {
    const [data, setData] = useState([]);
    function serach(id) {
        axios.get(`/api/applyinSingle/${id}`)
            .then(res => {
                console.log(res);
                setData(res.data[0]);
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <>
            <div class="container mb-3">
                <div class="row">
                    <div class="col-md-6 offset-md-3">
                        <div class="input-group mt-3 mb-5">
                            <span class="input-group-text">Search</span>
                            <input class="form-control" onChange={(e) => serach(e.target.value)} aria-label="With textarea" placeholder='Enter Your Application Id' />
                        </div>
                    </div>
                </div>
                <table class="table table-success table-striped">
                    <thead>
                        <th>Appliction Id</th>
                        <th>Name</th>
                        <th>Father Name</th>
                        <th>Mother Name</th>
                        <th>Status</th>
                    </thead>
                    <tbody>

                        {
                            data ? (
                                <tr>
                                    <td>{data.id}</td>
                                    <td>{data.name}</td>
                                    <td>{data.father}</td>
                                    <td>{data.mother}</td>
                                    <td>{data.status}</td>
                                </tr>
                            ) :
                                (
                                    <h2>Not Application</h2>
                                )
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default ApplyStatus