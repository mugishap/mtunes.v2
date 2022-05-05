/* eslint-disable no-unused-vars */
import { React, useState } from 'react'
import Login from './Login'

import { checkForAccess } from './check.js'
function Signup() {
  const [signup, setSignup] = useState(true)
  const handleChangeForm = e => {
    setSignup(false)
  }
  const [name, setName] = useState("")
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [country, setCountry] = useState("")
  const [password, setPassword] = useState("")
  const [image, setImage] = useState('')
  const [profile, setProfile] = useState(false)
  const [loader, setLoader] = useState(false)

  function previewFile() {
    // const src = document.querySelector('.profile-pic').getAttribute('src')
    const preview = document.querySelector('.profile-pic');
    const file = document.querySelector('input[type=file]').files[0];
    const reader = new FileReader();

    reader.addEventListener("load", function () {
      // convert image file to base64 string
      preview.src = reader.result;
      console.log(reader.result);
      setImage(reader.result)
      setProfile(true)
    }, false);

    if (file) {
      reader.readAsDataURL(file);
    }
  }

  const logUserIn = async (data) => {
    const api = await fetch('https://mtunes-backend.herokuapp.com/user/login', {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: (data.email),
        password: (data.password)
      })
    })
    const res = await api.json()
    console.log(res);
    if (res.message === "Allowed to continue") {
      checkForAccess()
    }
    else {
      window.alert("Error in creating your account")
    }

  }

  if ((name === '') || (username === '') || (country === '') || (email === '') || (password === '')) {
    const errorDiv = document.createElement('div')
    const errorText = document.createTextNode("All required fields must be filled")
    errorDiv.appendChild(errorText)
    loader ? 
    document.querySelector('.name-div').append(errorDiv)
    :
    console.log()
  }

  const handleFormSubmit = async e => {
    e.preventDefault()
    setLoader(true)
    // console.log(name, username, email, country, password);

    console.log(image);
    if (image === "") {
      setImage('')
      console.log('No profile selected');
    }
    const api = await fetch('https://mtunes-backend.herokuapp.com/user/newAccount', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      // mode: 'no-cors',
      body: JSON.stringify({
        name: (name),
        username: (username),
        email: (email),
        country: (country),
        password: (password),
        imageStr: (image)
      })
    })
    const data = await api.json()
    // console.log(data);
    if (data.message === "Account created") {
      logUserIn(data.user)
    }
    else {
      const errorDiv = document.createElement('div')
      const errorText = document.createTextNode("User with that username or email already exists")
      errorDiv.appendChild(errorText)
      document.querySelector('.username-div').append(errorDiv)
      errorDiv.classList.add = 'text-xs'
      setTimeout(() => {
        errorDiv.style.display = 'none'
      }, 2000)
      // window.alert("A user with that email or username already exists. Try changing it")
      setLoader(false)
    }
  }
  setTimeout(() => {
    if (loader === true) {
      setLoader(false)
    }
  }, 10000)
  return (
    <>
      {signup ?

        <div className=" form h-screen w-full flex flex-col items-center">
          <div className='m-auto w-1/3 flex flex-col shadow-2xl p-4 items-center'>
            <div className="inNav ml-2 mb-3 logo w-full flex flex-col items-center justify-center">
              <img src={require('./../images/logo1.png')} className='w-15' alt="" />
              <div className='font-bold text-lg overflow-hidden'>Sign up to mTunes</div>
            </div>
            <form className="portrait:block overflow-hidden text-m p-2 w-full h-4/5 items-center justify-center flex flex-col">
              <div className="name-div flex m-1 flex-row items-center justify-center w-full">
                {/* <label className='w-1/3 h-6 flex justify-left'>Name:</label> */}
                <input required={true} placeholder='Full Name' onChange={(e) => { setName(e.target.value) }} type="text" className='name rounded  bg-gray-200 p-1 w-11/12 h-8' />
              </div>
              <div className="username-div flex flex-col items-center justify-center w-full m-1">
                {/* <label className='w-1/3 h-6 flex justify-left'>Username:</label> */}
                <input required placeholder='Username' onChange={(e) => { setUsername(e.target.value) }} type="text" className='username username-input rounded  bg-gray-200 p-1 w-11/12 h-8' />
              </div>
              <div className="email-div flex flex-row items-center justify-center w-full m-1">
                {/* <label className='w-1/3 h-6 flex justify-left'>Email:</label> */}
                <input required placeholder='Email' onChange={(e) => { setEmail(e.target.value) }} type="email" className='email rounded  bg-gray-200 p-1 w-11/12 h-8' />
              </div>
              <div className=" country-div flex flex-row items-center justify-center w-full m-1">
                {/* <label className='w-1/3 h-6 flex justify-left'>Country:</label> */}
                <select required id="country" name="country" className='flex items-center justify-center w-11/12' onChange={(e) => { setCountry(e.target.value) }}>
                  <option value="">Select country</option>
                  <option value="Afganistan">Afghanistan</option>
                  <option value="Albania">Albania</option>
                  <option value="Algeria">Algeria</option>
                  <option value="American Samoa">American Samoa</option>
                  <option value="Andorra">Andorra</option>
                  <option value="Angola">Angola</option>
                  <option value="Anguilla">Anguilla</option>
                  <option value="Antigua & Barbuda">Antigua & Barbuda</option>
                  <option value="Argentina">Argentina</option>
                  <option value="Armenia">Armenia</option>
                  <option value="Aruba">Aruba</option>
                  <option value="Australia">Australia</option>
                  <option value="Austria">Austria</option>
                  <option value="Azerbaijan">Azerbaijan</option>
                  <option value="Bahamas">Bahamas</option>
                  <option value="Bahrain">Bahrain</option>
                  <option value="Bangladesh">Bangladesh</option>
                  <option value="Barbados">Barbados</option>
                  <option value="Belarus">Belarus</option>
                  <option value="Belgium">Belgium</option>
                  <option value="Belize">Belize</option>
                  <option value="Benin">Benin</option>
                  <option value="Bermuda">Bermuda</option>
                  <option value="Bhutan">Bhutan</option>
                  <option value="Bolivia">Bolivia</option>
                  <option value="Bonaire">Bonaire</option>
                  <option value="Bosnia & Herzegovina">Bosnia & Herzegovina</option>
                  <option value="Botswana">Botswana</option>
                  <option value="Brazil">Brazil</option>
                  <option value="British Indian Ocean Ter">British Indian Ocean Ter</option>
                  <option value="Brunei">Brunei</option>
                  <option value="Bulgaria">Bulgaria</option>
                  <option value="Burkina Faso">Burkina Faso</option>
                  <option value="Burundi">Burundi</option>
                  <option value="Cambodia">Cambodia</option>
                  <option value="Cameroon">Cameroon</option>
                  <option value="Canada">Canada</option>
                  <option value="Canary Islands">Canary Islands</option>
                  <option value="Cape Verde">Cape Verde</option>
                  <option value="Cayman Islands">Cayman Islands</option>
                  <option value="Central African Republic">Central African Republic</option>
                  <option value="Chad">Chad</option>
                  <option value="Channel Islands">Channel Islands</option>
                  <option value="Chile">Chile</option>
                  <option value="China">China</option>
                  <option value="Christmas Island">Christmas Island</option>
                  <option value="Cocos Island">Cocos Island</option>
                  <option value="Colombia">Colombia</option>
                  <option value="Comoros">Comoros</option>
                  <option value="Congo">Congo</option>
                  <option value="Cook Islands">Cook Islands</option>
                  <option value="Costa Rica">Costa Rica</option>
                  <option value="Cote DIvoire">Cote DIvoire</option>
                  <option value="Croatia">Croatia</option>
                  <option value="Cuba">Cuba</option>
                  <option value="Curaco">Curacao</option>
                  <option value="Cyprus">Cyprus</option>
                  <option value="Czech Republic">Czech Republic</option>
                  <option value="Denmark">Denmark</option>
                  <option value="Djibouti">Djibouti</option>
                  <option value="Dominica">Dominica</option>
                  <option value="Dominican Republic">Dominican Republic</option>
                  <option value="East Timor">East Timor</option>
                  <option value="Ecuador">Ecuador</option>
                  <option value="Egypt">Egypt</option>
                  <option value="El Salvador">El Salvador</option>
                  <option value="Equatorial Guinea">Equatorial Guinea</option>
                  <option value="Eritrea">Eritrea</option>
                  <option value="Estonia">Estonia</option>
                  <option value="Ethiopia">Ethiopia</option>
                  <option value="Falkland Islands">Falkland Islands</option>
                  <option value="Faroe Islands">Faroe Islands</option>
                  <option value="Fiji">Fiji</option>
                  <option value="Finland">Finland</option>
                  <option value="France">France</option>
                  <option value="French Guiana">French Guiana</option>
                  <option value="French Polynesia">French Polynesia</option>
                  <option value="French Southern Ter">French Southern Ter</option>
                  <option value="Gabon">Gabon</option>
                  <option value="Gambia">Gambia</option>
                  <option value="Georgia">Georgia</option>
                  <option value="Germany">Germany</option>
                  <option value="Ghana">Ghana</option>
                  <option value="Gibraltar">Gibraltar</option>
                  <option value="Great Britain">Great Britain</option>
                  <option value="Greece">Greece</option>
                  <option value="Greenland">Greenland</option>
                  <option value="Grenada">Grenada</option>
                  <option value="Guadeloupe">Guadeloupe</option>
                  <option value="Guam">Guam</option>
                  <option value="Guatemala">Guatemala</option>
                  <option value="Guinea">Guinea</option>
                  <option value="Guyana">Guyana</option>
                  <option value="Haiti">Haiti</option>
                  <option value="Hawaii">Hawaii</option>
                  <option value="Honduras">Honduras</option>
                  <option value="Hong Kong">Hong Kong</option>
                  <option value="Hungary">Hungary</option>
                  <option value="Iceland">Iceland</option>
                  <option value="Indonesia">Indonesia</option>
                  <option value="India">India</option>
                  <option value="Iran">Iran</option>
                  <option value="Iraq">Iraq</option>
                  <option value="Ireland">Ireland</option>
                  <option value="Isle of Man">Isle of Man</option>
                  <option value="Israel">Israel</option>
                  <option value="Italy">Italy</option>
                  <option value="Jamaica">Jamaica</option>
                  <option value="Japan">Japan</option>
                  <option value="Jordan">Jordan</option>
                  <option value="Kazakhstan">Kazakhstan</option>
                  <option value="Kenya">Kenya</option>
                  <option value="Kiribati">Kiribati</option>
                  <option value="Korea North">Korea North</option>
                  <option value="Korea Sout">Korea South</option>
                  <option value="Kuwait">Kuwait</option>
                  <option value="Kyrgyzstan">Kyrgyzstan</option>
                  <option value="Laos">Laos</option>
                  <option value="Latvia">Latvia</option>
                  <option value="Lebanon">Lebanon</option>
                  <option value="Lesotho">Lesotho</option>
                  <option value="Liberia">Liberia</option>
                  <option value="Libya">Libya</option>
                  <option value="Liechtenstein">Liechtenstein</option>
                  <option value="Lithuania">Lithuania</option>
                  <option value="Luxembourg">Luxembourg</option>
                  <option value="Macau">Macau</option>
                  <option value="Macedonia">Macedonia</option>
                  <option value="Madagascar">Madagascar</option>
                  <option value="Malaysia">Malaysia</option>
                  <option value="Malawi">Malawi</option>
                  <option value="Maldives">Maldives</option>
                  <option value="Mali">Mali</option>
                  <option value="Malta">Malta</option>
                  <option value="Marshall Islands">Marshall Islands</option>
                  <option value="Martinique">Martinique</option>
                  <option value="Mauritania">Mauritania</option>
                  <option value="Mauritius">Mauritius</option>
                  <option value="Mayotte">Mayotte</option>
                  <option value="Mexico">Mexico</option>
                  <option value="Midway Islands">Midway Islands</option>
                  <option value="Moldova">Moldova</option>
                  <option value="Monaco">Monaco</option>
                  <option value="Mongolia">Mongolia</option>
                  <option value="Montserrat">Montserrat</option>
                  <option value="Morocco">Morocco</option>
                  <option value="Mozambique">Mozambique</option>
                  <option value="Myanmar">Myanmar</option>
                  <option value="Nambia">Nambia</option>
                  <option value="Nauru">Nauru</option>
                  <option value="Nepal">Nepal</option>
                  <option value="Netherland Antilles">Netherland Antilles</option>
                  <option value="Netherlands">Netherlands (Holland, Europe)</option>
                  <option value="Nevis">Nevis</option>
                  <option value="New Caledonia">New Caledonia</option>
                  <option value="New Zealand">New Zealand</option>
                  <option value="Nicaragua">Nicaragua</option>
                  <option value="Niger">Niger</option>
                  <option value="Nigeria">Nigeria</option>
                  <option value="Niue">Niue</option>
                  <option value="Norfolk Island">Norfolk Island</option>
                  <option value="Norway">Norway</option>
                  <option value="Oman">Oman</option>
                  <option value="Pakistan">Pakistan</option>
                  <option value="Palau Island">Palau Island</option>
                  <option value="Palestine">Palestine</option>
                  <option value="Panama">Panama</option>
                  <option value="Papua New Guinea">Papua New Guinea</option>
                  <option value="Paraguay">Paraguay</option>
                  <option value="Peru">Peru</option>
                  <option value="Phillipines">Philippines</option>
                  <option value="Pitcairn Island">Pitcairn Island</option>
                  <option value="Poland">Poland</option>
                  <option value="Portugal">Portugal</option>
                  <option value="Puerto Rico">Puerto Rico</option>
                  <option value="Qatar">Qatar</option>
                  <option value="Republic of Montenegro">Republic of Montenegro</option>
                  <option value="Republic of Serbia">Republic of Serbia</option>
                  <option value="Reunion">Reunion</option>
                  <option value="Romania">Romania</option>
                  <option value="Russia">Russia</option>
                  <option value="Rwanda">Rwanda</option>
                  <option value="St Barthelemy">St Barthelemy</option>
                  <option value="St Eustatius">St Eustatius</option>
                  <option value="St Helena">St Helena</option>
                  <option value="St Kitts-Nevis">St Kitts-Nevis</option>
                  <option value="St Lucia">St Lucia</option>
                  <option value="St Maarten">St Maarten</option>
                  <option value="St Pierre & Miquelon">St Pierre & Miquelon</option>
                  <option value="St Vincent & Grenadines">St Vincent & Grenadines</option>
                  <option value="Saipan">Saipan</option>
                  <option value="Samoa">Samoa</option>
                  <option value="Samoa American">Samoa American</option>
                  <option value="San Marino">San Marino</option>
                  <option value="Sao Tome & Principe">Sao Tome & Principe</option>
                  <option value="Saudi Arabia">Saudi Arabia</option>
                  <option value="Senegal">Senegal</option>
                  <option value="Seychelles">Seychelles</option>
                  <option value="Sierra Leone">Sierra Leone</option>
                  <option value="Singapore">Singapore</option>
                  <option value="Slovakia">Slovakia</option>
                  <option value="Slovenia">Slovenia</option>
                  <option value="Solomon Islands">Solomon Islands</option>
                  <option value="Somalia">Somalia</option>
                  <option value="South Africa">South Africa</option>
                  <option value="Spain">Spain</option>
                  <option value="Sri Lanka">Sri Lanka</option>
                  <option value="Sudan">Sudan</option>
                  <option value="Suriname">Suriname</option>
                  <option value="Swaziland">Swaziland</option>
                  <option value="Sweden">Sweden</option>
                  <option value="Switzerland">Switzerland</option>
                  <option value="Syria">Syria</option>
                  <option value="Tahiti">Tahiti</option>
                  <option value="Taiwan">Taiwan</option>
                  <option value="Tajikistan">Tajikistan</option>
                  <option value="Tanzania">Tanzania</option>
                  <option value="Thailand">Thailand</option>
                  <option value="Togo">Togo</option>
                  <option value="Tokelau">Tokelau</option>
                  <option value="Tonga">Tonga</option>
                  <option value="Trinidad & Tobago">Trinidad & Tobago</option>
                  <option value="Tunisia">Tunisia</option>
                  <option value="Turkey">Turkey</option>
                  <option value="Turkmenistan">Turkmenistan</option>
                  <option value="Turks & Caicos Is">Turks & Caicos Is</option>
                  <option value="Tuvalu">Tuvalu</option>
                  <option value="Uganda">Uganda</option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="Ukraine">Ukraine</option>
                  <option value="United Arab Erimates">United Arab Emirates</option>
                  <option value="United States of America">United States of America</option>
                  <option value="Uraguay">Uruguay</option>
                  <option value="Uzbekistan">Uzbekistan</option>
                  <option value="Vanuatu">Vanuatu</option>
                  <option value="Vatican City State">Vatican City State</option>
                  <option value="Venezuela">Venezuela</option>
                  <option value="Vietnam">Vietnam</option>
                  <option value="Virgin Islands (Brit)">Virgin Islands (Brit)</option>
                  <option value="Virgin Islands (USA)">Virgin Islands (USA)</option>
                  <option value="Wake Island">Wake Island</option>
                  <option value="Wallis & Futana Is">Wallis & Futana Is</option>
                  <option value="Yemen">Yemen</option>
                  <option value="Zaire">Zaire</option>
                  <option value="Zambia">Zambia</option>
                  <option value="Zimbabwe">Zimbabwe</option>
                </select>
              </div>
              <div className="password-div flex flex-row justify-center w-full m-1">
                {/* <label className=' w-1/3 h-6 flex justify-left'>Password:</label> */}
                <input required placeholder='Password' onChange={(e) => { setPassword(e.target.value) }} type="password" className='password rounded  bg-gray-200 p-1 w-11/12 h-8 overflow-hidden' />
              </div>
              <div className="flex flex-col h-36 items-center justify-center w-full">
                <div className='w-full h-full flex flex-row items-center justify-center'>
                  <label htmlFor='image' className=' w-3/3 h-6 overflow-hidden bg-orange-500 rounded text-white p-1 flex items-center justify-center'>Upload Profile picture</label>
                  <input required id='image' placeholder='Enter' type="file" accept='image/png, image/jpeg' onChange={previewFile} style={{ display: 'none' }} />
                </div>
                <div className='overflow-hidden h-36'>
                  {profile ?
                    <></>
                    :
                    <p className='text-xs h-full overflow-hidden'>NB: If no file chosen then the image below will be your profile pic</p>
                  }
                </div>
                <img src={require('./../images/logo1.png')} className='object-center object-cover profile-pic w-16 h-72 relative rounded-full overflow-hidden m-1' alt="" />
              </div>
              <div className="flex flex-col items-center w-full justify-center m-1">
                {
                  loader ?
                    <>
                      <p className='text-sm'>Please wait while you request is being processed</p>
                      <img className='h-12 rounded-full' src={require('./../images/loader.gif')} alt="" />
                    </> :

                    <input type="submit" onClick={handleFormSubmit} className='overflow-hidden cursor-pointer submit-btn shadow-2xl w-24 h-8 border-3 p-1 rounded text-white bg-orange-500 border' value="Register" />
                }
              </div>
            </form>
            <div className="overflow-hidden flex flex-row items-center justify-center ">
              <p className='overflow-hidden'>Already have an account?</p>&nbsp;<p onClick={handleChangeForm} className='hover:text-orange-500 font-bold cursor-pointer'>Login</p>
            </div>
          </div>
        </div> : <Login />
      }
    </>
  )
}

export default Signup