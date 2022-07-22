import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const ApplyFormNext = () => {

    const [FromDate, setFromDate] = useState('');
    const [To_Date, setTo_Date] = useState('');
    const [Designation, setDesignation] = useState('');
    const [Organization_Type, setOrganization_Type] = useState('');
    const [Organization, setOrganization] = useState('');
    const [Responsibilities, setResponsibilities] = useState('');
    const [Nature_of_Job, setNature_of_Job] = useState('');

    const [FromDate1, setFromDate1] = useState('');
    const [To_Date1, setTo_Date1] = useState('');
    const [Designation1, setDesignation1] = useState('');
    const [Organization_Type1, setOrganization_Type1] = useState('');
    const [Organization1, setOrganization1] = useState('');
    const [Responsibilities1, setResponsibilities1] = useState('');
    const [Nature_of_Job1, setNature_of_Job1] = useState('');

    const [FromDate2, setFromDate2] = useState('');
    const [To_Date2, setTo_Date2] = useState('');
    const [Designation2, setDesignation2] = useState('');
    const [Organization_Type2, setOrganization_Type2] = useState('');
    const [Organization2, setOrganization2] = useState('');
    const [Responsibilities2, setResponsibilities2] = useState('');
    const [Nature_of_Job2, setNature_of_Job2] = useState('');

    const [FromDate3, setFromDate3] = useState('');
    const [To_Date3, setTo_Date3] = useState('');
    const [Designation3, setDesignation3] = useState('');
    const [Organization_Type3, setOrganization_Type3] = useState('');
    const [Organization3, setOrganization3] = useState('');
    const [Responsibilities3, setResponsibilities3] = useState('');
    const [Nature_of_Job3, setNature_of_Job3] = useState('');

    const [Name_of_organizations, setName_of_organizations] = useState('');
    const [Field_of_Experience, setField_of_Experience] = useState('');
    const [Duration, setDuration] = useState('');

    const [Name_of_organizations1, setName_of_organizations1] = useState('');
    const [Field_of_Experience1, setField_of_Experience1] = useState('');
    const [Duration1, setDuration1] = useState('');

    const [Name_of_organizations2, setName_of_organizations2] = useState('');
    const [Field_of_Experience2, setField_of_Experience2] = useState('');
    const [Duration2, setDuration2] = useState('');

    const [inputList, setInputList] = useState([{
        FromDate: "", To_Date: "", Designation: "", Organization: "",
        Organization_Type: "", Responsibilities: "", Nature_of_Job: ""
    }]);
    const [inputFieldExperience, setInputFieldExperience] = useState([{
        Name_of_organizations: "",
        Field_of_Experience: "",
        Duration: ""

    }]);
    const [photo, setPhoto] = useState('');
    const [lastcerificate, setLastCertificate] = useState('');
    const [nidCertificate, setNidCertificate] = useState('');
    const [message,setMessage]=useState(null);
    const navigate=useNavigate();




    // handle input change
    // const handleInputChange = (e, index) => {
    //     const { name, value } = e.target;
    //     const list = [...inputList];
    //     list[index][name] = value;
    //     setInputList(list);
    // };

    const handleChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...inputFieldExperience];
        list[index][name] = value;
        setInputFieldExperience(list);
    };

    // handle click event of the Remove button
    const handleRemoveClick = index => {
        const list = [...inputList];
        list.splice(index, 1);
        setInputList(list);
    };
    const handleExpreinceRemoveClick = index => {
        const list = [...inputFieldExperience];
        list.splice(index, 1);
        setInputFieldExperience(list);
    };

    // handle click event of the Add button
    const handleAddClick = () => {
        setInputList([...inputList, { FromDate: "", To_Date: "", Designation: "", Organization: "", Organization_Type: "", Responsibilities: "", Nature_of_Job: "" }]);
    };

    const handleAddExpreinceClick = () => {
        setInputFieldExperience([...inputFieldExperience, {
            Name_of_organizations: "",
            Field_of_Experience: "",
            Duration: ""
        }]);
    };

   async function heandleSubmit(e) {
        e.preventDefault()

        const formData = new FormData();

        formData.append("photo", photo);
        formData.append("lastcerificate", lastcerificate);
        formData.append("nidCertificate", nidCertificate);

        formData.append("FromDate", FromDate);
        formData.append("To_Date", To_Date);
        formData.append("Designation", Designation);
        formData.append("Organization", Organization);
        formData.append("Responsibilities", Responsibilities);
        formData.append("Organization_Type", Organization_Type);
        formData.append("Nature_of_Job", Nature_of_Job);

        formData.append("FromDate1", FromDate1);
        formData.append("To_Date1", To_Date1);
        formData.append("Designation1", Designation1);
        formData.append("Organization1", Organization1);
        formData.append("Responsibilities1", Responsibilities1);
        formData.append("Organization_Type1", Organization_Type1);
        formData.append("Nature_of_Job1", Nature_of_Job1);

        formData.append("FromDate2", FromDate2);
        formData.append("To_Date2", To_Date2);
        formData.append("Designation2", Designation2);
        formData.append("Organization2", Organization2);
        formData.append("Responsibilities2", Responsibilities2);
        formData.append("Organization_Type2", Organization_Type2);
        formData.append("Nature_of_Job2", Nature_of_Job2);

        formData.append("FromDate3", FromDate3);
        formData.append("To_Date3", To_Date3);
        formData.append("Designation3", Designation3);
        formData.append("Organization3", Organization3);
        formData.append("Responsibilities3", Responsibilities3);
        formData.append("Organization_Type3", Organization_Type3);
        formData.append("Nature_of_Job3", Nature_of_Job3);

        formData.append("Name_of_organizations", Name_of_organizations);
        formData.append("Field_of_Experience", Field_of_Experience);
        formData.append("Duration", Duration);

        formData.append("Name_of_organizations1", Name_of_organizations1);
        formData.append("Field_of_Experience1", Field_of_Experience1);
        formData.append("Duration1", Duration1);

        formData.append("Name_of_organizations2", Name_of_organizations2);
        formData.append("Field_of_Experience2", Field_of_Experience2);
        formData.append("Duration2", Duration2);

        try {
            const response = await axios({
                method:"post",
                url: "/api/applyexp",
                data: formData,
                headers: { "Content-Type": "multipart/form-data" },
            });
            setMessage(response.data.message);
            navigate("/formsubmit");
           

        } catch (error) {
            console.log(error)
        }


        console.log([...formData])
    }
    return (
        <>
            <div class="mainwrap table-responsive">
                <div class="form_header" itemprop="description">
                    <h2>Online Application Form</h2>
                </div>
                <h3 class="page_apply">Experience</h3>
                <table class="acadmic_table mb-2">
                    <tr>
                        <th>From Date(dd/mm/yyyy)</th>
                        <th>To Date(dd/mm/yyyy)</th>
                        <th style={{ width: `107px` }}>Designation</th>
                        <th>Organization</th>
                        <th>Organization Type</th>
                        <th>Duties/Responsibilities(Maximun 500 characters)</th>
                        <th>Nature of Job</th>
                    </tr>
                    <tr>
                        <td><input type="text" name='FromDate1' onChange={e => setFromDate1(e.target.value)} class="form-control mb-3" id="inlineFormInputGroup" /></td>
                        <td>
                            <input type="text" name='To_Date1' onChange={e => setTo_Date1(e.target.value)} class="form-control mb-3" id="inlineFormInputGroup" />
                        </td>
                        <td>
                            <input type="text" name='Designation1' onChange={e => setDesignation1(e.target.value)} class="form-control mb-3" id="inlineFormInputGroup" />
                        </td>
                        <td>
                            <input type="text" name='Organization1' onChange={e => setOrganization1(e.target.value)} class="form-control mb-3" id="inlineFormInputGroup" />
                        </td>
                        <td>
                            <select name="Organization_Type1" onChange={e => setOrganization_Type1(e.target.value)} id="ssc_board" class="form-control mb-3">
                                <option selected disabled value="">Select One</option>
                                <option>corporations</option>
                                <option>governments</option>
                                <option>non-governments</option>
                                <option>political organizations</option>
                                <option>international organizations</option>
                                <option>armed forces</option>
                                <option>charities</option>
                                <option> not-for-profit corporations</option>
                                <option>partnerships</option>
                                <option>cooperatives</option>
                                <option>educational institutions</option>
                                <option>Others</option>
                            </select>
                        </td>
                        <td>
                            <div class="form-group mb-3">
                                <input type="text" name='Responsibilities1' onChange={e => setResponsibilities1(e.target.value)} class="form-control" id="inlineFormInputGroup" />
                            </div>
                        </td>
                        <td>
                            <div class="form-group mb-3">
                                <input type="text" name='Nature_of_Job1' onChange={e => setNature_of_Job1(e.target.value)} class="form-control" id="inlineFormInputGroup" />
                            </div>
                        </td>

                    </tr>

                    <tr>
                        <td><input type="text" name='FromDate2' onChange={e => setFromDate2(e.target.value)} class="form-control mb-3" id="inlineFormInputGroup" /></td>
                        <td>
                            <input type="text" name='To_Date2' onChange={e => setTo_Date2(e.target.value)} class="form-control mb-3" id="inlineFormInputGroup" />
                        </td>
                        <td>
                            <input type="text" name='Designation2' onChange={e => setDesignation2(e.target.value)} class="form-control mb-3" id="inlineFormInputGroup" />
                        </td>
                        <td>
                            <input type="text" name='Organization2' onChange={e => setOrganization2(e.target.value)} class="form-control mb-3" id="inlineFormInputGroup" />
                        </td>
                        <td>
                            <select name="Organization_Type2" onChange={e => setOrganization_Type2(e.target.value)} id="ssc_board" class="form-control mb-3">
                                <option selected disabled value="">Select One</option>
                                <option>corporations</option>
                                <option>governments</option>
                                <option>non-governments</option>
                                <option>political organizations</option>
                                <option>international organizations</option>
                                <option>armed forces</option>
                                <option>charities</option>
                                <option> not-for-profit corporations</option>
                                <option>partnerships</option>
                                <option>cooperatives</option>
                                <option>educational institutions</option>
                                <option>Others</option>
                            </select>
                        </td>
                        <td>
                            <div class="form-group mb-3">
                                <input type="text" name='Responsibilities2' onChange={e => setResponsibilities2(e.target.value)} class="form-control" id="inlineFormInputGroup" />
                            </div>
                        </td>
                        <td>
                            <div class="form-group mb-3">
                                <input type="text" name='Nature_of_Job2' onChange={e => setNature_of_Job2(e.target.value)} class="form-control" id="inlineFormInputGroup" />
                            </div>
                        </td>

                    </tr>
                    <tr>
                        <td><input type="text" name='FromDate3' onChange={e => setFromDate3(e.target.value)} class="form-control mb-3" id="inlineFormInputGroup" /></td>
                        <td>
                            <input type="text" name='To_Date3' onChange={e => setTo_Date3(e.target.value)} class="form-control mb-3" id="inlineFormInputGroup" />
                        </td>
                        <td>
                            <input type="text" name='Designation3' onChange={e => setDesignation3(e.target.value)} class="form-control mb-3" id="inlineFormInputGroup" />
                        </td>
                        <td>
                            <input type="text" name='Organization3' onChange={e => setOrganization3(e.target.value)} class="form-control mb-3" id="inlineFormInputGroup" />
                        </td>
                        <td>
                            <select name="Organization_Type3" onChange={e => setOrganization_Type3(e.target.value)} id="ssc_board" class="form-control mb-3">
                                <option selected disabled value="">Select One</option>
                                <option>corporations</option>
                                <option>governments</option>
                                <option>non-governments</option>
                                <option>political organizations</option>
                                <option>international organizations</option>
                                <option>armed forces</option>
                                <option>charities</option>
                                <option> not-for-profit corporations</option>
                                <option>partnerships</option>
                                <option>cooperatives</option>
                                <option>educational institutions</option>
                                <option>Others</option>
                            </select>
                        </td>
                        <td>
                            <div class="form-group mb-3">
                                <input type="text" name='Responsibilities3' onChange={e => setResponsibilities3(e.target.value)} class="form-control" id="inlineFormInputGroup" />
                            </div>
                        </td>
                        <td>
                            <div class="form-group mb-3">
                                <input type="text" name='Nature_of_Job3' onChange={e => setNature_of_Job3(e.target.value)} class="form-control" id="inlineFormInputGroup" />
                            </div>
                        </td>
                    </tr>

                    {
                        inputList.map((x, i) => {
                            return (
                                <>
                                    <tr>
                                        <td><input type="text" name='FromDate' onChange={e => setFromDate(e.target.value)} class="form-control mb-3" id="inlineFormInputGroup" /></td>
                                        <td>
                                            <input type="text" name='To_Date' onChange={e => setTo_Date(e.target.value)} class="form-control mb-3" id="inlineFormInputGroup" />
                                        </td>
                                        <td>
                                            <input type="text" name='Designation' onChange={e => setDesignation(e.target.value)} class="form-control mb-3" id="inlineFormInputGroup" />
                                        </td>
                                        <td>
                                            <input type="text" name='Organization' onChange={e => setOrganization(e.target.value)} class="form-control mb-3" id="inlineFormInputGroup" />
                                        </td>
                                        <td>
                                            <select name="Organization_Type" onChange={e => setOrganization_Type(e.target.value)} id="ssc_board" class="form-control mb-3">
                                                <option selected disabled value="">Select One</option>
                                                <option>corporations</option>
                                                <option>governments</option>
                                                <option>non-governments</option>
                                                <option>political organizations</option>
                                                <option>international organizations</option>
                                                <option>armed forces</option>
                                                <option>charities</option>
                                                <option> not-for-profit corporations</option>
                                                <option>partnerships</option>
                                                <option>cooperatives</option>
                                                <option>educational institutions</option>
                                                <option>Others</option>
                                            </select>
                                        </td>
                                        <td>
                                            <div class="form-group mb-3">
                                                <input type="text" name='Responsibilities' onChange={e => setResponsibilities(e.target.value)} class="form-control" id="inlineFormInputGroup" />
                                            </div>
                                        </td>
                                        <td>
                                            <div class="form-group mb-3">
                                                <input type="text" name='Nature_of_Job' onChange={e => setNature_of_Job(e.target.value)} class="form-control" id="inlineFormInputGroup" />
                                            </div>
                                        </td>

                                    </tr>

                                </>
                            )

                        })
                    }

                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td style={{ float: `right` }}><button type="button" class="btn btn-primary " onClick={handleRemoveClick}>Remove</button><button type="button" class="btn btn-primary " onClick={handleAddClick}>Add More</button></td>
                        <td></td>
                    </tr>


                </table>
                <h3 class="page_apply">Field of Experience</h3>
                <table class="acadmic_table mb-3">
                    <tr>
                        <th style={{ width: `33.33%` }}>Name of organizations</th>
                        <th style={{ width: `33.33%` }}>Field of Experience</th>
                        <th style={{ width: `33.33%` }}>Duration</th>
                    </tr>
                    <tr>
                        <td>
                            <input type="text" name='Name_of_organizations1' onChange={e => setName_of_organizations1(e.target.value)} class="form-control mb-3" id="inlineFormInputGroup" />
                        </td>
                        <td>
                            <input type="text" name='Field_of_Experience1' onChange={e => setField_of_Experience1(e.target.value)} class="form-control mb-3" id="inlineFormInputGroup" />
                        </td>
                        <td>
                            <input type="text" name='Duration1' onChange={e => setDuration1(e.target.value)} class="form-control mb-3" id="inlineFormInputGroup" />
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <input type="text" name='Name_of_organizations2' onChange={e => setName_of_organizations2(e.target.value)} class="form-control mb-3" id="inlineFormInputGroup" />
                        </td>
                        <td>
                            <input type="text" name='Field_of_Experience2' onChange={e => setField_of_Experience2(e.target.value)} class="form-control mb-3" id="inlineFormInputGroup" />
                        </td>
                        <td>
                            <input type="text" name='Duration2' onChange={e => setDuration2(e.target.value)} class="form-control mb-3" id="inlineFormInputGroup" />
                        </td>
                    </tr>

                    {
                        inputFieldExperience.map((x, i) => {
                            return (
                                <tr>
                                    <td>
                                        <input type="text" name='Name_of_organizations' onChange={e => setName_of_organizations(e.target.value)} class="form-control mb-3" id="inlineFormInputGroup" />
                                    </td>
                                    <td>
                                        <input type="text" name='Field_of_Experience' onChange={e => setField_of_Experience(e.target.value)} class="form-control mb-3" id="inlineFormInputGroup" />
                                    </td>
                                    <td>
                                        <input type="text" name='Duration' onChange={e => setDuration(e.target.value)} class="form-control mb-3" id="inlineFormInputGroup" />
                                    </td>
                                </tr>
                            )

                        })
                    }

                    <tr>
                        <td></td>
                        <td></td>
                        <td style={{ float: `right` }}><button type="button" class="btn btn-primary " onClick={handleExpreinceRemoveClick}>Remove</button><button type="button" class="btn btn-primary " onClick={handleAddExpreinceClick}>Add More</button></td>
                    </tr>
                </table>
                <h3 class="page_apply">Upload Photo & Last Certificate</h3>
                <table class="acadmic_table_last">
                    <tr>
                        <td>
                            Photo
                        </td>
                        <td>
                            <input type="file" onChange={e => setPhoto(e.target.files[0])} class="form-control mb-3" id="inlineFormInputGroup" />
                        </td>
                        <td>
                            <p style={{ color: `#008140` }}>Max. size 30kb, Extension jpg</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Last Certificate
                        </td>
                        <td>
                            <input type="file" onChange={e => setLastCertificate(e.target.files[0])} class="form-control mb-3" id="inlineFormInputGroup" />
                        </td>
                        <td>
                            <p style={{ color: `#008140` }}>Max. size 100kb, Extension jpg</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            NID Certificate
                        </td>
                        <td>
                            <input type="file" onChange={e => setNidCertificate(e.target.files[0])} class="form-control mb-3" id="inlineFormInputGroup" />
                        </td>
                        <td>
                            <p style={{ color: `#008140` }}>Max. size 100kb, Extension jpg</p>
                        </td>
                    </tr>

                </table>
                <button class="btn btn-primary btn-lg btn-block mb-5" onClick={heandleSubmit} style={{ float: `right` }}>submit</button>
            </div>
        </>
    )
}

export default ApplyFormNext