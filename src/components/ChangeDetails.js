import '../App.css';
import { useState, useRef } from 'react';

const ChangeDetails = ({ details, changeDetails, hideChangeDetails }) => {
    //state object to reflect all changes/edits
    const [formDetails, setFormDetails] = useState({
        photo: details.photo,
        name: details.name,
        occupation: details.occupation,
        company: details.company,
        emailId: details.emailId,
        linkedIn: details.linkedIn,
        about: details.about,
        interest: details.interest
    });
    const inputImageFile = useRef(null);
    //function to handle Change of all inputs except image
    const handleChange = (e) => {
        let { name, value, type } = e.target
        setFormDetails(prevStat => {
            return {
                ...prevStat,
                [name]: value
            }
        })

    }
    //function to handle change of image
    const handleImageUpload = e => {
        const { files } = e.target;
        if (files && files.length) {
            const filename = files[0].name;
            var parts = filename.split(".");
            const fileType = parts[parts.length - 1];
            let value = URL.createObjectURL(files[0]);
            setFormDetails(prevStat => {
                return {
                    ...prevStat,
                    photo: value
                }
            })

        }
    }
    //function to open windows dialog box
    const handleSelect = (e) => {
        e.preventDefault()
        inputImageFile.current.click();

    }
    // function to return all changed state on submit of form
    const handleSubmit = (e) => {
        e.preventDefault()
        hideChangeDetails()
        changeDetails(formDetails)
    }
    // function to close the form
    const handleCancel = (e) => {
        e.preventDefault()
        hideChangeDetails()
    }
    return (
        <form className='Change-details' onSubmit={handleSubmit} >
            <nav className="Change-navbar">
                <h3 >Edit Details</h3>
            </nav>
            <label className='Change-label'>
                Name:
                <input type="text" className='Change-input' name="name" value={formDetails.name} onChange={handleChange} />
            </label>
            <label className='Change-label'>
                Occupation:
                <input type="text" className='Change-input' name="occupation" value={formDetails.occupation} onChange={handleChange} />
            </label>
            <label className='Change-label'>
                Company:
                <input type="text" className='Change-input' name="company" value={formDetails.company} onChange={handleChange} />
            </label>
            <label className='Change-label'>
                Email:
                <input type="text" className='Change-input' name="emailId" value={formDetails.emailId} onChange={handleChange} />
            </label>
            <label className='Change-label'>
                LinkedIn:
                <input type="text" className='Change-input' name="linkedIn" value={formDetails.linkedIn} onChange={handleChange} />
            </label>
            <label className='Change-label'>
                About:
                {/* <input type="textarea" className='Change-textarea' name="about" value={formDetails.about} onChange={handleChange} /> */}
                {/* For multi line text input */}
                <section>
                    <textarea className='Change-textarea' name="about" maxLength={150} value={formDetails.about} onChange={handleChange} />
                </section>
            </label>
            {/* to add vertical space */}
            <span className='Change-label'></span>
            <span className='Change-label'></span>
            <label className='Change-label'>
                Interest:
                <section>
                    <textarea className='Change-textarea' name="interest" maxLength={150} value={formDetails.interest} onChange={handleChange} />
                </section>
            </label>
            <span className='Change-label'></span>
            <span className='Change-label'></span>
            <label className='Change-label'>
                Photo:
                <img className='Change-img' name="photo" src={formDetails.photo} />
                <input
                    type="file"
                    style={{ display: "none" }}
                    accept="image/*"
                    ref={inputImageFile}
                    onChange={handleImageUpload}

                />
                <button onClick={handleSelect}>Picture</button>
            </label>
            <button className='Change-button' >Submit</button>
            <button className='Change-button' onClick={handleCancel}>Cancel</button>
        </form>
    );
}
export default ChangeDetails;