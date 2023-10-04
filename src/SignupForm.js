

function SignupForm({ handleSubmit }) {

  //build form, should have function to setUser (passed down from App)

  const initialFormData = {
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: ""
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
    //API CALL HERE
    handleSubmit(formData);
  }

  return (
    <form onSubmit={submitForm}>
      <input onChange={handleFormChange}
        value={formData.username}
        placeholder="Username"
        name="username" />
      <input onChange={handleFormChange}
        value={formData.password}
        placeholder="Password"
        name="password" />
      <input onChange={handleFormChange}
        value={formData.firstName}
        placeholder="First name"
        name="firstName" />
      <input onChange={handleFormChange}
        value={formData.lastName}
        placeholder="Last name"
        name="lastName" />
      <input onChange={handleFormChange}
        value={formData.email}
        placeholder="Email"
        name="email" />
      <button>Submit</button>
    </form>
  );
}



export default SignupForm;