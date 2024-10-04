import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ProfilePage.css'; // Custom styles can be added here

const ProfilePage = () => {
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission

        // Gather form data
        const fullName = e.target.fullName.value;
        const email = e.target.email.value;
        const phone = e.target.phone.value;
        const dob = e.target.dob.value;
        const gender = e.target.gender.value;
        const terms = e.target.terms.checked;

        // Validate form data
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phonePattern = /^\+?\d{10,15}$/; // Adjust as needed for your requirements
        const today = new Date();
        const dobDate = new Date(dob);

        if (!fullName || !email || !dob || !gender || !terms) {
            alert("Please fill all required fields.");
            return;
        }
        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }
        if (!phonePattern.test(phone)) {
            alert("Please enter a valid phone number.");
            return;
        }
        if (dobDate > today) {
            alert("Date of birth cannot be in the future.");
            return;
        }

        // Perform any necessary registration logic here, e.g., API call to register
        try {
            const response = await mockRegisterUser({ fullName, email, phone, dob, gender });

            // Check if registration was successful
            if (response.success) {
                // Show a popup message for successful registration
                alert("You have registered successfully!");

                // Redirect to the login page after a short delay
                setTimeout(() => {
                    window.location.href = '/'; // Redirect to the login page after successful registration
                }, 2000); // 2 seconds delay before redirecting
            } else {
                alert("Registration failed. Please try again."); // Handle failure
            }
        } catch (error) {
            alert("An error occurred. Please try again."); // Handle any unexpected errors
        }
    };

    // Mock function to simulate registration API call
    const mockRegisterUser = async (userData) => {
        // Simulate a delay for API call
        return new Promise((resolve) => {
            setTimeout(() => {
                // Simulate a successful registration response
                resolve({ success: true });
            }, 1000);
        });
    };

    return (
        <div className="container-fluid bg-light min-vh-100 d-flex align-items-center justify-content-center">
            <div className="row w-100">
                {/* Left Side - Features Section */}
                <div className="col-md-6 d-none d-md-flex flex-column justify-content-center p-4">
                    <div className="bg-light rounded shadow-sm p-4"> {/* Box for the features section */}
                        <h1 className="font-weight-bold mb-4 text-start" style={{ fontSize: '3rem', lineHeight: '1.2' }}>Your Journey to a Healthier You</h1>
                        <h3 className="text-primary mb-4 text-start" style={{ fontSize: '2rem', lineHeight: '1.3' }}>
                            <a href="#register" className="text-decoration-none">
                                REGISTER & GET FOLLOWING EXCITING FEATURES
                            </a>
                        </h3>
                        <ul className="list-unstyled text-start">
                            <li className="mb-4 d-flex align-items-start">
                                <i className="fas fa-user-check text-success me-3" style={{ fontSize: '1.5rem' }}></i>
                                <div>
                                    <h5 className="mb-2" style={{ fontSize: '1.25rem', lineHeight: '1.5' }}>Get Your Own Personal Account</h5>
                                    <p className="mb-0" style={{ paddingLeft: '1.5rem' }}>Secured with a confidential Log In ID and Password.</p>
                                </div>
                            </li>
                            <li className="mb-4 d-flex align-items-start">
                                <i className="fas fa-bell text-success me-3" style={{ fontSize: '1.5rem' }}></i>
                                <div>
                                    <h5 className="mb-2" style={{ fontSize: '1.25rem', lineHeight: '1.5' }}>Stay Updated</h5>
                                    <p className="mb-0" style={{ paddingLeft: '1.5rem' }}>With our special schemes and offers.</p>
                                </div>
                            </li>
                            <li className="mb-4 d-flex align-items-start">
                                <i className="fas fa-book-open text-success me-3" style={{ fontSize: '1.5rem' }}></i>
                                <div>
                                    <h5 className="mb-2" style={{ fontSize: '1.25rem', lineHeight: '1.5' }}>Access Thousands of Recipes</h5>
                                    <p className="mb-0" style={{ paddingLeft: '1.5rem' }}>Relishing yet healthy recipes for weight loss. Create your recipe book.</p>
                                </div>
                            </li>
                            <li className="mb-4 d-flex align-items-start">
                                <i className="fas fa-newspaper text-success me-3" style={{ fontSize: '1.5rem' }}></i>
                                <div>
                                    <h5 className="mb-2" style={{ fontSize: '1.25rem', lineHeight: '1.5' }}>Stay Informed</h5>
                                    <p className="mb-0" style={{ paddingLeft: '1.5rem' }}>About trending blogs on health and lifestyle management.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Right Side - Profile Form Section */}
                <div className="col-md-6 p-4 d-flex flex-column justify-content-center">
                    <div className="bg-white rounded shadow-sm p-4"> {/* Box for the form */}
                        <h1 className="mb-4 text-start">Complete Your Profile</h1>
                        <p className="text-start">Please enter your details below to continue.</p>
                        <form onSubmit={handleSubmit}> {/* Use the handleSubmit function here */}
                            <div className="mb-3 position-relative">
                                <div className="input-group">
                                    <span className="input-group-text bg-white border-0" style={{ borderRight: 'none' }}>
                                        <i className="fas fa-user" style={{ color: '#007bff' }}></i>
                                    </span>
                                    <input
                                        type="text"
                                        className="form-control ps-2"
                                        id="fullName"
                                        name="fullName"
                                        placeholder="Full Name"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="mb-3 position-relative">
                                <div className="input-group">
                                    <span className="input-group-text bg-white border-0" style={{ borderRight: 'none' }}>
                                        <i className="fas fa-envelope" style={{ color: '#007bff' }}></i>
                                    </span>
                                    <input
                                        type="email"
                                        className="form-control ps-2"
                                        id="email"
                                        name="email"
                                        placeholder="Email"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="mb-3 position-relative">
                                <div className="input-group">
                                    <span className="input-group-text bg-white border-0" style={{ borderRight: 'none' }}>
                                        <i className="fas fa-phone" style={{ color: '#007bff' }}></i>
                                    </span>
                                    <input
                                        type="tel"
                                        className="form-control ps-2"
                                        id="phone"
                                        name="phone"
                                        placeholder="Phone Number"
                                        readOnly // Set the phone input to read-only
                                        value="+8355821911" // Provide a mock phone number or the actual one
                                        required
                                    />
                                </div>
                            </div>
                            <div className="mb-3 position-relative">
                                <div className="input-group">
                                    <span className="input-group-text bg-white border-0" style={{ borderRight: 'none' }}>
                                        <i className="fas fa-calendar-alt" style={{ color: '#007bff' }}></i>
                                    </span>
                                    <input
                                        type="date"
                                        className="form-control ps-2"
                                        id="dob"
                                        name="dob"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="mb-3 d-flex align-items-center flex-wrap p-2 rounded" style={{ backgroundColor: '#f8f9fa', border: '1px solid #e0e0e0' }}>
                                <label className="form-label me-3 mb-0" style={{ fontWeight: 'bold', color: '#007bff' }}>Select your Gender:</label>
                                <div className="form-check form-check-inline" style={{ marginRight: '1rem' }}>
                                    <input
                                        type="radio"
                                        name="gender"
                                        value="Male"
                                        className="form-check-input"
                                        id="genderMale"
                                        style={{ cursor: 'pointer' }}
                                        required
                                    />
                                    <label className="form-check-label" htmlFor="genderMale" style={{ cursor: 'pointer' }}>Male</label>
                                </div>
                                <div className="form-check form-check-inline" style={{ marginRight: '1rem' }}>
                                    <input
                                        type="radio"
                                        name="gender"
                                        value="Female"
                                        className="form-check-input"
                                        id="genderFemale"
                                        style={{ cursor: 'pointer' }}
                                        required
                                    />
                                    <label className="form-check-label" htmlFor="genderFemale" style={{ cursor: 'pointer' }}>Female</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input
                                        type="radio"
                                        name="gender"
                                        value="Other"
                                        className="form-check-input"
                                        id="genderOther"
                                        style={{ cursor: 'pointer' }}
                                        required
                                    />
                                    <label className="form-check-label" htmlFor="genderOther" style={{ cursor: 'pointer' }}>Other</label>
                                </div>
                            </div>

                            <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" id="terms" required />
                                <label className="form-check-label" htmlFor="terms">
                                    I agree to the terms and conditions of BalanceNutrition.in and consent to follow the norms as stated.
                                    <a href='/' style={{ textDecoration: 'underline' }}>Click Here</a> to view our Terms of Use
                                </label>
                            </div>
                            <button type="submit" className="btn btn-primary w-100 mt-3">Register</button>
                        </form>
                        <p className="mt-3 text-center">Already have an account? <a href="/signin" className="text-primary">Sign In</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
