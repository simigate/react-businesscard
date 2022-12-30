import PropTypes from 'prop-types';
import '../App.css';

import emailIcon from '../images/email.jpg';
import linkedinIcon from '../images/linkedIn.jpg';

//To display the information part of digital businesscard 
const Info = ({ info }) => {


    const getEmailId = () => {
        window.location = "mailto:" + info.emailId;
    };
    const getLinkedIn = () => {
        window.location.href = info.linkedIn;
    };
    return (
        <div className='App-info'>
            <img className='App-info-img' src={info.photo} alt='picture' />
            <h2 className='App-info-h2'>{info.name}</h2>
            <h3 className='App-info-h3'>{info.occupation}</h3>
            <h4 className='App-info-h4'>{info.company}</h4>
            <div className='App-info-buttons'>
                <button className='App-info-button' onClick={() => getEmailId()}>
                    <img src={emailIcon} alt='email'></img>
                    Email</button>
                <button className=' App-info-button' onClick={() => getLinkedIn()}>
                    <img src={linkedinIcon} alt='email'></img>
                    LinkedIn</button>
            </div>
        </div>
    );
}
export default Info;