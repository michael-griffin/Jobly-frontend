import {useState} from "react";
import JoblyApi from "./api";
import Alert from "./Alert";

function LoginForm({ handleSubmit }) {

  //build form, should have function to setUser (passed down from App)

  const initialFormData = {
    username: "",
    password: ""
  };
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState(null);

  function handleFormChange(evt) {
    const { name, value } = evt.target;
    setFormData(prevFormData => (
      { ...prevFormData, [name]: value }
    ));
  }


  function submitForm(evt) {
    evt.preventDefault();

    async function loginUser(){
      try {
        const token = await JoblyApi.loginUser(formData);
        const userData = await JoblyApi.getUserInfo(formData.username);
        handleSubmit(userData, token);
      } catch(error) {
        console.log("Errors" , error);
        setErrors(error);
      }
    }
    loginUser();
  }

  return (
    <>
    <form onSubmit={submitForm}>
      <input onChange={handleFormChange}
        value={formData.username}
        placeholder="Username"
        name="username" />
      <input onChange={handleFormChange}
        value={formData.password}
        placeholder="Password"
        name="password" />
      <button>Submit</button>
    </form>
    {errors && <Alert errors={errors}/>}
    </>
  );
}


export default LoginForm;

