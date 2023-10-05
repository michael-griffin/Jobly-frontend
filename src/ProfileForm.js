import { useState, useContext } from "react";
import Alert from "./Alert";
import userContext from "./userContext";


/** Form for updating a user's profile */
function ProfileForm({ handleSubmit }) {

  const data = useContext(userContext);
  const allUserData = data.user;

  console.log("All user DATA", allUserData);
  const userUpdateData = {firstName: allUserData.firstName, lastName: allUserData.lastName, email: allUserData.email};

  // const [formData, setFormData] = useState(null);
  const [formData, setFormData] = useState(userUpdateData);
  const [errors, setErrors] = useState(null);

  // TODO: Define these functions elsewhere, do the work inside of submitForm.
  // TODO: Take user info from context instead of from props. -> DONE
  // TODO: Autopopulate form with user info -> DONE, but with possible cleanup/refactor needed.
  // TODO: Add labels/text next to form fields

  function submitForm(evt) {
    evt.preventDefault();

    async function updateUser() {
      try {
        console.log("formData", formData);
        //const token = await JoblyApi.registerUser(formData);
        await handleSubmit(formData);
      } catch (error) {
        const errorArr = error[0].message;

        setErrors(errorArr);
      }
    }
    updateUser();
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
          disabled={true}
          value={allUserData.username}
          placeholder="Username"
          name="username" />
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



export default ProfileForm;