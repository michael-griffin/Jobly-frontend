import {useState} from "react";
import JoblyApi from "./api";

function SignupForm({ handleSubmit }) {

  //build form, should have function to setUser (passed down from App)

  // const initialFormData = {
  //   username: "",
  //   password: "",
  //   firstName: "",
  //   lastName: "",
  //   email: ""
  // };
  const initialFormData = {
    username: "test",
    password: "password",
    firstName: "test",
    lastName: "user",
    email: "test@email.com"
  };

  const [formData, setFormData] = useState(initialFormData);

  function handleFormChange(evt) {
    const { name, value } = evt.target;
    setFormData(prevFormData => (
      { ...prevFormData, [name]: value }
    ));
  }

  function submitForm(evt) {
    evt.preventDefault();
    async function signupUser(){
      const token = await JoblyApi.registerUser(formData);
      const userData = await JoblyApi.getUserInfo(formData.username);
      handleSubmit(userData, token);
    }
    signupUser();
  }

  return (
    <form onSubmit={submitForm}>
      <input onChange={handleFormChange}
        value={formData.username}
        placeholder="Username"
        name="username" />
      <br />
      <input onChange={handleFormChange}
        type="password"
        value={formData.password}
        placeholder="Password"
        name="password" />
      <br />
      <input onChange={handleFormChange}
        value={formData.firstName}
        placeholder="First name"
        name="firstName" />
      <br />
      <input onChange={handleFormChange}
        value={formData.lastName}
        placeholder="Last name"
        name="lastName" />
      <br />
      <input onChange={handleFormChange}
        value={formData.email}
        placeholder="Email"
        name="email" />
      <br />
      <button>Submit</button>
    </form>
  );
}



export default SignupForm;