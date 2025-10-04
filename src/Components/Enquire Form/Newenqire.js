import React, { useState } from 'react'
import './newenquire.css'
import { useNavigate } from 'react-router-dom'

function Newenqire() {
    // const [name, setName] = useState("")
    // const [no, setNo] = useState("")
    // const [email, setEmail] = useState("")
    // const [msg, setMsg] = useState("")
    
    // const [msg, setMsg] = useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [mobile, setMobile] = useState("")
    const navigate = useNavigate();

    // const submitForm = () => {
    //     console.log(name, no, email, msg)
    //     if (name && no && email) {
    //         const mailtoLink = `mailto:enquiry@nayakstutorials.com?subject=Student requested a callback&body=Name: ${name}%0A
    //     Number: ${no}%0A
    //     Email: ${email}%0A
    //     Message: ${msg}%0A`;
    //         window.location.href = mailtoLink;

    //     setName("")
    //     setNo("")
    //     setEmail("")
    //     setMsg("")
    //     } else {
    //         alert("Please fill in all required fields before sending the email.");
    //     }
    // }

    const submitdata = async (e) => {
        e.preventDefault(); // Prevent the default form submission behavior

        if (name.length <= 3 || mobile.length <= 9) {
            alert('Please fill the form');
            return; // Stop the form submission if validation fails
        }

        // Prepare the form data
        const formData = {
            name: name,
            email: email,
            mobile: mobile
        };

        try {
            // Send a POST request to the given URL
            const response = await fetch('https://nayakstutorials.com/admin/api/formData', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            // Check if the response is successful
            if (response.status) {
                const data = await response.json();
                console.log('Form submitted successfully:', data);
                // alert('Your message has been submitted successfully!');
                navigate('/thankyou');
            } else {
                console.error('Error submitting form:', response.status);
                alert('There was an error submitting your form. Please try again.');
            }
        } catch (error) {
            console.error('Network error:', error);
            alert('There was an error with the network. Please try again.');
        }
    };

    return (
        <>
            <div className='newenqmaindiv'>
                <div className='newenqbtn'>
                    <div className='newenqbtninner'>Enquiry Form</div>
                </div>

            </div>
            <div className='newenqformdiv'>
                <h3 className='enqheading'>Enquiry Form</h3>
                <form onSubmit={submitdata}>
                    <div class="mb-3">
                        <input value={name} onChange={(e) => { setName(e.target.value) }} type="text" class="form-control-new" placeholder='Enter Name' />
                    </div>
                    <div class="mb-3">
                        <input value={mobile} onChange={(e) => { setMobile(e.target.value) }} type="text" class="form-control-new" placeholder='Enter Phone' />
                    </div>
                    <div class="mb-3">
                        <input value={email} onChange={(e) => { setEmail(e.target.value) }} type="email" class="form-control-new" placeholder='Enter Email' />
                    </div>
                    {/* <div class="form-floating">
                        <textarea value={msg} onChange={(e) => { setMsg(e.target.value) }} class="form-control-new" placeholder="Leave a comment here" rows="3"></textarea>
                    </div> */}
                    {/* <button type="button" class="enqformBtn" onClick={submitForm} >Submit</button> */}
                    <button type="submit" class="enqformBtn">Submit</button>
                </form>
            </div>
        </>
    )
}

export default Newenqire

