import { useState } from "react";
import JoblyApi from "./api";
import Alert from "./Alert";

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
  const [errors, setErrors] = useState(null);


  function submitForm(evt) {
    evt.preventDefault();

    async function signupUser() {
      try {
        //const token = await JoblyApi.registerUser(formData);
        await handleSubmit(formData);
      } catch (error) {
        const errorArr = error[0].message;

        setErrors(errorArr);
      }
    }
    signupUser();
  }

  function handleFormChange(evt) {
    const { name, value } = evt.target;
    setFormData(prevFormData => (
      { ...prevFormData, [name]: value }
    ));
  }

  return (
    <>
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

      {errors && <Alert errors={errors} />}
    </>
  );
}



export default SignupForm;