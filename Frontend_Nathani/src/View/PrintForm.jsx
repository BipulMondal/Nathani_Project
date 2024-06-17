import React from 'react'

const PrintForm = () => {
  return (
    <div class="container">
    <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12">
            <center> <img src="../NATHANI_LOGO.png" style={{width:"500px",height:"120px"}}/>  <center>
           <br/>
            <h2 style={{border: "2px solid black",marginLeft: "0px",marginRight: "34px"}}>
                <center>Financial Aid for Education from Zakat fund 2019-2020
            <br/>
            SUBJECT TO AVAILABILITY OF FUNDS</center>
            </h2>
        </center></center></div>
    </div>

    <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12">
            <h2 style={{border: "2px solid black",width: "97%"}}>
                <center>New Scholar’s Application Form</center>
            </h2>
        </div>
    </div>

    <div class="row" style={{width: "100%"}}>
        <div class="col-lg-6 col-md-6 col-sm-6" style={{borderStyle: "solid", height: "240px", float: "left", width: "50%"}}>
            <h5><b>Please send this form by POST to: (Administrative office) </b></h5>

            Nathani Heights, Ground Floor, Shop No.34, A Wing, Dr.D.B.Marg ,Opp. Mumbai Central Railway Station, Mumbai-400 008.
        <br/>
            <b>E-Mail:</b> info@nathanitrust.org <b>Website: </b>www.nathanitrust.org
        <br/>
            <b>Telephone:</b> 022-6122 6122
        <br/>
            <b>Time: 10:30 am-1.30 pm. 2:30-5:30 pm (Monday to Friday) </b>
            <br/>
            <br/>


        </div>
        <div class="col-lg-6 col-md-6 col-sm-6" style={{borderStyle: "solid", height: "240px", float: "right", width: "50%"}}>
            <h5><b>Application Form should be filled in ENGLISH Only.</b> </h5>
            <ul>
                <li>Application form should be filled in BLOCK LETTERS</li>
                <li>Applicant should write in the boxes</li>
                <li>Applicant should write neat handwriting using Ball Pen only</li>
                <li>Incomplete Form will not be considered</li>
                <li>Applicant should AFFIX his/her LATEST PHOTOGRAPH</li>
                <li>No Double Form should be filled and sent by and Applicant</li>
            </ul>
        </div>
    </div>

    <br/>
    <div class="row" style={{width: "100%"}}>
        <div class="col-lg-3 col-md-3 col-sm-3" style={{float: "left", width: "25%"}}>
            <b>Form No:<span id="txtFormNo"></span></b>
        </div>
        <div class="col-lg-3 col-md-3 col-sm-3" style={{float: "left", width: "25%"}}>
            <b>Date of Received:<span id="txtDtOfReceived"></span></b>
        </div>
        <div class="col-lg-3 col-md-3 col-sm-3" style={{float: "right", width: "25%"}}>
            <b>R/S/P/D:<span id="txtRSPD"></span> </b>
        </div>
        <div class="col-lg-3 col-md-3 col-sm-3" style={{float: "right", width: "25%"}}>
            <b>ID No:<span id="txtIDNo"></span> </b>
        </div>
    </div>

    <br/>
    <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12">
            To,
        <br/>
            <b>The Nathani Charitable Trust,</b>
            <br/>
            Mumbai.
        </div>
    </div>


    <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12">
            Respected Sir / Madam,
        <br/>
            <br/>
            I Mr / Mrs / Ms   <span id="txtFullName" style={{textDecoration:  "underline", fontWeight:"bold"}}>GLASSWALA FAIZAN AFZALL</span>  hereby apply &amp; request for financial aid for Education  <u><span id="txtEducation" style={{textDecoration:  "underline", fontWeight:"bold"}}>Graduation</span></u>  (Name of course) from your esteemed organization for my Son/Daughter/Ward/Myself.
        <br/>
            I have read the terms conditions and agree to abide by them. I solemnly affirm that the particular given in this form are true, correct &amp; complete.

        </div>
    </div>

    <br/>
    <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12">
            <b><u>Important Guidelines:</u></b>
            <br/>
            <br/>
            <ol>
                <li><b>Acceptance of the application form does not GUARANTEE AID.</b></li>
                <li>The financial aid for Education is provided from ZAKAT FUND especially for the economically backward &amp; underprivileged students from the community who seek admission in school/higher professional courses or educational institutions. (Therefore please check your eligibility before applying).</li>
                <li>This form is circulated FREE, anyone found selling, please notify us immediately on above mentioned numbers.</li>
                <li>All documents including photographs are NOT returnable irrespective of the help being sanctioned or not.</li>
                <li>Incomplete applications will not be accepted. Double form sent by applicant will be rejected.</li>
                <li>Only full time Government recognized professional course conducted by a statutory body such as University, Board, Director of Technical Education, AICTE etc. will be considered. Institutions and courses should be recognized and affiliated to establish Universities/Government.</li>
                <li>Our representative(s) will survey the authenticity of application and if any information provided is found suppressed/false or improper then application form will be rejected and application will not be accepted in future.</li>
                <li>NCT has the right to reclaim the help granted, if the information is found incorrect or false even after fund disbursement.</li>
                <li>Please note that Students falling under GENERAL category will be supported after Std. XII onwards. Only children of Widow/Divorcee/Orphan/Separated/Deserted or child of disabled deserving parent will be supported from Nursery onwards.</li>
                <li>Decision of our committee regarding acceptance or rejection of application will remain final and no correspondence or clarification will be provided.</li>
                <li>Non Zakat case will be considered based on availability of funds.</li>
                <li>The student will be given scholarship on the basis of Aptitude, Intelligence quotient (IQ), Interest, Personality test also known as psychometric test results.</li>
                <li>Please note that Aptitude, intelligence Quotient (IQ), Interest, Personality test is to guide the student for the best career options. Aptitude testing does not <b>GUARANTEE of SCHOLARSHIP</b>.</li>
                <li>Also note that this form will not be considered unless accompanied by the attested photo copy’s (Xerox copies) of the document mentioned, if the required original to be produced during field visit/interview.</li>
                <li>Applications of such students shall not be considered who intends to/are pursuing their degree courses from cities other than their hometown when such course can be pursued in their home city. They are not entitled for any help from the trust.</li>
                <li>If a scholar gives up the selected course of study before its completion, or change the course of study, is expelled from the institution on disciplinary or academic grounds, the scholarship will be cancelled.</li>
                <li>Organization believes that after the basic <b>professional (i.e. Engineering/Medical)</b> degree a person is capable of earning very decent amount. Hence he/she is not eligible to receive organization scholarship; however there are some exceptional cases where if the student is found super meritorious and found eligible through organization criteria’s such students are encouraged for further studies.</li>
            </ol>

            <br/>
            <br/>

        </div>
    </div>


    <div class="row" style={{width: "100%"}}>
        <div class="col-lg-3 col-md-3 col-sm-3" style={{float: "left", width: "5%"}}>
            Sign:
        </div>
        <div class="col-lg-3 col-md-3 col-sm-3" style={{float: "left", width: "50%"}}>
            _____________________________________
        </div>
        <div class="col-lg-3 col-md-3 col-sm-3" style={{float: "left", width: "25%"}}>
            Date:_____________________________________
        </div>
       
    </div>
    <br/>
    <br/>

    <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12">
            <b>Document Information (All Documents must be attested):</b> Please note that this form will not be considered unless accompanied by the attested Xerox copies of the following documents. <b>(√ Tick marks the attachments).</b>
            <br/>
            <br/>

            <table border="1">
                <thead>
                    <tr>
                        <th style={{width: "15px"}}>Sr.<br/>
                            No.</th>
                        <th>Student Check List</th>
                        <th style={{width: "15px"}}>Tick<br/>
                            (Student)</th>
                        <th style={{width: "15px"}}>Office<br/>
                            Use</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Duly filled &amp; signed/thumb impression application form (compulsory).</td>
                        <td><span id="StudentCheckList1">√</span></td>
                        <td></td>
                    </tr>

                    <tr>
                        <td>2</td>
                        <td>Additional two passport size recent photographs of the student with the name written behind it.</td>
                        <td><span id="StudentCheckList2">√</span></td>
                        <td></td>
                    </tr>

                    <tr>
                        <td>3</td>
                        <td>Attested copies of past three annual examination mark sheet/result copies for school level and for college level SSC and HSC (compulsory for new student).</td>
                        <td><span id="StudentCheckList3">√</span></td>
                        <td></td>
                    </tr>

                    <tr>
                        <td>4</td>
                        <td>Proof of address first &amp; last page of Ration card or Telephone bill or Voting Identity card or Leave &amp; License agreement or Rent receipt/Bill or Aadhaar card.</td>
                        <td><span id="StudentCheckList4">√</span></td>
                        <td></td>
                    </tr>

                    <tr>
                        <td>5</td>
                        <td>Latest Electricity bill.</td>
                        <td><span id="StudentCheckList5">√</span></td>
                        <td></td>
                    </tr>

                    <tr>
                        <td>6</td>
                        <td>Divorce certificate/Divorce deed in case of divorcee, Death certificate of husband in case of widow is compulsory.
                            <br/>
                            Medical certificate if husband medically ill e.g. dialysis, heart problem, paralysis, cancer or any other threatening diseases.
                        </td>
                        <td><span id="StudentCheckList6">√</span></td>
                        <td></td>
                    </tr>

                    <tr>
                        <td>7</td>
                        <td>Proof of Income - Salary certificate or Govt. approved Income certificate or Pay Slip or Certificate from family doctor or Local medical social worker (MSW) or Medical officers of primary health centre (PHC) or Community health centre (CHC) regarding the family income (Compulsory-applicable according to their nature of work).</td>
                        <td><span id="StudentCheckList7">√</span></td>
                        <td></td>
                    </tr>

                    <tr>
                        <td>8</td>
                        <td>Letter from School/College/Institute with break-up of fees (in original).</td>
                        <td><span id="StudentCheckList8">√</span></td>
                        <td></td>
                    </tr>

                    <tr>
                        <td>9</td>
                        <td>Proof of admission/Selection in course for which scholarship is applied for/Bonafied certificates.</td>
                        <td><span id="StudentCheckList9">√</span></td>
                        <td></td>
                    </tr>

                    <tr>
                        <td>10</td>
                        <td>Copies of certificates of academic, co-curricular &amp; extracurricular activities.</td>
                        <td><span id="StudentCheckList10">√</span></td>
                        <td></td>
                    </tr>

                    <tr>
                        <td>11</td>
                        <td>Copy of bank pass book – First page (name, bank a/c no. &amp; address details).</td>
                        <td><span id="StudentCheckList11">√</span></td>
                        <td></td>
                    </tr>


                </tbody>
            </table>


        </div>
    </div>

    <br/>
    <br/>
    <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12" style={{pageBreakBefore: "always"}}>
            <p>Basic Information :</p>
        </div>
    </div>


    <div class="row" style={{width: "100%"}}>
        <div class="col-lg-9 col-md-9 col-sm-9" style={{float: "left", width: "70%"}}>
            <div class="row" style={{width: "100%"}}>
                <div class="col-lg-3 col-md-3 col-sm-3" style={{float: "left", width:"30%"}}>Surname:</div>
                <div class="col-lg-9 col-md-9 col-sm-9" style={{float: "right", width:"70%"}}><span id="txtSurname">Glasswala</span></div>
            </div>
            <div class="row" style={{width: "100%"}}>
                <div class="col-lg-3 col-md-3 col-sm-3" style={{float: "left", width:"30%"}}>Name:</div>
                <div class="col-lg-9 col-md-9 col-sm-9" style={{float: "right", width:"70%"}}><span id="txtName">Faizan</span></div>
            </div>
            <div class="row" style={{width: "100%"}}>
                <div class="col-lg-3 col-md-3 col-sm-3" style={{float: "left", width:"30%"}}>Father's Name:</div>
                <div class="col-lg-9 col-md-9 col-sm-9" style={{float: "right", width:"70%"}}><span id="txtFatherName">Afzall</span></div>
            </div>
            <div class="row" style={{width: "100%"}}>
                <div class="col-lg-3 col-md-3 col-sm-3" style={{float: "left", width:"30%"}}>Expired:</div>
                <div class="col-lg-9 col-md-9 col-sm-9" style={{float: "right", width:"70%"}}><span id="txtFatherExpired">-</span></div>
            </div>
            <div class="row" style={{width: "100%"}}>
                <div class="col-lg-3 col-md-3 col-sm-3" style={{float: "left", width:"30%"}}>Mother's Name:</div>
                <div class="col-lg-9 col-md-9 col-sm-9" style={{float: "right", width:"70%"}}><span id="txtMotherName">Shabana</span></div>
            </div>
            <div class="row" style={{width: "100%"}}>
                <div class="col-lg-3 col-md-3 col-sm-3" style={{float: "left", width:"30%"}}>Expired:</div>
                <div class="col-lg-9 col-md-9 col-sm-9" style={{float: "right", width:"70%"}}><span id="txtMotherExpired">-</span></div>
            </div>
            <div class="row" style={{width: "100%"}}>
                <div class="col-lg-3 col-md-3 col-sm-3" style={{float: "left", width:"30%"}}>Husband's Name:</div>
                <div class="col-lg-9 col-md-9 col-sm-9" style={{float: "right", width:"70%"}}><span id="txtHusbandName"></span></div>
            </div>
            <div class="row" style={{width: "100%"}}>
                <div class="col-lg-3 col-md-3 col-sm-3" style={{float: "left", width:"30%"}}>Aadhar No:</div>
                <div class="col-lg-3 col-md-3 col-sm-3" style={{float: "left", width: "70%"}}><span id="txtAadhar">9891 8505 7419</span></div>
                </div>
             <div class="row" style={{width: "100%"}}>
                <div class="col-lg-3 col-md-3 col-sm-3" style={{float: "left", width:"30%"}}>Case Ref by::</div>
                <div class="col-lg-3 col-md-3 col-sm-3" style={{float: "right", width:"70%"}}><span id="txtCaseRefBy">Ahsaan Ghadawala As</span></div>
            </div>
        </div>
        <div class="col-lg-3 col-md-3 col-sm-3" style={{float: "left", width:"30%"}}>
            <img id="myimg" style={{width:"110px",height:"130px"}} src="../admission/applicantImg/202026_photo.jpg"/></div>

    </div>

    <br/>
    <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12">
            <p>Information : </p>
        </div>
    </div>


    <div class="row" style={{width: "100%"}}>
        <div class="row col-lg-12 col-md-12 col-sm-12" style={{width: "100%"}}>
            <div class="col-lg-3 col-md-3 col-sm-3" style={{float: "left", width:"20%"}}>Parent Status:</div>
            <div class="col-lg-9 col-md-9 col-sm-9" style={{float: "left", width:"35%"}}><span id="txtParentStatus">-</span></div>
        </div>

        <div class="row col-lg-12 col-md-12 col-sm-12" style={{width: "100%"}}>
            <div class="col-lg-3 col-md-3 col-sm-3" style={{float: "left", width:"20%"}}>Student Gender:</div>
            <div class="col-lg-3 col-md-3 col-sm-3" style={{float: "left", width:"35%"}}><span id="txtGender">Male</span></div>
            <div class="col-lg-3 col-md-3 col-sm-3" style={{float: "left", width:"15%"}}>Date Of Birth:</div>
            <div class="col-lg-3 col-md-3 col-sm-3" style={{float: "right", width:"30%"}}><span id="txtDOB">01-Jan-2001</span></div>
        </div>
        <div class="row col-lg-12 col-md-12 col-sm-12" style={{width: "100%"}}>
            <div class="col-lg-3 col-md-3 col-sm-3" style={{float: "left", width:"20%"}}>City Of Birth:</div>
            <div class="col-lg-3 col-md-3 col-sm-3" style={{float: "left", width:"35%"}}><span id="txtCityOfBirth">Thane</span></div>
            <div class="col-lg-3 col-md-3 col-sm-3" style={{float: "left", width:"15%"}}>Category:</div>
            <div class="col-lg-3 col-md-3 col-sm-3" style={{float: "right", width:"30%"}}><span id="txtCategory">Memon</span></div>
        </div>
        <br/>
        <div class="row col-lg-12 col-md-12 col-sm-12" style={{width: "100%"}}>
            <div class="col-lg-3 col-md-3 col-sm-3" style={{float: "left", width:"20%"}}>Application For:</div>
            <div class="col-lg-9 col-md-9 col-sm-9" style={{float: "left", width:"35%"}}><span id="txtApplicationFor">Zakat Fund</span></div>
        </div>
        <div class="row col-lg-12 col-md-12 col-sm-12" style={{width: "100%"}}>
            <div class="col-lg-3 col-md-3 col-sm-3" style={{float: "left", width:"20%"}}>Any of the parent disable/ill</div>
            <div class="col-lg-9 col-md-9 col-sm-9" style={{float: "left", width:"35%"}}><span id="txtIsParentDisable">-</span></div>
        </div>
        <div class="row col-lg-12 col-md-12 col-sm-12" style={{width: "100%"}}>
            <div class="col-lg-3 col-md-3 col-sm-3" style={{float: "left", width:"20%"}}>Name &amp; Relation:</div>
            <div class="col-lg-3 col-md-3 col-sm-3" style={{float: "left", width:"35%"}}><span id="txtDisabilityNameAndRelation">-</span></div>
            <div class="col-lg-3 col-md-3 col-sm-3" style={{float: "left", width:"15%"}}>Nature of disability/illness:</div>
            <div class="col-lg-3 col-md-3 col-sm-3" style={{float: "right", width:"30%"}}><span id="txtNatureOfDisability">-</span></div>
        </div>

    </div>
    <br/>
    <br/>

    <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12">
            <p>Contact Information: </p>
        </div>
    </div>

    <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12">
            Permanent Address: 
        </div>
    </div>

    <div class="row" style={{width: "100%"}}>
        <div class="col-lg-2 col-md-2 col-sm-2" style={{float: "left", width:"15%"}}>
            Permanent Address:
        </div>
        <div class="col-lg-9 col-md-9 col-sm-9" style={{float: "left", width: "65%"}}>
            <span id="txtPermanentAddressA">C 1301, Shree Heena Avenue, Naya Nagar, Mira Road East, Thane</span>
        </div>
    </div>


    <div class="row" style={{width: "100%"}}>
        <div class=" col-sm-1" style={{float: "left", width:"15%"}}>
            State:
        </div>
        <div class=" col-sm-2" style={{float: "left", width: "12%"}}>
            <span id="txtStateA">Maharashtra</span>
        </div>

        <div class=" col-sm-1" style={{float: "left", width: "12%"}}>
            District:
        </div>
        <div class="col-sm-2" style={{float: "left", width: "12%"}}>
            <span id="txtDistrictA">Thane</span>
        </div>

        <div class=" col-sm-1" style={{float: "left", width: "12%"}}>
            City:
        </div>
        <div class=" col-sm-2" style={{float: "left", width:"12%"}}>
            <span id="txtCityA">Thane</span>
        </div>

        <div class=" col-sm-1" style={{float: "left", width:"12%"}}>
            Pincode:
        </div>
        <div class="col-sm-2" style={{float: "right", width:"12%"}}>
            <span id="txtPincodeA">401107</span>
        </div>

    </div>

    <div class="row" style={{width: "12%"}}>
        <div class="col-lg-3 col-md-3 col-sm-3" style={{float: "left", width:"15%"}}>Mobile</div>
        <div class="col-lg-3 col-md-3 col-sm-3" style={{float: "left", width: "25%"}}><span id="txtMobileA">9874563211</span></div>
        <div class="col-lg-3 col-md-3 col-sm-3" style={{float: "left", width: "25%"}}>Email Address</div>
        <div class="col-lg-3 col-md-3 col-sm-3" style={{float: "right", width: "25%"}}><span id="txtEmailAddressA"></span></div>
    </div>

    <div class="row" style={{width: "100%"}}>
        <div class="col-lg-1 col-md-1 col-sm-1" style={{float: "left", width:"15%"}}>
            Father's Name
        </div>
        <div class="col-lg-2 col-md-2 col-sm-2" style={{float: "left", width:"12%"}}>
            <span id="txtFatherNameA">Afzall</span>
        </div>

        <div class="col-lg-1 col-md-1 col-sm-1" style={{float: "left", width:"12%"}}>
            Contact Number:
        </div>
        <div class="col-lg-2 col-md-2 col-sm-2" style={{float: "left", width:"12%"}}>
            <span id="txtFatherMobileA">9321295495</span>
        </div>

        <div class="col-lg-1 col-md-1 col-sm-1" style={{float: "left", width:"12%"}}>
            Mother's Name
        </div>
        <div class="col-lg-2 col-md-2 col-sm-2" style={{float: "left", width:"12%"}}>
            <span id="txtMotherNameA">Shabana</span>
        </div>

        <div class="col-lg-1 col-md-1 col-sm-1" style={{float: "left", width:"12%"}}>
            Pincode:
        </div>
        <div class="col-lg-2 col-md-2 col-sm-2" style={{float: "right", width: "13%"}}>
            <span id="txtMotherMobileA"></span>
        </div>

    </div>
<br/>
    <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12">
            Student Contact Address (If student is staying at any other location not mentioned.)
        </div>
    </div>


    <div class="row" style={{width: "100%"}}>
        <div class="col-lg-2 col-md-2 col-sm-2" style={{float: "left", width:"15%"}}>
            Address:
        </div>
        <div class="col-lg-10 col-md-10 col-sm-10" style={{float: "left", width: "65%"}}>
            <span id="txtPermanentAddressB"></span>
        </div>
    </div>


    <div class="row" style={{width: "100%"}}>
        <div class="col-lg-1 col-md-1 col-sm-1" style={{float: "left", width:"15%"}}>
            State:
        </div>
        <div class="col-lg-2 col-md-2 col-sm-2" style={{float: "left", width:"12%"}}>
            <span id="txtStateB"></span>
        </div>

        <div class="col-lg-1 col-md-1 col-sm-1" style={{float: "left", width:"12%"}}>
            District:
        </div>
        <div class="col-lg-2 col-md-2 col-sm-2" style={{float: "left", width:"12%"}}>
            <span id="txtDistrictB"></span>
        </div>

        <div class="col-lg-1 col-md-1 col-sm-1" style={{float: "left", width:"12%"}}>
            City:
        </div>
        <div class="col-lg-2 col-md-2 col-sm-2" style={{float: "left", width:"12%"}}>
            <span id="txtCityB"></span>
        </div>

        <div class="col-lg-1 col-md-1 col-sm-1" style={{float: "left", width:"12%"}}>
            Pincode:
        </div>
        <div class="col-lg-2 col-md-2 col-sm-2" style={{float: "right", width: "12%"}}>
            <span id="txtPincodeB"></span>
        </div>

    </div>

    <div class="row" style={{width: "100%"}}>
        <div class="col-lg-3 col-md-3 col-sm-3" style={{float: "left", width:"15%"}}>Mobile</div>
        <div class="col-lg-3 col-md-3 col-sm-3" style={{float: "left", width: "25%"}}><span id="txtMobileB"></span></div>
        <div class="col-lg-3 col-md-3 col-sm-3" style={{float: "left", width: "25%"}}>Email Address</div>
        <div class="col-lg-3 col-md-3 col-sm-3" style={{float: "right", width: "25%"}}><span id="txtEmailAddressB"></span></div>
    </div>

    <div class="row" style={{width: "100%"}}>
        <div class="col-lg-1 col-md-1 col-sm-1" style={{float: "left", width:"15%"}}>
            Father's Name
        </div>
        <div class="col-lg-2 col-md-2 col-sm-2" style={{float: "left", width:"12%"}}>
            <span id="txtFatherNameB">Afzall</span>
        </div>

        <div class="col-lg-1 col-md-1 col-sm-1" style={{float: "left", width:"12%"}}>
            Contact Number:
        </div>
        <div class="col-lg-2 col-md-2 col-sm-2" style={{float: "left", width:"12%"}}>
            <span id="txtFatherMobileB">9321295495</span>
        </div>

        <div class="col-lg-1 col-md-1 col-sm-1" style={{float: "left", width:"12%"}}>
            Mother's Name
        </div>
        <div class="col-lg-2 col-md-2 col-sm-2" style={{float: "left", width:"12%"}}>
            <span id="txtMotherNameB">Shabana</span>
        </div>

        <div class="col-lg-1 col-md-1 col-sm-1" style={{float: "left", width:"12%"}}>
            Pincode:
        </div>
        <div class="col-lg-2 col-md-2 col-sm-2" style={{float: "right", width: "12%"}}>
            <span id="txtMotherMobileB"></span>
        </div>

    </div>
    <br/><br/>

    <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12">
            <p>Family Information : (To include all members living together as one economic unit where the applicant is staying) </p>
        </div>
    </div>
    <br/>

    <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12">
            <table border="1">
                <thead>
                    <tr>
                        <th>Sr No</th>
                        <th>Name</th>
                        <th>Relation with student</th>
                        <th>Age</th>
                        <th>Education</th>
                        <th>Marital Status</th>
                        <th>Occupation/ Studying in</th>
                        <th>Name &amp; Address of the employer/education</th>
                        <th>Monthly Income/ Fees</th>
                        <th>Any other Occupation</th>
                        <th>Name &amp; Address of the Employer</th>
                        <th>Total Monthly Income/ Fees</th>
                        <th>Remarks</th>
                    </tr>
                </thead>
                <tbody id="tblFamilyInformation"><tr>
                    <td>1</td>
                    <td>Afzal</td>
                    <td>Father</td>
                    <td>52</td>
                    <td>10</td>
                    <td>Married</td>
                    <td>Hawker</td>
                    <td>10</td>
                    <td>5000.00</td>
                    <td>10</td>
                    <td>10</td>
                    <td>5000.00</td>
                    <td>10</td>
                    </tr><tr>
                    <td>2</td>
                    <td>Shabana</td>
                    <td>Mother</td>
                    <td>49</td>
                    <td>Illetrate</td>
                    <td>Married</td>
                    <td>Others</td>
                    <td>Illetrate</td>
                    <td>0.00</td>
                    <td>Illetrate</td>
                    <td>Illetrate</td>
                    <td>0.00</td>
                    <td>Illetrate</td>
                    </tr><tr>
                    <td>3</td>
                    <td>Ifrah</td>
                    <td>Sister</td>
                    <td>16</td>
                    <td>10</td>
                    <td>Unmarried</td>
                    <td>Student</td>
                    <td>10</td>
                    <td>1200.00</td>
                    <td>10</td>
                    <td>10</td>
                    <td>1200.00</td>
                    <td>10</td>
                    </tr><tr>
                    <td>4</td>
                    <td>Zayaan</td>
                    <td>Brother</td>
                    <td>18</td>
                    <td>12</td>
                    <td>Married</td>
                    <td>Student</td>
                    <td>12</td>
                    <td>10000.00</td>
                    <td>12</td>
                    <td>12</td>
                    <td>10000.00</td>
                    <td>12</td>
                    </tr></tbody>
            </table>
        </div>
    </div>

    <br/><br/>
    <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12">
            <p>Memon Jamat Information / Local Representative : (Compulsory with Jamat Stamp)</p>
        </div>
    </div>

    <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12">
            <p>If Memon  </p>
        </div>
    </div>

    <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12">
            Belonging Jamat of father: <span id="txtJamatFather">Halai Memon Jamat</span>
        </div>
    </div>

    <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12">
            Full name of your Memon Jamat/Local Representative: <span id="txtJamatName">Halai Memon Jamat</span>
        </div>
    </div>

    <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12">
            Address: <span id="txtJamatAddress">334/338, Abdul Rehman Street, Lohar Chawl, Kalbade</span>
        </div>
    </div>


    <div class="row" style={{width: "100%"}}>
        <div class="col-lg-4 col-md-4 col-sm-4" style={{float: "left", width:"30%"}}>
            City: <span id="txtJamatCity">Mumbai</span>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-4" style={{float: "left", width:"30%"}}>
            District: <span id="txtJamatDistrict">Mumbai</span>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-4" style={{float: "right", width: "40%"}}>
            Jamat Stamp:
        </div>
    </div>

    <div class="row" style={{width: "12%"}}>
        <div class="col-lg-3 col-md-3 col-sm-3" style={{float: "left", width: "25%"}}>
            Name of President:
        </div>
        <div class="col-lg-3 col-md-3 col-sm-3" style={{float: "left", width: "25%"}}>
            <span id="txtJamatPresident">ABC</span>
        </div>
        <div class="col-lg-3 col-md-3 col-sm-3" style={{float: "left", width: "25%"}}>
            Name of Secretary:
        </div>
        <div class="col-lg-3 col-md-3 col-sm-3" style={{float: "right", width: "25%"}}>
            <span id="txtJamatSecretary">ABC</span>
        </div>
    </div>


    <div class="row" style={{width: "100%"}}>
        <div class="col-lg-3 col-md-3 col-sm-3" style={{float: "left", width: "25%"}}>Phone with STD code</div>
        <div class="col-lg-3 col-md-3 col-sm-3" style={{float: "left", width: "25%"}}><span id="txtJamatMobile">7878787878</span></div>
        <div class="col-lg-3 col-md-3 col-sm-3" style={{float: "left", width: "25%"}}>Email Address</div>
        <div class="col-lg-3 col-md-3 col-sm-3" style={{float: "right", width: "25%"}}><span id="txtJamatEmailAddress"></span></div>
    </div>

    <br/>
    <div class="row" style={{width: "100%"}}>
        <div class="col-lg-10 col-md-10 col-sm-10">
            Declaration: We have completely scrutinized and take the responsibility of the details of the candidate applying for the scholarship.
        </div>
        <div class="col-lg-2 col-md-2 col-sm-2">Signature:______________________</div>
    </div>

      <br/>
    <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12">
            Received any monetary help form Jamat?
        </div>
    </div>


    <div class="row" style={{width: "100%"}}>
        <div class="col-lg-4 col-md-4 col-sm-4" style={{float: "left", width:"30%"}}>
            Amount Received: <span id="txtJamatAmount"></span>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-4" style={{float: "left", width:"30%"}}>
            Amount Type: <span id="txtJamatType">NA</span>
        </div>
        <div class="col-lg-4 col-md-4 col-sm-4" style={{float: "right", width: "40%"}}>
            Purpose: <span id="txtJamatPurpose"></span>
        </div>
    </div>

    <br/>
   
    <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12">
            <p>Deenyat Course : </p>
        </div>
    </div>


    <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12">
            Have you attended any basic course of deenyat: <span id="txtDeenyat">No</span>
        </div>
    </div>


    <div class="row" style={{width: "100%"}}>
        <div class="col-lg-3 col-md-3 col-sm-3" style={{float: "left", width: "25%"}}>Course Name:</div>
        <div class="col-lg-3 col-md-3 col-sm-3" style={{float: "left", width: "25%"}}><span id="txtDeenyatCourse"></span></div>
        <div class="col-lg-3 col-md-3 col-sm-3" style={{float: "left", width: "25%"}}>Madrassa Details:</div>
        <div class="col-lg-3 col-md-3 col-sm-3" style={{float: "right", width: "25%"}}><span id="txtDeenyatMadrasa"></span></div>
    </div>


    <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12">
            Any other course Please Specify: <span id="txtDeenyatOther"></span>
        </div>
    </div>
    <br/>

    <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12">
            <p>Academic Information : </p>
        </div>
    </div>

    <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12">
            (Please mentioned details of educational qualification from past 3 years including entrance exams (such as MHCET, Gujarat CAT) if applicable (Details of SSC &amp; HSC is compulsory only for professional course.)
        </div>
    </div>
    <br/>
    <div class="row">
        <table border="1">
            <thead>
                <tr>
                    <th>Std/ Course</th>
                    <th>Name of The School/ Institution</th>
                    <th>Name of the Board/ University</th>
                    <th>Medium</th>
                    <th>Month &amp; Year of Passing</th>
                    <th>Percentage Marks</th>
                    <th>Division/Class/Grade</th>
                    <th>PCB (%)</th>
                    <th>PCM (%)</th>
                    <th>CET (%)</th>
                </tr>
            </thead>
            <tbody id="tblAcademicInformation"><tr>
                  
                    <td>11</td>
                    <td>Asmita College Of Arts And Commerce</td>
                    <td>Maharashtra State Board</td>
                    <td>English</td>
                    <td>May-2021</td>
                    <td>60</td>
                    <td>B</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    
                    </tr><tr>
                  
                    <td>10</td>
                    <td>Benager English High School</td>
                    <td>Maharashtra State Board</td>
                    <td>English</td>
                    <td>Jun-2021</td>
                    <td>66.60</td>
                    <td>A</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    
                    </tr><tr>
                  
                    <td>9</td>
                    <td>Benager English High School</td>
                    <td>Maharashtra State Board</td>
                    <td>English</td>
                    <td>May-2019</td>
                    <td>60.01</td>
                    <td>A</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    
                    </tr></tbody>
        </table>
    </div>
    <br/>
    <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12">
            Extracurricular activates: <span id="txtExtracurricular">- - -</span>
        </div>
    </div>

  
    <br/>
    <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12">
            <p>Current School/ College/ Institute Details :</p>
        </div>
    </div>
    <div class="row" style={{width: "100%"}}>
        <div class="col-lg-12 col-md-12 col-sm-12">
            Currently studying in Std. /Level of course:&nbsp;&nbsp; <span id="txtCurrentstudying">Graduation</span>
            <br/>
            Degree: &nbsp;<span id="txtCurrentDegree">17</span>&nbsp; Duration of the course: <span id="txtCurrentDuration">4 year</span>
            <br/>
            Medium of Instruction: &nbsp; <span id="txtMediumInstruction">English</span>
            <br/>
            Pattern of the course semester/annual: &nbsp;<span id="txtPatternSemester">Semester</span>
            <br/>
            Name of the School/Institutions: &nbsp; <span id="txtNameSchoolInst">Asmita College Of Mumbai</span>
            <br/>
            Name of the Board/University: &nbsp;<span id="txtNameBoardUni">Maharashtra</span>
            Govt.
            <input type="checkbox" id="chkGovt"/>&nbsp;
            Private
            <input type="checkbox" id="chkPrivate" checked="checked"/>&nbsp;
            Semi Govt.
            <input type="checkbox" id="chkSemiGovt"/>&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp; if private, Aided
            <input type="checkbox" id="chkAided"/>&nbsp;
            Unaided
            <input type="checkbox" id="chkUnaided" checked="checked"/>
            by Govt. 
            <br/>
            Accreditation/Rating of institution (applicable only for std. XIIth onwards):<span id="txtRatingofInstitution">---</span>
            <br/>
            Address:<span id="txtCurrentSchoolAddress">Mumbai, Maharashtra</span>
            <br/>
            City:&nbsp;<span id="txtCurrentSchoolCity">Mumbai</span>&nbsp;&nbsp;State:&nbsp;<span id="txtCurrentSchoolState">Maharashtra</span>&nbsp;&nbsp;
            Country:<span id="txtCurrentSchoolCountry">India</span>&nbsp;&nbsp;<br/>
            Contact no:<span id="txtCurrentSchoolContact">022 78945678</span>&nbsp;&nbsp; Email Id:<span id="txtCurrentSchoolEmail">asmita123@gmail.com</span>&nbsp;&nbsp;
            Website:<span id="txtCurrentSchoolWebsite"></span>
            <br/>
        </div>
    </div>
    <br/>
    <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12">
            <p>Fees Information :</p>
        </div>
    </div>

    <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12">
            Exempted from Term &amp; Annual Fees? Yes/No ________________ 
            <br/>
<br/>
            <table border="1">
                <thead>
                    <tr>
                        <th>Sr. No.</th>
                        <th>Particulars of Fees</th>
                        <th>Amount (in ₹)</th>
                        <th>Other Expenses “C”</th>
                        <th>Amount (in ₹)</th>

                    </tr>
                </thead>
                <tbody id="tblFeesInformation"></tbody>
                <tbody><tr>
                    <td>A.</td>
                    <td>Term Fees</td>
                    <td id="Termfees">0.00</td>
                    <td>Hostel fees</td>
                    <td id="Hostelfees">0.00</td>
                </tr>
                <tr>
                    <td></td>
                    <td>School/College/Tuition fees</td>
                    <td id="Schoolfees">25000.00</td>
                    <td>Mess fees</td>
                    <td id="Mess fees">12</td>
                </tr>
                <tr>
                    <td></td>
                    <td>School/College Other fees</td>
                    <td id="OtherFees">10.00</td>
                    <td>Conveyance</td>
                    <td id="Conveyancefees">0.00</td>
                </tr>
                <tr>
                    <td></td>
                    <td>Total fees</td>
                    <td id="Totalfees">25010.00</td>
                    <td>Books &amp; Stationery</td>
                    <td id="BooksStationery">0.00</td>
                </tr>
                <tr>
                    <td>B.</td>
                    <td>Tuition/Coaching Classes fees</td>
                    <td id="ClassesFees">0.00</td>
                    <td>Project &amp; Instrument</td>
                    <td id="ProjectInstrument">0.00</td>
                </tr>
                <tr>
                    <td></td>
                    <td><b>Total Fees (A+B+C)</b></td>
                    <td id="TotalFeesabc">25010.00</td>
                    <td>Any other </td>
                    <td id="Anyother">0.00</td>
                </tr>
                <tr>
                    <td></td>
                    <td><b>Own Contribution </b></td>
                    <td id="OwnContribution">0.00</td>
                    <td><b>Total Expenses </b></td>
                    <td id="TotalExpenses">0</td>
                </tr>
                <tr>
                    <td></td>
                    <td colspan="4"><b>Note:</b> Hostel &amp; Mess fees will be provided only for special category cases on case to case basis. Education aid is subject to decision of committee members.</td>

                </tr>

            </tbody></table>

        </div>
    </div>
    <br/>
    <br/>
    <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12">
            <p>Details of Other Trust Support :</p>
        </div>
    </div>
    <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12">
            <table border="1">
                <thead>
                    <tr>
                        <th>Sr. No.</th>
                        <th>Name &amp; Address of the Trust</th>
                        <th>Amount Received Current Year</th>
                        <th>Amount Received Last Year</th>


                    </tr>
                </thead>
                <tbody id="tblOtherTrustSupport"><tr>
                  <td> 1</td>
                    <td>Abd</td>
                    <td>10.00</td>
                    <td>10.00</td>
                   
                    </tr>
                    <tr>
                    <td> 2</td>
                    <td>Test</td>
                    <td>9.00</td>
                    <td>0.00</td>
                   
                    </tr>
                    <tr>
                    <td> 3</td>
                    <td></td>
                    <td>0.00</td>
                    <td>0.00</td>
                   
                    </tr></tbody>
                <tbody><tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody></table>
        </div>
    </div>
    <br/><br/>
    <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12">
            <p>Government Scholarship :</p>
        </div>
    </div>

    <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12">
            <h5 style={{border: "2px solid black"}}><b>
                <br/>
                Are you eligible for Govt. Scholarship : Yes/No &nbsp;&nbsp;<u><span id="GovtSchl">No</span></u>&nbsp;&nbsp;If Yes, did you apply for scholarship Last year, Yes/No <u><span id="schlrLastyr">---</span></u>
                <br/>

                Amount Received: <u><span id="amtReceived"></span></u>Year: <u><span id="amtReceivedYear"></span></u>Name of the Govt. Scholarship: <u><span id="GovtScholarName"></span></u>
                <br/>
                User Id:<u><span id="SchalrUserId"></span></u>  Password: <u><span id="Schalrpasswd"></span></u>
                <br/>

                </b>
            </h5>
        </div>
    </div>
    <br/>
    <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12">
            <p>Organisations’ Information :</p>
        </div>
    </div>

    <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12">
            Have you ever received fees from our organization? Yes/No <span id="organizationfees"></span>If Yes,
       <br/>
            
             <table border="1">
            <thead>
                <tr>
                    <th>Id No..</th>
                    <th>Course</th>
                    <th>Applied for Scholarship</th>
                    <th>Amount Received</th>
                    <th>Year in which amount received</th>
                    <th>By Cheque/DD/Cash</th>


                </tr>
            </thead>
            <tbody id="tblOrganInfo"></tbody>
        </table>
        </div>
    </div>

    <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12">
            <p>Organisations’ support to family members :</p>
        </div>
    </div>

    <br/>
    <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12">
            Support receiving / received by your siblings in past / current from organisation Yes/No If Yes <span id="organizationSupport">Yes</span>If Yes,
        <br/>
            <table border="1">
            <thead>
                <tr>
                    <th>Sr. No.</th>
                    <th>Name of the Brother/Sister</th>
                    <th>ID. No.</th>
                    <th>Course</th>
                    <th>Amount Received</th>
                    <th>Financial Year</th>
                    <th>Last how many years have they been receiving support</th>


                </tr>
            </thead>
            <tbody id="tblorganizationSupport"><tr>
                    <td>1 </td>
                    <td>Tareeq</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>2018-19</td>
                    <td>2</td>

                    </tr><tr>
                    <td>2 </td>
                    <td>Kaitlin Hayes</td>
                    <td>Exercitation velit</td>
                    <td>Aubrey Price</td>
                    <td>0.00</td>
                    <td>2017-18</td>
                    <td>Expedita voluptatibu</td>

                    </tr></tbody>
        </table>
            <br/>

            You/your family members have received help from Organisation under any other scheme other than education support:
Yes/No <span id="educationSupport"></span>  &nbsp;&nbsp;If Yes?        
            <br/>
         <table border="1">
             <thead>
                 <tr>
                     <th>Sr. No.</th>
                     <th>Name of the family member</th>
                     <th>ID. No.</th>
                     <th>Scheme</th>
                     <th>Amount Received</th>
                     <th>Financial Year</th>


                 </tr>
             </thead>
             <tbody id="tblEduSupp"></tbody>
         </table>

            <h5 style={{border: "2px solid black"}}>
                <b>
                <br/>
                Do you have bank account? Yes / No &nbsp; <span id="BankAccount"></span>
                <br/>
                Name as appearing in passbook (all in capital letter): &nbsp;<span id="PassbookName"></span>
                <br/>
                A/C no: <span id="accNum"></span> &nbsp;&nbsp;Bank name: <span id="bankName"></span>Branch: <span id="bankBranch"></span>
                <br/>
                    </b>
                (Note: If student doesn’t have a bank A/C please write down guardian/parent bank A/C details, photocopy of first page of Passbook (name, bank a/c no &amp; address details to be attached.)
           <br/>


            </h5>

        </div>
    </div>
    <br/>
    <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12">
            <div>
                <center> <h4> Declaration of Parents/Guardian/Student</h4></center>
                
                <center> <h5>(Form will not be considered in absence of declaration of Parents/Guardian for the minor student)</h5> </center>
            </div>
            <h4 class="parLastStep">Dear Sir/Madam,
                <br/>
                Assalamu-Alaikum,      
                <br/>
                <br/>
                I/We hereby solemnly affirm that the details mentioned in this form are true to the best of my/our knowledge. I/We am/are responsible for the authenticity of the details and the documents provided along with this form. If any information contained in my application form is found false or improper, your organization has full right to take disciplinary/legal action against me/us. 
                <br/>
                <br/>
                I/We hereby declare that I/We will ensure that I/my ward will complete the <span id="couiseApplied"></span>course for which we have applied for scholarship.
                <br/>
                <br/>
                I/We realize that this assistance is provided to me/for my child from Zakat/Non-Zakat Fund and I/we have not taken any surplus loan or aid from any other Organization/Trust/Jamat for the same purpose without informing organisation.
                <br/>
                <br/>
                I also declare that I/we will not pay the fees in emergency without written approval from organization &amp; if paid, organization will not be responsible. 
                <br/>
                <br/>
                I also declare that the given funds will be exclusively only for education purpose or any other purpose specified in the application only.
                <br/>
                <br/>
                I also give permission to your institute to collect Zakat for fees of my Son/Daughter/Ward/Myself on Our/My behalf.
                <br/>
                <br/>

            </h4>

            <br/>
            Name of applicant <span id="lstNameApplicant"></span>
            <br/><br/>
            Signature:____________________ <span id="lstSignature"></span>
            <br/>
            Name of Parent/Guardian: <span id="lstParentGuardian"></span>
            <br/><br/>
            Signature:____________________ <span id="lstGuardianSignature"></span>
            <br/> <br/>
            Date: <span id="lstDate"></span>
            <br/>
            Place: <span id="lstPlace"></span>
            <br/>
        </div>
    </div>
</div>
  )
}

export default PrintForm
