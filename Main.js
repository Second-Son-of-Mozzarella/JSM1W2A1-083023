$(function () {

    $('.agreeChxBtn').on('click', function () {

        $('#Preread').fadeOut(500, function () {
            $('#jobAppForm').fadeIn(500);
        })
    });


    $('#addJob').on('click', function () {

        $('#jobSelections').append(

            `
            <br>


            <div class="jobSelectOpt">

            <h5> Job Choice <h5>
            
            <select class="form-select mb-3 stateSelect " aria-label="job Select">

                                <option selected="selected">Job Select</option>
                                <option>Dining Room Server Assistant*** </option>
                                <option>Employee Dining Room Crew*** </option>
                                <option>Fast Food Crew*** </option>
                                <option>Kitchen Crew*** </option>
                                <option>Laundry Help*** </option>
                                <option>Room Attendant*** </option>
                                <option>Activities Sales Agent </option>
                                <option>Administrative Assistant Maintenance </option>
                                <option>Asst. HR Manager </option>
                                <option>Audit Clerk </option>
                                <option>Bar Lead </option>
                                <option>Barista </option>
                                <option>Bartender </option>
                                <option>Bell Porter </option>
                                <option>Boiler Technician (D.L.) </option>
                                <option>Bus Driver/Guide (D.L.) </option>
                                <option>Bus Service Person (D.L.) </option>
                                <option>Cafeteria Management </option>
                                <option>Camper Services Attendants </option>
                                <option>Campground Attendant (D.L.) </option>
                                <option>Campground Management </option>
                                <option>Carpenter (D.L.) </option>
                                <option>Carpet Cleaning Technician (D.L.) </option>
                                <option>Chef </option>
                                <option>Cocktail Server </option>
                                <option>Cook </option>
                                <option>Cookout Entertainer </option>
                                <option>Dining Room Host </option>
                                <option>Dining Room Host Lead </option>
                                <option>Dining Room Management </option>
                                <option>Dining Room Server </option>
                                <option>Distribution Center Associate </option>
                                <option>Distribution Center Truck Driver (D.L.) </option>
                                <option>Distribution Lead </option>
                                <option>Dock Help (D.L.) </option>
                                <option>Dorm Custodian </option>
                                <option>Electrician (D.L.) </option>
                                <option>Employee Dining Room Management </option>
                                <option>Employee Pub Crew/Lead </option>
                                <option>Fast Food Management </option>
                                <option>Finish Floor Supervisor </option>
                                <option>Fire Systems Technician (D.L.) </option>
                                <option>Floor Cleaning Technician (D.L.) </option>
                                <option>Food and Beverage Management </option>
                                <option>Food and Beverage Office Assistant </option>
                                <option>Front Office Management </option>
                                <option>Furniture Mover (D.L.) </option>
                                <option>General Accounting Office </option>
                                <option>General Maintenance (D.L.) </option>
                                <option>Guest Services Agent </option>
                                <option>Guest Services Agent (Campground) </option>
                                <option>Heavy Equipment Operator (D.L.) </option>
                                <option>Housekeeping Management </option>
                                <option>Housekeeping Room Inspector </option>
                                <option>Housekeeping Trainer </option>
                                <option>Housekeeping Office Assistant </option>
                                <option>Housing Manager </option>
                                <option>Internship </option>
                                <option>Kitchen Technician (D.L.) </option>
                                <option>Laundry Technician (D.L.) </option>
                                <option>Laundry Truck Driver (D.L.) </option>
                                <option>Linen Truck Driver  (D.L.) </option>
                                <option>Location Controller/Assistant </option>
                                <option>Locksmith (D.L.) </option>
                                <option>Marina Fishing Guide (D.L.) </option>
                                <option>Marina Manager (D.L.) </option>
                                <option>Night Auditor </option>
                                <option>Night Guest Services Agent </option>
                                <option>Painter (D.L.) </option>
                                <option>Pantry Supervisor </option>
                                <option>Personnel Management </option>
                                <option>Pianist </option>
                                <option>Plumber (D.L.) </option>
                                <option>Porter </option>
                                <option>Preservation Maintenance Crew Craftsperson </option>
                                <option>Recreation Coordinator (D.L.) </option>
                                <option>Recreation Supervisor (D.L.) </option>
                                <option>Recycling Technician (D.L.) </option>
                                <option>Reservations Sales Agent </option>
                                <option>Residence Coordinator </option>
                                <option>Retail Management </option>
                                <option>Retail Sales Associate </option>
                                <option>R&amp;M Staff Assistant </option>
                                <option>Scenic Cruise Operator (D.L.) </option>
                                <option>Seamstress </option>
                                <option>Security Guard And Location Safety (D.L.) </option>
                                <option>Senior Guest Services Agent (Campground) </option>
                                <option>Snack Shop / Deli Supervisor </option>
                                <option>Sous Chef </option>
                                <option>Steward </option>
                                <option>Storekeeper </option>
                                <option>Tour Guide (D.L.) </option>
                                <option>Touring Car Driver- Interpretive Guide Non CDL (D.L.) </option>
                                <option>Traveling Night Auditor </option>
                                <option>Vending Clerk </option>
                                <option>Vending Driver (D.L.) </option>
                                <option>Vending Service Technician </option>
                                <option>Warehouse Manager </option>
                                <option>Warehouse Help </option>
                                <option>Warehouse Driver (OFI) </option>
                                <option>Wash Deck Supervisor </option>
                                <option>Wash Deck Lead </option>
                                <option>Wrangler/Driver </option>

            </select>
            <div class="form-check seasonalChx">
                    


            <input value="Seasonal" name="Position_Type" checked="checked"  type="radio">
                    Seasonal Position <br>
            <input value="Year Round" name="Position_Type" type="radio">
                        Year Round Position <br>
                        <br>


            </div>


            <button type="button" class="btn btn-danger btn-sm jobRmvBtn" id="jobRmvBtn">Remove</button>


            </div>

            

            
            
            `
        )

    });


    $('#addWork').on('click', function () {

        $('#workSelections').append(

            ` 

            <div class="WorkOpt">
            
            
            <div class="form-floating mb-3">
                    <input type="text" class="form-control" id="empNameInput" placeholder="work"  required>
                    <label for="empNameInput">Employer</label>
            </div>

            <div class="row mb-3">
            <div class="col-xs-12 col-lg-8">

                <div class="form-floating">
                    <input type="text" class="form-control" id="AdressInput"
                        placeholder="123 Main St" required>
                    <label for="AdressInput">Mailing Address</label>
                </div>

            </div>
            <div class="col-xs-12 col-lg-4">

                <div class="form-floating">
                    <input type="text" class="form-control" id="AdressInput2" placeholder="apt 2">
                    <label for="AdressInput">Mailing Address line 2</label>
                </div>

            </div>

            </div>
            
            <div class="row mb-3">
            <div class="col-xs-12 col-lg-7">

                <div class="form-floating">
                    <input type="text" class="form-control" id="cityEduInput"
                        placeholder="" required>
                    <label for="cityEduInput">City</label>
                </div>

            </div>
            <div class="col-xs-12 col-lg-1">

            <select class="form-select mb-3 stateEduSelect" aria-label="State Select">
            <option selected>State</option>
            <option>AL </option>
            <option>AK </option>
            <option>AZ </option>
            <option>AR </option>
            <option>CA </option>
            <option>CO </option>
            <option>CT </option>
            <option>DE </option>
            <option>DC </option>
            <option>FL </option>
            <option>GA </option>
            <option>HI </option>
            <option>ID </option>
            <option>IL </option>
            <option>IN </option>
            <option>IA </option>
            <option>KS </option>
            <option>KY </option>
            <option>LA </option>
            <option>ME </option>
            <option>MD </option>
            <option>MA </option>
            <option>MI </option>
            <option>MN </option>
            <option>MS </option>
            <option>MO </option>
            <option>MT </option>
            <option>NE </option>
            <option>NV </option>
            <option>NH </option>
            <option>NJ </option>
            <option>NM </option>
            <option>NY </option>
            <option>NC </option>
            <option>ND </option>
            <option>OH </option>
            <option>OK </option>
            <option>OR </option>
            <option>PA </option>
            <option>PR </option>
            <option>RI </option>
            <option>SC </option>
            <option>SD </option>
            <option>TN </option>
            <option>TX </option>
            <option>UT </option>
            <option>VT </option>
            <option>VA </option>
            <option>WA </option>
            <option>WV </option>
            <option>WI </option>
            <option>WY </option>
        </select>
            </div>
            <div class="col-xs-12 col-lg-4">

                <div class="form-floating">
                    <input type="text" class="form-control" id="ZipEduInput" placeholder="">
                    <label for="ZipEduInput">Zip Code</label>
                </div>

            </div>

            </div>

                            <select class="form-select mb-3 stateSelect " aria-label="Country Select">

                                <option selected="selected" value="">Country</option>
                                <option value="US">United States </option>
                                <option value="AE">United Arab Emirates </option>
                                <option value="AF">Afghanistan </option>
                                <option value="AG">Antigua and Barbuda </option>
                                <option value="AL">Albania </option>
                                <option value="AM">Armenia </option>
                                <option value="AM">Zambia </option>
                                <option value="AN">Netherland Antilles </option>
                                <option value="AQ">Antarctica </option>
                                <option value="AR">Argentina </option>
                                <option value="AS">American Samoa </option>
                                <option value="AT">Austria </option>
                                <option value="AU">Australia </option>
                                <option value="AW">Aruba </option>
                                <option value="AZ">Azerbaidjan </option>
                                <option value="BA">Bosnia-Herzegovina </option>
                                <option value="BB">Barbados </option>
                                <option value="BD">Bangladesh </option>
                                <option value="BE">Belgium </option>
                                <option value="BG">Bulgaria </option>
                                <option value="BH">Bahrain </option>
                                <option value="BM">Bermuda </option>
                                <option value="BO">Bolivia </option>
                                <option value="BR">Brazil </option>
                                <option value="BS">Bahamas </option>
                                <option value="BW">Botswana </option>
                                <option value="BY">Belarus </option>
                                <option value="BZ">Belize </option>
                                <option value="CA">Canada </option>
                                <option value="CG">Congo </option>
                                <option value="CH">Switzerland </option>
                                <option value="CL">Chile </option>
                                <option value="CM">Cameroon </option>
                                <option value="CN">China </option>
                                <option value="CO">Columbia </option>
                                <option value="CR">Costa Rica </option>
                                <option value="CS">Former Czechoslovakia </option>
                                <option value="CZ">Czech Republic </option>
                                <option value="DE">Germany </option>
                                <option value="DK">Denmark </option>
                                <option value="DM">Dominica </option>
                                <option value="DO">Dominican Republic </option>
                                <option value="DZ">Algeria </option>
                                <option value="EC">Ecuador </option>
                                <option value="EE">Estonia </option>
                                <option value="EG">Egypt </option>
                                <option value="ES">Spain </option>
                                <option value="ET">Ethiopia </option>
                                <option value="FI">Finland </option>
                                <option value="FJ">Fiji </option>
                                <option value="FK">Falkland Islands </option>
                                <option value="FR">France </option>
                                <option value="GB">Great Britain </option>
                                <option value="GD">Grenada </option>
                                <option value="GE">Georgia </option>
                                <option value="GF">French Guyana </option>
                                <option value="GH">Ghana </option>
                                <option value="GL">Greenland </option>
                                <option value="GN">Guinea </option>
                                <option value="GR">Greece </option>
                                <option value="GT">Guatamala </option>
                                <option value="GU">Guam (USA) </option>
                                <option value="GY">Guyana </option>
                                <option value="HK">Hong Kong </option>
                                <option value="HN">Honduras </option>
                                <option value="HR">Croatia </option>
                                <option value="HT">Haiti </option>
                                <option value="HU">Hungary </option>
                                <option value="ID">Indonesia </option>
                                <option value="IE">Ireland </option>
                                <option value="IL">Israel </option>
                                <option value="IN">India </option>
                                <option value="IQ">Iraq </option>
                                <option value="IR">Iran </option>
                                <option value="IS">Iceland </option>
                                <option value="IT">Italy </option>
                                <option value="JM">Jamaica </option>
                                <option value="JO">Jordan </option>
                                <option value="JP">Japan </option>
                                <option value="KE">Kenya </option>
                                <option value="KP">North Korea </option>
                                <option value="KR">South Korea </option>
                                <option value="KW">Kuwait </option>
                                <option value="KY">Cayman Islands </option>
                                <option value="KZ">Kazakhstan </option>
                                <option value="LA">Laos </option>
                                <option value="LB">Lebanon </option>
                                <option value="LC">St. Lucia </option>
                                <option value="LI">Liechtenstein </option>
                                <option value="LK">Sri Lanka </option>
                                <option value="LR">Liberia </option>
                                <option value="LT">Lithuania </option>
                                <option value="LU">Luxembourg </option>
                                <option value="LV">Latvia </option>
                                <option value="LY">Libya </option>
                                <option value="MA">Morocco </option>
                                <option value="MC">Monaco </option>
                                <option value="MD">Moldavia </option>
                                <option value="MG">Madagascar </option>
                                <option value="YU">Macedonia </option>
                                <option value="MN">Mongolia </option>
                                <option value="MQ">Martinique (French) </option>
                                <option value="MS">Montserrat </option>
                                <option value="MT">Malta </option>
                                <option value="MX">Mexico </option>
                                <option value="MY">Malaysia </option>
                                <option value="MZ">Mozambique </option>
                                <option value="NA">Namibia </option>
                                <option value="NG">Nigeria </option>
                                <option value="NI">Nicaragua </option>
                                <option value="NL">Netherlands </option>
                                <option value="NO">Norway </option>
                                <option value="NP">Nepal </option>
                                <option value="NZ">New Zealand </option>
                                <option value="PA">Panama </option>
                                <option value="PE">Peru </option>
                                <option value="PH">Phillipines </option>
                                <option value="PK">Pakistan </option>
                                <option value="PL">Poland </option>
                                <option value="PR">Puerto Rico </option>
                                <option value="PT">Portugal </option>
                                <option value="PY">Paraguay </option>
                                <option value="QA">Qatar </option>
                                <option value="RO">Romania </option>
                                <option value="RU">Russian Federation </option>
                                <option value="RW">Rwanda </option>
                                <option value="SA">Saudi Arabia </option>
                                <option value="RS">Serbia </option>
                                <option value="YU">Serbia and Montenegro </option>
                                <option value="SD">Sudan </option>
                                <option value="SE">Sweden </option>
                                <option value="SG">Singapore </option>
                                <option value="SI">Slovenia </option>
                                <option value="SK">Slovak Republic </option>
                                <option value="SN">Senegal </option>
                                <option value="SO">Somalia </option>
                                <option value="SR">Suriname </option>
                                <option value="SV">El Salvador </option>
                                <option value="SY">Syria </option>
                                <option value="SZ">Swaziland </option>
                                <option value="TC">Turks and Caicos Islands </option>
                                <option value="TD">Chad </option>
                                <option value="TH">Thailand </option>
                                <option value="TJ">Tadjikistan </option>
                                <option value="TM">Turkmenistan </option>
                                <option value="TN">Tunisia </option>
                                <option value="TR">Turkey </option>
                                <option value="TT">Trinidad and Tabago </option>
                                <option value="TW">Taiwan </option>
                                <option value="TZ">Tanzania </option>
                                <option value="UA">Ukraine </option>
                                <option value="UG">Uganda </option>
                                <option value="GB">United Kingdom </option>
                                <option value="UY">Uruguay </option>
                                <option value="UZ">Uzbekistan </option>
                                <option value="VA">Vatican City </option>
                                <option value="VC">St. Vincent &amp; Grenadines </option>
                                <option value="VE">Venezuala </option>
                                <option value="VG">Virgin Islands (British) </option>
                                <option value="VI">Virgin Islands (USA) </option>
                                <option value="VN">Vietnam </option>
                                <option value="WS">Samoa </option>
                                <option value="YE">Yemen </option>
                                <option value="ZA">South Africa </option>
                                <option value="ZR">Zaire </option>
                                <option value="ZW">Zimbabwe </option>

                            </select>



                            <div class="form-floating mb-3 mt-1">
                                <input type="tel" class="form-control" id="PhoneInput" placeholder="+1 (234) 567-8910">
                                <label for="phoneInput">Primary Phone</label>
                            </div>


                            <div class="row">
                                <div class="col-xs-12 col-lg-6">

                                    <div class="form-floating mb-3">
                                        <input type="date" class="form-control" id="startDateInput" placeholder="mm/dd/yyyy"
                                            required>
                                        <label for="startDateInput">Start Date</label>
                                    </div>

                                </div>
                                <div class="col-xs-12 col-lg-6">

                                    <div class="form-floating mb-3">
                                        <input type="date" class="form-control" id="LNameInput" placeholder="mm/dd/yyyy"
                                            required>
                                        <label for="LNameInput">End Date</label>
                                    </div>


                                </div>
                            </div>



            <button type="button" class="btn btn-danger btn-sm jobRmvBtn" id="jobRmvBtn">Remove</button>


            </div>

            
            `

        )

    });

    $('#addEdu').on('click', function () {

        $('#EDUSelections').append(

            `
            <div class="eduOpt"> 

                <div class="form-floating mb-3 mt-1">
                                    <input type="text" class="form-control" id="schoolName" placeholder="school Name">
                                    <label for="schoolName">School Name</label>
                </div>


                        <div class="row mb-3">
                    <div class="col-xs-12 col-lg-8">

                        <div class="form-floating">
                            <input type="text" class="form-control" id="AdressInput"
                                placeholder="123 Main St" required>
                            <label for="AdressInput">Mailing Address</label>
                        </div>

                    </div>
                    <div class="col-xs-12 col-lg-4">

                        <div class="form-floating">
                            <input type="text" class="form-control" id="AdressInput2" placeholder="apt 2">
                            <label for="AdressInput">Mailing Address line 2</label>
                        </div>

                    </div>

                    </div>



                    <div class="row mb-3">
                    <div class="col-xs-12 col-lg-7">

                        <div class="form-floating">
                            <input type="text" class="form-control" id="cityEduInput"
                                placeholder="" required>
                            <label for="cityEduInput">City</label>
                        </div>

                    </div>
                    <div class="col-xs-12 col-lg-1">

                    <select class="form-select mb-3 stateEduSelect" aria-label="State Select">
                    <option selected>State</option>
                    <option>AL </option>
                    <option>AK </option>
                    <option>AZ </option>
                    <option>AR </option>
                    <option>CA </option>
                    <option>CO </option>
                    <option>CT </option>
                    <option>DE </option>
                    <option>DC </option>
                    <option>FL </option>
                    <option>GA </option>
                    <option>HI </option>
                    <option>ID </option>
                    <option>IL </option>
                    <option>IN </option>
                    <option>IA </option>
                    <option>KS </option>
                    <option>KY </option>
                    <option>LA </option>
                    <option>ME </option>
                    <option>MD </option>
                    <option>MA </option>
                    <option>MI </option>
                    <option>MN </option>
                    <option>MS </option>
                    <option>MO </option>
                    <option>MT </option>
                    <option>NE </option>
                    <option>NV </option>
                    <option>NH </option>
                    <option>NJ </option>
                    <option>NM </option>
                    <option>NY </option>
                    <option>NC </option>
                    <option>ND </option>
                    <option>OH </option>
                    <option>OK </option>
                    <option>OR </option>
                    <option>PA </option>
                    <option>PR </option>
                    <option>RI </option>
                    <option>SC </option>
                    <option>SD </option>
                    <option>TN </option>
                    <option>TX </option>
                    <option>UT </option>
                    <option>VT </option>
                    <option>VA </option>
                    <option>WA </option>
                    <option>WV </option>
                    <option>WI </option>
                    <option>WY </option>
                </select>
                    </div>
                    <div class="col-xs-12 col-lg-4">

                        <div class="form-floating">
                            <input type="text" class="form-control" id="ZipEduInput" placeholder="">
                            <label for="ZipEduInput">Zip Code</label>
                        </div>

                    </div>

                    </div>


                    <div class="form-floating">
                            <input type="text" class="form-control" id="schoolDegreeRcv" placeholder="">
                            <label for="schoolDegreeRcv">Degree Recived</label>
                        </div>



                        <div class="form-floating mt-3">
                            <input type="text" class="form-control" id="fieldStudy" placeholder="">
                            <label for="fieldStudy">Field of Study</label>
                        </div>



                        <div class="form-check mt-3">
                            <input class="form-check-input" type="checkbox" value="" id="gradChx">
                            <label class="form-check-label" for="gradChx">
                                Did you graduate?
                            </label>
                        </div>


                        <button type="button" class="btn btn-danger btn-sm EduRmvBtn mt-3" id="EduRmvBtn">Remove</button>




            </div>
            

            
            `

        );


    });




    $('#jobRmvBtn').on('click', function (e) {

        $(this).closest('.jobSelectOpt').remove();


        console.log(this);



    });



    $('#clearBtn').on('click', function() {

        $('form').get(0).reset()

    });

});

