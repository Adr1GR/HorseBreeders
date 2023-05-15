
//create logout function
const Logout = () => {
    //clear local storage
    localStorage.clear();
    //redirect to login page
    window.location.href = "/login";
}

export default Logout;