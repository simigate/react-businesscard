import './App.css';
import photo from './images/photo.jpg';
import Info from './components/Info';
import Details from './components/Details';
import Footer from './components/Footer';
import ChangeDetails from './components/ChangeDetails';
import { useState } from 'react';
function App() {
  //object state for info
  const [info, SetInfo] = useState({ photo: `${photo}`, name: "Name", occupation: "Occupation", company: "Company", emailId: "emailid@google.com", linkedIn: "https://www.linkedin.com/?trk=public_profile_nav-header-logo" });
  const [about, SetAbout] = useState("About me:");
  const [interest, SetInterest] = useState("My interests :");
  //state to determine whether to show or hide hangeDetails form
  const [showChangeForm, setShowChangeForm] = useState(false);

  //function to change details based on edited values returned from ChangeDetails form
  const changeDetails = (changedDetails) => {
    console.log("changed" + changedDetails.emailId)
    SetInfo({ photo: changedDetails.photo, name: changedDetails.name, occupation: changedDetails.occupation, company: changedDetails.company, emailId: changedDetails.emailId, linkedIn: changedDetails.linkedIn })
    SetAbout(changedDetails.about)
    SetInterest(changedDetails.interest)
  };
  //function to hide ChangeDetails form 
  const hideChangeDetails = () => {
    setShowChangeForm(false)
  };
  //function to show ChangeDtails form
  const showChangeDetails = () => {
    let details = { ...info, about: about, interest: interest };
    console.log(details);
    return < ChangeDetails details={details} changeDetails={changeDetails} hideChangeDetails={hideChangeDetails} />
  };
  return (
    <div className="App">
      <div className="App-child">
        {/* On double click of tooltiptext ChangeDetails form is set to show state */}
        <span className='App-tooltiptext' onDoubleClick={() => setShowChangeForm(true)}>Double click here to edit</span>
        <div className="App-body">
          <Info info={info} />
          < Details title="About" content={about} />
          < Details title="Interest" content={interest} />
          <Footer />
          {showChangeForm ? showChangeDetails() : null}
        </div>
      </div>
    </div>
  );
}

export default App;
