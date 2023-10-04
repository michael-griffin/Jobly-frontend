
function LoginForm({ handleSubmit }) {

  //build form, should have function to setUser (passed down from App)

  const initialFormData = {
    username: "",
    password: ""
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
    async function loginUser(){
      const token = await JoblyApi.loginUser(formData);
      const userData =

      return userData;
    }

    handleSubmit(userData);
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
      <button>Submit</button>
    </form>
  );
}


export default LoginForm;

