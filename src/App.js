
import { useState, useRef, useEffect } from 'react';
import './App.css';
import axios from 'axios';

export default function App() {
    const [show, setshow] = useState(false);
    const [selectedGender, setSelectedGender] = useState('');

    const handleCheckboxChangeGen = (event) => {
        const { value } = event.target;
        setSelectedGender(value);
    };
    const [selectedLanguages, setSelectedLanguages] = useState([]);
    const handleCheckboxChangeLan = (event) => {
        const { value, checked } = event.target;
        setSelectedLanguages((prevSelectedLanguages) =>
            checked
                ? [...prevSelectedLanguages, value]
                : prevSelectedLanguages.filter((language) => language !== value)
        );
    };

    const ref = useRef();

    function handleClick() {
        ref.current.style.display = "none"
    }
    const [selectedSlangs, setSelectedSlangs] = useState([]);

    const handleCheckboxChangeSla = (event) => {
        const { value, checked } = event.target;
        setSelectedSlangs((prevSelectedSlangs) =>
            checked ? [...prevSelectedSlangs, value] : prevSelectedSlangs.filter((slang) => slang !== value)
        );
    };
    const [selectedAge, setSelectedAge] = useState('');

    const handleCheckboxChangeAge = (event) => {
        setSelectedAge(event.target.value);
    };
    
    const [data, setData] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const url = `http://voicebank.com:8001/api/method/voicebank.voicebank_api.voice_data?language=${selectedLanguages}&gender=${selectedGender}&slang=${selectedSlangs}&age=${selectedAge}`;
            try{
                const result = await axios.get(url);
                if (result.data && Array.isArray(result.data.message)) {
                    setData(result.data.message);
                }
            }
            catch(error){console.log(error)}
    }
    return (
        <body className="body">
            <div className="double-body">
                <div className="navbar-logo-left">
                    <div data-animation="default" data-collapse="medium" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" className="navbar-logo-left-container shadow-three w-nav">
                        <div className="container">
                            <div className="navbar-wrapper"><img src="https://assets-global.website-files.com/6130fc9db35a715a03742ded/664811135221adacc31e6c48_logo1.png" loading="lazy" alt="" />
                                <a href=" " className="navbar-brand w-nav-brand">
                                    <div className="text-block-head">South Indian Cine, Television Artistes and Dubbing Artistes Union</div>
                                    <div className="text-block-2">Voice Bank</div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="body-panel">
                    <div className="left-panel"><img src="https://assets-global.website-files.com/6130fc9db35a715a03742ded/6648137ab5ccbbb591b8f10d_radharavi%201.png" loading="lazy" alt="" className="image-4" />
                        <div>ஒவ்வொரு ஆண்டுக்கும் வெளியாகும் நூற்றுக்கணக்கான திரைப்படங்கள், ஆங்கிலத்திலிருந்து தமிழுக்கு வரும் ஹாலிவுட் படங்கள், மற்றும் இந்திய மொழிகளிலிருந்து தமிழுக்கு மொழிமாற்றப்படும் பல நூறு படங்கள் என எண்ணற்ற திரைப்படங்களில் பணிபுரியும் இரண்டாயிரத்துக்கும்
                            மேற்பட்ட குரல் கலைஞர்களின் சங்கமம் இந்த வலைத்தளம். திரைப்படங்கள் தவிர அன்றாடம் ஒளிபரப்பாகும் சுமார் 60 தொலைக்காட்சி தொடர்களிலும் தங்கள் குரல்களால் பங்கெடுப்பவர்கள் தென்னிந்திய திரைப்பட தொலைக்காட்சி பிண்ணனி குரல் கலைஞர்கள் சங்கத்தை
                            சேர்ந்த குரல் கலைஞர்கள். கலைத்துறையில் அரும்பெரும் பங்காற்றும் குரல் கலைஞர்களின் வரலாற்றையும், இந்நாளைய செயல்பாட்டுகளையும் மற்றும் ஒவ்வொரு கலைஞரின் திறமைகளையும் இங்கே பதிவு செய்கிறோம்.
                            <br />
                            <br />— டத்தோ ராதா ரவி</div>
                    </div>
                    <div className="right-panel">
                        <form onSubmit={handleSubmit}>
                            <div className="flex-div">
                                <div className="form-container">
                                    <h2>Select Language</h2>
                                    <div className="checkbox-group">
                                        <input
                                            type="text"
                                            hidden
                                            name="language"
                                            id="language"
                                            value={selectedLanguages.join(', ')}
                                            readOnly
                                        />
                                        {['Tamil', 'Telugu', 'Kannada', 'Malayalam', 'Hindi', 'English', 'Others'].map((language) => (
                                            <label className="custom-option" key={language} >
                                                <input
                                                    type="checkbox"
                                                    value={language}
                                                    checked={selectedLanguages.includes(language)}
                                                    onChange={handleCheckboxChangeLan}
                                                />{' '}
                                                {language}
                                            </label>
                                        ))}
                                    </div>
                                </div>
                                <div className="form-popup" id="myForm" ref={ref}>
                                    <form className="form-container">
                                        <h1>Send Request</h1>
                                        <label for="email"><b>Email</b></label>
                                        <input type="text" placeholder="Enter Email" name="email" required />

                                        <label for="text"><b>Phone</b></label>
                                        <input type="text" placeholder="Enter Phone" name="psw" required />

                                        <button type="submit" className="btn">Send</button>
                                        <button type="button" className="btn cancel" onClick={handleClick}>Close</button>
                                    </form>
                                </div>
                                <div className="form-container">
                                    <h2>Select Slang</h2>
                                    <div className="checkbox-group">
                                        <input type="text" hidden name="slang" id="slang" value={selectedSlangs.join(', ')} readOnly />
                                        {['Madurai', 'Madras', 'Coimbatore', 'Nagarkovil', 'General'].map((slang) => (
                                            <label key={slang}>
                                                <input
                                                    type="checkbox"
                                                    value={slang}
                                                    checked={selectedSlangs.includes(slang)}
                                                    onChange={handleCheckboxChangeSla}
                                                />{' '}
                                                {slang}
                                            </label>
                                        ))}
                                    </div>
                                </div>
                                <div className="form-container">
                                    <h2>Select Age</h2>
                                    <div className="checkbox-group">
                                        <input type="text" hidden name="age" value={selectedAge} readOnly />
                                        {['5-10', '10-15', '15-20', '20-25', '25-30', '30-35', '35-40', '40-45', '45-50'].map((ageRange) => (
                                            <label key={ageRange}>
                                                <input
                                                    type="checkbox"
                                                    value={ageRange}
                                                    checked={selectedAge === ageRange}
                                                    onChange={handleCheckboxChangeAge}
                                                />{' '}
                                                {ageRange}
                                            </label>
                                        ))}
                                    </div>
                                </div>
                                <div className="form-container">
                                    <h2>Select Gender</h2>
                                    <div className="checkbox-group">
                                        <input type="text" hidden name="gender" id="gender" value={selectedGender} readOnly />
                                        {['Male', 'Female', 'Others'].map((gender) => (
                                            <label key={gender}>
                                                <input
                                                    type="checkbox"
                                                    value={gender}
                                                    checked={selectedGender === gender}
                                                    onChange={handleCheckboxChangeGen}
                                                />{' '}
                                                {gender}
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <button type="submit" data-wait="Please wait..." className="submit-button w-button" onClick={() => setshow(!show)}>Search</button>
                        </form>
                        <div className="search-result">
                            <div className="result-section">
                                {
                                    Array.isArray(data) ? (<>
                                        {data.map((item) => (
                                            <div className="card">
                                                <div className="mem-no">
                                                    <div key={item.member_id} className="mno">M. No. {item.member_id}</div><img
                                                        src="https://assets-global.website-files.com/6130fc9db35a715a03742ded/66481c047761e1b2e1d6f7b6_Component%202.png"
                                                        loading="lazy" alt="" />
                                                </div>
                                                <div className="card-body"><img
                                                    src={item.artist_image} loading="lazy" sizes="125px" alt="Artist Profile" className="image-5" />
                                                    <div className="cb-text">
                                                        <div className="text-block-4"><span className="text-span">Name</span>{item.first_name} {item.last_name}</div>
                                                        <div className="text-block-4"><span className="text-span">Gender</span>{item.gender}</div>
                                                        <div className="text-block-4"><span className="text-span">Language</span>{item.language}</div>
                                                        <div className="text-block-4"><span className="text-span">Slang</span>{item.slang}</div>
                                                        <div className="text-block-4"><span className="text-span">Age</span>{item.age}</div>
                                                    </div>
                                                </div>
                                                <div className="audio-card">
                                                    <audio controls className="w-full" style={{marginLeft:"40px"}}>
                                                        <source src={item.voice} type="audio/mpeg"/>
                                                    </audio>
                                                </div>
                                            </div>
                                        ))}
                                    </>
                                    ) : (
                                        <div>No data available</div>
                                    )}
                                <div>
                                </div>
                            </div>
                        </div>

                        {/* <button className="open-button enquiry w-button div-block-3" onClick={() => setshow(!show)}>Enquiry now</button> */}
                    </div>
                </section>
                {/* {show ? <Form /> : null} */}
            </div>
        </body >

    );
}
