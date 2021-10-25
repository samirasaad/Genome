// import History from './../../routes/History';
const Unuthorized = () =>{
  localStorage.removeItem("contributorToken");
  localStorage.removeItem("smeToken");
  localStorage.removeItem("firebaseToken");
  localStorage.removeItem("currentMenuItem");
  localStorage.removeItem("smeFullName");
  localStorage.removeItem("smeProfilePic");
  localStorage.removeItem("contributorProfilePic");
  localStorage.removeItem("contributorID");
  localStorage.setItem("userRole",'sme');
  History.push('/');
}
export {
    Unuthorized
}
