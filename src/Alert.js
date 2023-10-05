import "./Alert.css";

function Alert({errors}){
  let errorMessage;
  if (Array.isArray(errors)) {
    errorMessage = errors.map((message, idx) => {
      return <p key={idx}>{message}</p>
    })
  } else {
    errorMessage = <p>{errors}</p>;
  }

  return (
    <div className="Alert">
      <h2>Alert! You messed up.</h2>
      {errorMessage}
    </div>
  )
}

export default Alert;