import '../App.css';
import twitterIcon from '../images/twitter.jpg';
import faceboookIcon from '../images/facebook.jpg';
import googleIcon from '../images/google.jpg';
import youtubeIcon from '../images/youtube.jpg';
//Footer to access twitter,facebook,google,youtube
const Footer = () => {
    let twitter = "https://twitter.com";
    let facebook = "https://facebook.com";
    let google = "https://google.com";
    let youtube = "https://youtube.com";

    const goToTwitter = () => {
        window.location.href = twitter;
    };
    const goToFacebook = () => {
        window.location.href = facebook;
    };
    const goToGoogle = () => {
        window.location.href = google;
    };
    const goToYoutube = () => {
        window.location.href = youtube;
    };
    return (
        <div className='App-footer'>
            <button className='App-footer-button' onClick={() => goToTwitter()}>
                <img src={twitterIcon} alt='twitter'></img>
            </button>
            <button className=' App-footer-button' onClick={() => goToFacebook()}>
                <img src={faceboookIcon} alt='facebook'></img>
            </button>
            <button className='App-footer-button' onClick={() => goToGoogle()}>
                <img src={googleIcon} alt='google'></img>
            </button>
            <button className=' App-footer-button' onClick={() => goToYoutube()}>
                <img src={youtubeIcon} alt='youtube'></img>
            </button>
        </div>


    );
}
export default Footer;