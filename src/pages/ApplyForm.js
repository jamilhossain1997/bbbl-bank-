import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import $ from 'jquery';


const ApplyForm = () => {
    const { id } = useParams();
    const [name, setName] = useState('');
    const [joblistid, setJoblistid] = useState(`${id}`)
    const [father, setFather] = useState('');
    const [mother, setMother] = useState('');
    const [freedomFighter, setFreedomFighter] = useState('');
    const [brithday, setBrithday] = useState('');
    const [age, setAge] = useState('');
    const [nid, setNid] = useState('');
    const [heigt, setHeigt] = useState('');
    const [weight, setWigth] = useState('');
    const [postalAdd, setPostalAdd] = useState('');
    const [permanentAddress, setPermanentAddress] = useState('');
    const [contactNo, setContactNo] = useState('');
    const [email, setEmail] = useState('');
    const [homeDistrict, setHomeDistrict] = useState('');
    const [HomeUpazila, setHomeUpazila] = useState('');
    const [presentAddress, setPresentAddress] = useState('');

    const [inputList, setInputList] = useState([{
        FromDate: "", To_Date: "", Designation: "", Organization: "",
        Organization_Type: "", Responsibilities: "", Nature_of_Job: ""
    }]);
    const [inputFieldExperience, setInputFieldExperience] = useState([{
        Name_of_organizations: "",
        Field_of_Experience: "",
        Duration: ""

    }]);

    //Academic Qualification ssc

    const [nameExamSsc, setNameExamSsc] = useState('');
    const [passingyearSsc, setPassingyearSsc] = useState('');
    const [subjectSsc, setSubjectSsc] = useState('');
    const [resultSsc, setResultSsc] = useState('');
    const [sscGpa, setSscGpa] = useState('');
    const [collageSsc, setcollageSsc] = useState('');
    const [boardSsc, setBoardSsc] = useState('');

    //Academic Qualification Hsc
    const [nameExamHsc, setNameExamHsc] = useState('');
    const [passingyearHsc, setPassingyearHsc] = useState('');
    const [subjectHsc, setSubjectHsc] = useState('');
    const [resultHsc, setResultHsc] = useState('');
    const [hscGpa, setHscGpa] = useState('');
    const [collageHsc, setCollageHsc] = useState('');
    const [boardHsc, setBoardHsc] = useState('');

    //Academic Qualification Graduate
    const [nameExamGraduate, setNameExamGraduate] = useState('');
    const [passingyearGraduate, setPassingyearGraduate] = useState('');
    const [subjectGraduate, setSubjectGraduate] = useState('');
    const [resultGraduate, setResultGraduate] = useState('');
    const [graduateGpa, setGraduateGpa] = useState('');
    const [collageGraduate, setcollageGraduate] = useState('');
    const [boardGraduate, setBoardGraduate] = useState('');
    //Academic Qualification Post Graduate	

    const [nameofExamPostGraduate, setNameofExamPostGraduate] = useState('');
    const [passingyearPostGraduate, setPassingyearPostGraduate] = useState('');
    const [subjectPostGraduate, setSubjectPostGraduate] = useState('');
    const [resultPostGraduate, setResultPostGraduate] = useState('');
    const [postGpa, setPostGpa] = useState('');
    const [collagePostGraduate, setcollagePostGraduate] = useState('');
    const [boardPostGraduate, setBoardPostGraduate] = useState('');
    const [message, setMessage] = useState(null);
    const navigate = useNavigate()

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
   useEffect(()=>{
    $(document).ready( function () {
        $('#myTable').DataTable();
    } );
   },[])
    async function heandleSubmit(e) {
        e.preventDefault()

        const formData = new FormData();
        formData.append("name", name);
        formData.append("father", father);
        formData.append(" mother", mother);
        formData.append("freedomFighter", freedomFighter);
        formData.append("brithday", brithday);
        formData.append("age", age);
        formData.append("nid", nid);
        formData.append("heigt", heigt);
        formData.append("weight", weight);
        formData.append("postalAdd", postalAdd);
        formData.append("permanentAddress", permanentAddress);
        formData.append("contactNo", contactNo);
        formData.append("email", email);
        formData.append("homeDistrict", homeDistrict);
        formData.append("HomeUpazila", HomeUpazila);
        formData.append("presentAddress", presentAddress);
        formData.append("nameExamSsc", nameExamSsc);
        formData.append("passingyearSsc", passingyearSsc);
        formData.append("subjectSsc", subjectSsc);
        formData.append("resultSsc", resultSsc);
        formData.append("sscGpa", sscGpa);
        formData.append("collageSsc", collageSsc);
        formData.append("boardSsc", boardSsc);
        formData.append("nameExamHsc", nameExamHsc);
        formData.append("passingyearHsc", passingyearHsc);
        formData.append("subjectHsc", subjectHsc);
        formData.append("resultHsc", resultHsc);
        formData.append("hscGpa", hscGpa);
        formData.append("collageHsc", collageHsc);
        formData.append("boardHsc", boardHsc);
        formData.append("passingyearGraduate", passingyearGraduate);
        formData.append("subjectGraduate", subjectGraduate);
        formData.append("resultGraduate", resultGraduate);
        formData.append("graduateGpa", graduateGpa);
        formData.append("collageGraduate", collageGraduate);
        formData.append("boardGraduate", boardGraduate);
        formData.append("nameExamGraduate", nameExamGraduate);
        // formData.append("passingyearPostGraduate", passingyearPostGraduate);
        // formData.append("subjectPostGraduate,", subjectPostGraduate,);
        formData.append("resultPostGraduate", resultPostGraduate);
        formData.append("postGpa", postGpa);
        formData.append("collagePostGraduate", collagePostGraduate);
        formData.append("boardPostGraduate", boardPostGraduate);
        formData.append("nameofExamPostGraduate", nameofExamPostGraduate);
        formData.append("passingyearPostGraduate", passingyearPostGraduate);
        formData.append("subjectPostGraduate", subjectPostGraduate);
        formData.append("joblistid", joblistid);

        try {
            const response = await axios({
                method: "post",
                url: "/api/applyin",
                data: formData,
                headers: { "Content-Type": "multipart/form-data" },
            });
            setMessage(response.data.message);
            navigate('/applynext');

        } catch (error) {
            console.log(error)
        }

        console.log([...formData])
    }

    return (
        <>
            <div class="mainwrap">
                <div class="form_header" itemprop="description">
                    <h2>Online Application Form</h2>
                </div>

                {message && <div class="alert alert-primary" role="alert">
                    {message}
                </div>}
                <h3 class="page_apply">Personal Information</h3>

                <table align="" cellpadding="10">

                    {/* <!----- First Name ----------------------------------------------------------> */}
                    <tr>
                        <td>NAME</td>
                        <td>
                            {/* <select >
                                <option value="Mr.">Mr.</option>
                                <option value="Mst">Mst</option>
                            </select> */}
                            <input type="text" value={name} onChange={e => setName(e.target.value)} name="First_Name" maxlength="30" class="form-control" placeholder='Enter your Full Name' />
                            {/* (max 30 characters a-z and A-Z) */}
                        </td>
                    </tr>

                    {/* <!----- Last Name ----------------------------------------------------------> */}
                    <tr>
                        <td>Father</td>
                        <td><input type="text" value={father} onChange={e => setFather(e.target.value)} class="form-control" name="father" maxlength="30" placeholder='Enter your Father Name' />
                            {/* (max 30 characters a-z and A-Z) */}
                        </td>
                    </tr>
                    <tr>
                        <td>Mother</td>
                        <td><input type="text" value={mother} onChange={e => setMother(e.target.value)} class="form-control" name="Mother" maxlength="30" placeholder='Enter your mother Name' />
                            {/* (max 30 characters a-z and A-Z) */}
                        </td>
                    </tr>
                    <tr>
                        <td>Children of Freedom Fighter</td>
                        <td>
                            <select class="form-control" value={freedomFighter} onChange={e => setFreedomFighter(e.target.value)}>
                                <option value="No">No</option>
                                <option value="yes">yes</option>
                            </select>
                        </td>
                    </tr>

                    {/* <!----- Date Of Birth --------------------------------------------------------> */}
                    <tr>
                        <td>DATE OF BIRTH</td>


                        <td><input class="form-control" value={brithday} onChange={e => setBrithday(e.target.value)} type="date" name="brithday" maxlength="30" placeholder='Enter your Brithday' />
                            {/* (max 30 characters a-z and A-Z) */}
                        </td>

                    </tr>

                    {/* <!----- Email Id ----------------------------------------------------------> */}
                    <tr>
                        <td>Age</td>
                        <td><input type="text" value={age} onChange={e => setAge(e.target.value)} class="form-control" name="Email_Id" maxlength="100" placeholder='Enter your Age' /></td>
                    </tr>
                    <tr>
                        <td>National ID Card Number(NID)</td>
                        <td><input type="text" value={nid} onChange={e => setNid(e.target.value)} class="form-control" name="Email_Id" maxlength="100" placeholder='Enter your NID Card Number' /></td>
                    </tr>
                    <tr>
                        <td>Height</td>
                        <td>
                            <input type="text" value={heigt} onChange={e => setHeigt(e.target.value)} class="form-control" name="feet" maxlength="100" placeholder='Enter your Hight' />
                            {/* <input type="text" name="Inch" maxlength="100" />Inch */}
                        </td>
                    </tr>
                    <tr>
                        <td>Weight</td>
                        <td>
                            <input type="text" value={weight} onChange={e => setWigth(e.target.value)} class="form-control" name="feet" maxlength="100" placeholder='Enter your weight' />
                        </td>
                    </tr>
                    {/* <!----- Address ----------------------------------------------------------> */}
                    <tr>
                        <td>Postal Address <br /><br /><br /></td>
                        <td><textarea name="Address" value={postalAdd} onChange={e => setPostalAdd(e.target.value)} class="form-control" rows="4" cols="30"></textarea></td>
                    </tr>
                    {/* <!----- Address ----------------------------------------------------------> */}
                    <tr>
                        <td>Permanent Address <br /><br /><br /></td>
                        <td><textarea name="Address" value={permanentAddress} onChange={e => setPermanentAddress(e.target.value)} class="form-control" rows="4" cols="30"></textarea></td>
                    </tr>

                    {/* <!----- Mobile Number ----------------------------------------------------------> */}
                    <tr>
                        <td>Contact No.</td>
                        <td>
                            <input type="number" value={contactNo} onChange={e => setContactNo(e.target.value)} class="form-control" name="Mobile_Number" maxlength="11" />
                            (11 digit number)
                        </td>
                    </tr>
                    <tr>
                        <td>Email Address</td>
                        <td><input type="text" value={email} onChange={e => setEmail(e.target.value)} class="form-control" name="email Address" placeholder='Enter your Email' /></td>
                    </tr>



                    {/* <!----- City ----------------------------------------------------------> */}
                    <tr>
                        <td>Home District</td>
                        <td><input type="text" value={homeDistrict} onChange={e => setHomeDistrict(e.target.value)} class="form-control" name="District" maxlength="30" />
                            (max 30 characters a-z and A-Z)
                        </td>
                    </tr>

                    {/* <!----- Pin Code ----------------------------------------------------------> */}
                    <tr>
                        <td>Home Upazila</td>
                        <td><input type="text" value={HomeUpazila} onChange={e => setHomeUpazila(e.target.value)} class="form-control" name="upazila" maxlength="6" />
                            (6 digit number)
                        </td>
                    </tr>

                    {/* <!----- State ----------------------------------------------------------> */}
                    <tr>
                        <td>Present Address</td>
                        <td><input type="text" value={presentAddress} onChange={e => setPresentAddress(e.target.value)} class="form-control" name="State" maxlength="30" />
                            (max 30 characters a-z and A-Z)
                        </td>
                    </tr>
                </table>
                <h3 class="page_apply">Academic Qualification</h3>
                <div class="container">
                    <div className='row table-responsive'>
                        <table id="example" class="acadmic_table mb-2 table " style={{whiteSpace:`word-brack`}}>
                            <tr>
                                <th>Level</th>
                                <th>Name of Examination</th>
                                <th style={{ width: `107px` }}>Passing year</th>
                                <th>Subject/Group</th>
                                <th>Result</th>
                                <th>School/Collage</th>
                                <th>Board/University</th>
                            </tr>

                            <tr>
                                <td>SSC/Equivalent</td>
                                <td>
                                    <select class="form-control" value={nameExamSsc} onChange={e => setNameExamSsc(e.target.value)}>
                                        <option>S.S.C</option>
                                        <option>Dahkil</option>
                                        <option>S.S.C Vocational</option>
                                        <option>O Level/Cambriage</option>
                                        <option>S.S.C Equivalent</option>
                                    </select>
                                </td>
                                <td>
                                    <select class="form-control" value={passingyearSsc} onChange={e => setPassingyearSsc(e.target.value)}>
                                        <option selected disabled value="">Select One</option>
                                        <option value="1967">1967</option>
                                        <option value="1968">1968</option>
                                        <option value="1969">1969</option>
                                        <option value="1970">1970</option>
                                        <option value="1971">1971</option>
                                        <option value="1972">1972</option>
                                        <option value="1973">1973</option>
                                        <option value="1974">1974</option>
                                        <option value="1975">1975</option>
                                        <option value="1976">1976</option>
                                        <option value="1977">1977</option>
                                        <option value="1978">1978</option>
                                        <option value="1979">1979</option>
                                        <option value="1980">1980</option>
                                        <option value="1981">1981</option>

                                        <option value="1982">1982</option>
                                        <option value="1983">1983</option>
                                        <option value="1984">1984</option>
                                        <option value="1985">1985</option>
                                        <option value="1986">1986</option>
                                        <option value="1987">1987</option>
                                        <option value="1988">1988</option>
                                        <option value="1989">1989</option>
                                        <option value="1990">1990</option>
                                        <option value="1991">1991</option>
                                        <option value="1992">1992</option>
                                        <option value="1993">1993</option>
                                        <option value="1994">1994</option>
                                        <option value="1995">1995</option>
                                        <option value="1996">1996</option>
                                        <option value="1997">1997</option>
                                        <option value="1998">1998</option>
                                        <option value="1999">1999</option>
                                        <option value="2000">2000</option>
                                        <option value="2001">2001</option>
                                        <option value="2002">2002</option>
                                        <option value="2003">2003</option>
                                        <option value="2004">2004</option>
                                        <option value="2005">2005</option>
                                        <option value="2006">2006</option>
                                        <option value="2007">2007</option>
                                        <option value="2008">2008</option>
                                        <option value="2009">2009</option>
                                        <option value="2010">2010</option>
                                        <option value="2011">2011</option>
                                        <option value="2012">2012</option>
                                        <option value="2013">2013</option>
                                        <option value="2014">2014</option>
                                        <option value="2015">2015</option>
                                    </select>
                                </td>
                                <td>
                                    <div class="form-group">
                                        <select value={subjectSsc} onChange={e => setSubjectSsc(e.target.value)} class="form-control">
                                            <option selected disabled value="">Select One</option>
                                            <option value="SCIENCE">Science</option>
                                            <option value="HUMANITIES">Humanities</option>
                                            <option value="BUSINESS STUDIES">Business Studies</option>
                                            <option value="OTHERS">Others</option>
                                        </select>
                                    </div>
                                </td>
                                <td>
                                    <div class="container">
                                        <div class="row">
                                            <div class="col-md-6 form-group">
                                                <select name="ssc_group" id="ssc_group" value={resultSsc} onChange={e => setResultSsc(e.target.value)} class="form-control">
                                                    <option selected disabled value="">--Select--</option>
                                                    <option value="SCIENCE">1st Division/class</option>
                                                    <option value="HUMANITIES">2nd Division/class</option>
                                                    <option value="BUSINESS STUDIES">3rd Division/class</option>
                                                </select>
                                            </div>
                                            <div class="col-md-6 form-group">
                                                {/* <div class="input-group-prepend">
                                            <div class="input-group-text">@</div>
                                        </div> */}
                                                <input type="text" value={sscGpa} onChange={e => setSscGpa(e.target.value)} class="form-control" id="inlineFormInputGroup" placeholder="GPA" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div class="form-group">
                                        <input type="text" value={collageSsc} onChange={e => setcollageSsc(e.target.value)} class="form-control" id="inlineFormInputGroup" />
                                    </div>
                                </td>
                                <td>
                                    <div class="form-group">
                                        <select value={boardSsc} onChange={e => setBoardSsc(e.target.value)} id="ssc_board" class="form-control">
                                            <option selected disabled value="">Select One</option>
                                            <option value="DHAKA">Dhaka</option>
                                            <option value="COMILLA">Comilla</option>
                                            <option value="RAJSHAHI">Rajshahi</option>
                                            <option value="JESSORE">Jessore</option>
                                            <option value="CHITTAGONG">Chittagong</option>
                                            <option value="BARISAL">Barisal</option>
                                            <option value="SYLHET">Sylhet</option>
                                            <option value="DINAJPUR">Dinajpur</option>
                                            <option value="MADRASAH">Madrasah</option>
                                            <option value="TECHNICAL">Technical</option>
                                            <option value="IGCSE">Cambridge International - IGCSE</option>
                                            <option value="EDEXCEL INTERNATIONAL">Edexcel International</option>
                                            <option value="OTHERS">Others</option>
                                        </select>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td>HSC/Equivalent</td>
                                <td>
                                    <select name="hsc_exam_type" value={nameExamHsc} onChange={e => setNameExamHsc(e.target.value)} id="hsc_exam_type" class="form-control">
                                        <option selected disabled value="">Select One</option>
                                        <option value="HSC">H.S.C</option>
                                        <option value="ALIM">Alim</option>
                                        <option value="BUSINESS MANAGEMENT">Business Management</option>
                                        <option value="DIPLOMA IN ENGINEERING/AGRICULTURE">Diploma in Engineering/Agriculture</option>
                                        <option value="A LEVEL/SR. CAMBRIDGE">A Level/Sr. Cambridge</option>
                                        <option value="HSC EQUIVALENT">H.S.C Equivalent</option>
                                    </select>
                                </td>
                                <td>
                                    <select class="form-control" value={passingyearHsc} onChange={e => setPassingyearHsc(e.target.value)}>
                                        <option selected disabled value="">Select One</option>
                                        <option value="1967">1967</option>
                                        <option value="1968">1968</option>
                                        <option value="1969">1969</option>
                                        <option value="1970">1970</option>
                                        <option value="1971">1971</option>
                                        <option value="1972">1972</option>
                                        <option value="1973">1973</option>
                                        <option value="1974">1974</option>
                                        <option value="1975">1975</option>
                                        <option value="1976">1976</option>
                                        <option value="1977">1977</option>
                                        <option value="1978">1978</option>
                                        <option value="1979">1979</option>
                                        <option value="1980">1980</option>
                                        <option value="1981">1981</option>
                                        <option value="1982">1982</option>
                                        <option value="1983">1983</option>
                                        <option value="1984">1984</option>
                                        <option value="1985">1985</option>
                                        <option value="1986">1986</option>
                                        <option value="1987">1987</option>
                                        <option value="1988">1988</option>
                                        <option value="1989">1989</option>
                                        <option value="1990">1990</option>
                                        <option value="1991">1991</option>
                                        <option value="1992">1992</option>
                                        <option value="1993">1993</option>
                                        <option value="1994">1994</option>
                                        <option value="1995">1995</option>
                                        <option value="1996">1996</option>
                                        <option value="1997">1997</option>
                                        <option value="1998">1998</option>
                                        <option value="1999">1999</option>
                                        <option value="2000">2000</option>
                                        <option value="2001">2001</option>
                                        <option value="2002">2002</option>
                                        <option value="2003">2003</option>
                                        <option value="2004">2004</option>
                                        <option value="2005">2005</option>
                                        <option value="2006">2006</option>
                                        <option value="2007">2007</option>
                                        <option value="2008">2008</option>
                                        <option value="2009">2009</option>
                                        <option value="2010">2010</option>
                                        <option value="2011">2011</option>
                                        <option value="2012">2012</option>
                                        <option value="2013">2013</option>
                                        <option value="2014">2014</option>
                                        <option value="2015">2015</option>
                                    </select>
                                </td>
                                <td>
                                    <div class="form-group">
                                        <select name="ssc_group" value={subjectHsc} onChange={e => setSubjectHsc(e.target.value)} id="ssc_group" class="form-control">
                                            <option selected disabled value="">Select One</option>
                                            <option value="SCIENCE">Science</option>
                                            <option value="HUMANITIES">Humanities</option>
                                            <option value="BUSINESS STUDIES">Business Studies</option>
                                            <option value="OTHERS">Others</option>
                                        </select>
                                    </div>
                                </td>
                                <td>
                                    <div class="container">
                                        <div class="row">
                                            <div class="col-md-6 form-group">
                                                <select value={resultHsc} onChange={e => setResultHsc(e.target.value)} id="ssc_group" class="form-control">
                                                    <option selected disabled value="">--Select--</option>
                                                    <option value="SCIENCE">1st Division/class</option>
                                                    <option value="HUMANITIES">2nd Division/class</option>
                                                    <option value="BUSINESS STUDIES">3rd Division/class</option>
                                                </select>
                                            </div>
                                            <div class="col-md-6 form-group">
                                                {/* <div class="input-group-prepend">
                                            <div class="input-group-text">@</div>
                                        </div> */}
                                                <input type="text" value={hscGpa} onChange={e => setHscGpa(e.target.value)} class="form-control" id="inlineFormInputGroup" placeholder="GPA/CGPA" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div class="form-group">
                                        <input type="text" value={collageHsc} onChange={e => setCollageHsc(e.target.value)} class="form-control" id="inlineFormInputGroup" />
                                    </div>
                                </td>
                                <td>
                                    <div class="form-group">
                                        <select name="ssc_board" value={boardHsc} onChange={e => setBoardHsc(e.target.value)} id="ssc_board" class="form-control">
                                            <option selected disabled value="">Select One</option>
                                            <option value="DHAKA">Dhaka</option>
                                            <option value="COMILLA">Comilla</option>
                                            <option value="RAJSHAHI">Rajshahi</option>
                                            <option value="JESSORE">Jessore</option>
                                            <option value="CHITTAGONG">Chittagong</option>
                                            <option value="BARISAL">Barisal</option>
                                            <option value="SYLHET">Sylhet</option>
                                            <option value="DINAJPUR">Dinajpur</option>
                                            <option value="MADRASAH">Madrasah</option>
                                            <option value="TECHNICAL">Technical</option>
                                            <option value="IGCSE">Cambridge International - IGCSE</option>
                                            <option value="EDEXCEL INTERNATIONAL">Edexcel International</option>
                                            <option value="OTHERS">Others</option>
                                        </select>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td>Graduate</td>
                                <td>
                                    <select name="grad_exam_type" value={nameExamGraduate} onChange={e => setNameExamGraduate(e.target.value)} id="grad_exam_type" class="form-control">
                                        <option value="" selected disabled>Select One</option>
                                        <option value="B.SC (ENGINEERING/ARCHITECTURE)">B.Sc (Engineering/Architecture)</option>
                                        <option value="B.SC (AGRICULTURAL SCIENCE)">B.Sc (Agricultural Science)</option>
                                        <option value="B.SC (Textile Engineering)">B.Sc (Textile Engineering)</option>
                                        <option value="HONOURS">Honours</option>
                                        <option value="OTHERS">Others</option>
                                    </select>
                                </td>
                                <td>
                                    <select class="form-control" value={passingyearGraduate} onChange={e => setPassingyearGraduate(e.target.value)}>
                                        <option selected disabled value="">Select One</option>
                                        <option value="1967">1967</option>
                                        <option value="1968">1968</option>
                                        <option value="1969">1969</option>
                                        <option value="1970">1970</option>
                                        <option value="1971">1971</option>
                                        <option value="1972">1972</option>
                                        <option value="1973">1973</option>
                                        <option value="1974">1974</option>
                                        <option value="1975">1975</option>
                                        <option value="1976">1976</option>
                                        <option value="1977">1977</option>
                                        <option value="1978">1978</option>
                                        <option value="1979">1979</option>
                                        <option value="1980">1980</option>
                                        <option value="1981">1981</option>
                                        <option value="1982">1982</option>
                                        <option value="1983">1983</option>
                                        <option value="1984">1984</option>
                                        <option value="1985">1985</option>
                                        <option value="1986">1986</option>
                                        <option value="1987">1987</option>
                                        <option value="1988">1988</option>
                                        <option value="1989">1989</option>
                                        <option value="1990">1990</option>
                                        <option value="1991">1991</option>
                                        <option value="1992">1992</option>
                                        <option value="1993">1993</option>
                                        <option value="1994">1994</option>
                                        <option value="1995">1995</option>
                                        <option value="1996">1996</option>
                                        <option value="1997">1997</option>
                                        <option value="1998">1998</option>
                                        <option value="1999">1999</option>
                                        <option value="2000">2000</option>
                                        <option value="2001">2001</option>
                                        <option value="2002">2002</option>
                                        <option value="2003">2003</option>
                                        <option value="2004">2004</option>
                                        <option value="2005">2005</option>
                                        <option value="2006">2006</option>
                                        <option value="2007">2007</option>
                                        <option value="2008">2008</option>
                                        <option value="2009">2009</option>
                                        <option value="2010">2010</option>
                                        <option value="2011">2011</option>
                                        <option value="2012">2012</option>
                                        <option value="2013">2013</option>
                                        <option value="2014">2014</option>
                                        <option value="2015">2015</option>
                                    </select>
                                </td>
                                <td>
                                    <div class="form-group">
                                        <select name="grad_subject" value={subjectGraduate} onChange={e => setSubjectGraduate(e.target.value)} id="grad_subject" class="form-control">
                                            <option value="" selected="selected">Select One</option>
                                            <option value="COMPUTER SCIENCE (CS)">Computer Science (CS)</option>
                                            <option value="COMPUTER ENGINEERING (CE)">Computer Engineering (CE)</option>
                                            <option value="COMPUTER SCIENCE AND ENGINEERING (CSE)">Computer Science and Engineering (CSE)</option>
                                            <option value="ELECTRONICS AND COMPUTER SCIENCE (ECS)">Electronics and Computer Science (ECS)</option>
                                            <option value="COMPUTER AND INFORMATION TECHNOLOGY (CIT)">Computer and Information Technology (CIT)</option>
                                            <option value="INFORMATION AND COMMUNICATION TECHNOLOGY (ICT)">Information and Communication Technology (ICT)</option>
                                            <option value="INFORMATION TECHNOLOGY (IT)">Information Technology (IT)</option>
                                            <option value="SOFTWARE ENGINEERING (SE)">Software Engineering (SE)</option>
                                            <option value="Textile Engineering">Textile Engineering</option>
                                            <option value="ELECTRICAL AND ELECTRONICS ENGINEERING (EEE)">Electrical and Electronics Engineering (EEE)</option>
                                            <option value="ELECTRONICS AND TELECOMMUNICATION ENGINEERING (ETE)">Electronics and Telecommunication Engineering (ETE)</option>
                                            <option value="ELECTRONICS AND COMMUNICATION ENGINEERING (ECE)">Electronics and Communication Engineering (ECE)</option>
                                            <option value="CIVIL ENGINEERING (CE)">Civil Engineering (CE)</option>
                                            <option value="MECHANICAL ENGINEERING (ME)">Mechanical Engineering (ME)</option>
                                            <option value="INDUSTRIAL AND PRODUCTION ENGINEERING (IPE)">Industrial and Production Engineering (IPE)</option>
                                            <option value="ARCHITECTURE">Architecture</option>
                                            <option value="MATHEMATICS">Mathematics</option>
                                            <option value="PHYSICS">Physics</option>
                                            <option value="CHEMISTRY">Chemistry</option>
                                            <option value="STATISTICS">Statistics</option>
                                            <option value="GEOLOGICAL SCIENCES">Geological Sciences</option>
                                            <option value="ENVIRONMENTAL SCIENCES">Environmental Sciences</option>
                                            <option value="PGD IN COMPUTER SCIENCE (CS)">PGD in Computer Science (CS)</option>
                                            <option value="PGD IN COMPUTER ENGINEERING (CE)">PGD in Computer Engineering (CE)</option>
                                            <option value="PGD IN COMPUTER SCIENCE AND ENGINEERING (CSE)">PGD in Computer Science and Engineering (CSE)</option>
                                            <option value="PGD IN ELECTRONICS AND COMPUTER SCIENCE (ECS)">PGD in Electronics and Computer Science (ECS)</option>
                                            <option value="PGD IN COMPUTER AND INFORMATION TECHNOLOGY (CIT)">PGD in Computer and Information Technology (CIT)</option>
                                            <option value="PGD IN INFORMATION AND COMMUNICATION TECHNOLOGY (ICT)">PGD in Information and Communication Technology (ICT)</option>
                                            <option value="PGD IN INFORMATION TECHNOLOGY (IT)">PGD in Information Technology (IT)</option>
                                            <option value="PGD IN SOFTWARE ENGINEERING (SE)">PGD in Software Engineering (SE)</option>
                                        </select>
                                    </div>
                                </td>
                                <td>
                                    <div class="container">
                                        <div class="row">
                                            <div class="col-md-6 form-group">
                                                <select name="ssc_group" value={resultGraduate} onChange={e => setResultGraduate(e.target.value)} id="ssc_group" class="form-control">
                                                    <option selected disabled value="">--Select--</option>
                                                    <option value="SCIENCE">1st Division/class</option>
                                                    <option value="HUMANITIES">2nd Division/class</option>
                                                    <option value="BUSINESS STUDIES">3rd Division/class</option>
                                                </select>
                                            </div>
                                            <div class="col-md-6 form-group">
                                                {/* <div class="input-group-prepend">
                                            <div class="input-group-text">@</div>
                                        </div> */}
                                                <input type="text" value={graduateGpa} onChange={e => setGraduateGpa(e.target.value)} class="form-control" id="inlineFormInputGroup" placeholder="GPA/CGPA" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div class="form-group">
                                        <input type="text" value={collageGraduate} onChange={e => setcollageGraduate(e.target.value)} class="form-control" id="inlineFormInputGroup" />
                                    </div>
                                </td>
                                <td>
                                    <div class="form-group">
                                        <input type="text" value={boardGraduate} onChange={e => setBoardGraduate(e.target.value)} class="form-control" id="inlineFormInputGroup" placeholder='University Name' />
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td> Post Graduate</td>
                                <td>
                                    <select name="grad_exam_type" id="grad_exam_type" class="form-control" value={nameofExamPostGraduate} onChange={e => setNameofExamPostGraduate(e.target.value)}>
                                        <option value="" selected disabled>Select One</option>
                                        <option value="B.SC (ENGINEERING/ARCHITECTURE)">B.Sc (Engineering/Architecture)</option>
                                        <option value="B.SC (AGRICULTURAL SCIENCE)">B.Sc (Agricultural Science)</option>
                                        <option value="B.SC (Textile Engineering)">B.Sc (Textile Engineering)</option>
                                        <option value="HONOURS">Honours</option>
                                        <option value="OTHERS">Others</option>
                                    </select>
                                </td>
                                <td>
                                    <select class="form-control" value={passingyearPostGraduate} onChange={e => setPassingyearPostGraduate(e.target.value)}>
                                        <option selected disabled value="">Select One</option>
                                        <option value="1967">1967</option>
                                        <option value="1968">1968</option>
                                        <option value="1969">1969</option>
                                        <option value="1970">1970</option>
                                        <option value="1971">1971</option>
                                        <option value="1972">1972</option>
                                        <option value="1973">1973</option>
                                        <option value="1974">1974</option>
                                        <option value="1975">1975</option>
                                        <option value="1976">1976</option>
                                        <option value="1977">1977</option>
                                        <option value="1978">1978</option>
                                        <option value="1979">1979</option>
                                        <option value="1980">1980</option>
                                        <option value="1981">1981</option>

                                        <option value="1982">1982</option>
                                        <option value="1983">1983</option>
                                        <option value="1984">1984</option>
                                        <option value="1985">1985</option>
                                        <option value="1986">1986</option>
                                        <option value="1987">1987</option>
                                        <option value="1988">1988</option>
                                        <option value="1989">1989</option>
                                        <option value="1990">1990</option>
                                        <option value="1991">1991</option>
                                        <option value="1992">1992</option>
                                        <option value="1993">1993</option>
                                        <option value="1994">1994</option>
                                        <option value="1995">1995</option>
                                        <option value="1996">1996</option>
                                        <option value="1997">1997</option>
                                        <option value="1998">1998</option>
                                        <option value="1999">1999</option>
                                        <option value="2000">2000</option>
                                        <option value="2001">2001</option>
                                        <option value="2002">2002</option>
                                        <option value="2003">2003</option>
                                        <option value="2004">2004</option>
                                        <option value="2005">2005</option>
                                        <option value="2006">2006</option>
                                        <option value="2007">2007</option>
                                        <option value="2008">2008</option>
                                        <option value="2009">2009</option>
                                        <option value="2010">2010</option>
                                        <option value="2011">2011</option>
                                        <option value="2012">2012</option>
                                        <option value="2013">2013</option>
                                        <option value="2014">2014</option>
                                        <option value="2015">2015</option>
                                    </select>
                                </td>
                                <td>
                                    <div class="form-group">
                                        <select name="grad_subject" value={subjectPostGraduate} onChange={e => setSubjectPostGraduate(e.target.value)} id="grad_subject" class="form-control">
                                            <option value="" selected="selected">Select One</option>
                                            <option value="COMPUTER SCIENCE (CS)">Computer Science (CS)</option>
                                            <option value="COMPUTER ENGINEERING (CE)">Computer Engineering (CE)</option>
                                            <option value="COMPUTER SCIENCE AND ENGINEERING (CSE)">Computer Science and Engineering (CSE)</option>
                                            <option value="ELECTRONICS AND COMPUTER SCIENCE (ECS)">Electronics and Computer Science (ECS)</option>
                                            <option value="COMPUTER AND INFORMATION TECHNOLOGY (CIT)">Computer and Information Technology (CIT)</option>
                                            <option value="INFORMATION AND COMMUNICATION TECHNOLOGY (ICT)">Information and Communication Technology (ICT)</option>
                                            <option value="INFORMATION TECHNOLOGY (IT)">Information Technology (IT)</option>
                                            <option value="SOFTWARE ENGINEERING (SE)">Software Engineering (SE)</option>
                                            <option value="Textile Engineering">Textile Engineering</option>
                                            <option value="ELECTRICAL AND ELECTRONICS ENGINEERING (EEE)">Electrical and Electronics Engineering (EEE)</option>
                                            <option value="ELECTRONICS AND TELECOMMUNICATION ENGINEERING (ETE)">Electronics and Telecommunication Engineering (ETE)</option>
                                            <option value="ELECTRONICS AND COMMUNICATION ENGINEERING (ECE)">Electronics and Communication Engineering (ECE)</option>
                                            <option value="CIVIL ENGINEERING (CE)">Civil Engineering (CE)</option>
                                            <option value="MECHANICAL ENGINEERING (ME)">Mechanical Engineering (ME)</option>
                                            <option value="INDUSTRIAL AND PRODUCTION ENGINEERING (IPE)">Industrial and Production Engineering (IPE)</option>
                                            <option value="ARCHITECTURE">Architecture</option>
                                            <option value="MATHEMATICS">Mathematics</option>
                                            <option value="PHYSICS">Physics</option>
                                            <option value="CHEMISTRY">Chemistry</option>
                                            <option value="STATISTICS">Statistics</option>
                                            <option value="GEOLOGICAL SCIENCES">Geological Sciences</option>
                                            <option value="ENVIRONMENTAL SCIENCES">Environmental Sciences</option>
                                            <option value="PGD IN COMPUTER SCIENCE (CS)">PGD in Computer Science (CS)</option>
                                            <option value="PGD IN COMPUTER ENGINEERING (CE)">PGD in Computer Engineering (CE)</option>
                                            <option value="PGD IN COMPUTER SCIENCE AND ENGINEERING (CSE)">PGD in Computer Science and Engineering (CSE)</option>
                                            <option value="PGD IN ELECTRONICS AND COMPUTER SCIENCE (ECS)">PGD in Electronics and Computer Science (ECS)</option>
                                            <option value="PGD IN COMPUTER AND INFORMATION TECHNOLOGY (CIT)">PGD in Computer and Information Technology (CIT)</option>
                                            <option value="PGD IN INFORMATION AND COMMUNICATION TECHNOLOGY (ICT)">PGD in Information and Communication Technology (ICT)</option>
                                            <option value="PGD IN INFORMATION TECHNOLOGY (IT)">PGD in Information Technology (IT)</option>
                                            <option value="PGD IN SOFTWARE ENGINEERING (SE)">PGD in Software Engineering (SE)</option>
                                        </select>
                                    </div>
                                </td>
                                <td>
                                    <div class="container">
                                        <div class="row">
                                            <div class="col-md-6 form-group">
                                                <select name="ssc_group" value={resultPostGraduate} onChange={e => setResultPostGraduate(e.target.value)} id="ssc_group" class="form-control">
                                                    <option selected disabled value="">--Select--</option>
                                                    <option value="SCIENCE">1st Division/class</option>
                                                    <option value="HUMANITIES">2nd Division/class</option>
                                                    <option value="BUSINESS STUDIES">3rd Division/class</option>
                                                </select>
                                            </div>
                                            <div class="col-md-6 form-group">
                                                {/* <div class="input-group-prepend">
                                            <div class="input-group-text">@</div>
                                        </div> */}
                                                <input type="text" value={postGpa} onChange={e => setPostGpa(e.target.value)} class="form-control" id="inlineFormInputGroup" placeholder="GPA/CGPA" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <input type="text" value={collagePostGraduate} onChange={e => setcollagePostGraduate(e.target.value)} class="form-control" id="inlineFormInputGroup" />
                                </td>
                                <td>
                                    <input type="text" value={boardPostGraduate} onChange={e => setBoardPostGraduate(e.target.value)} class="form-control" id="inlineFormInputGroup" placeholder='University Name' />
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>



                <button class="btn btn-primary btn-lg btn-block mb-5" onClick={heandleSubmit} style={{ float: `right` }}>Next</button>
            </div>
        </>
    )
}

export default ApplyForm