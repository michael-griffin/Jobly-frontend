import "./Alert.css";

function Alert({errors}){
  console.log("Alert: errors is", errors);
  return (
    <div className="Alert">
      <h2>Alert! You messed up.</h2>
      {errors.map(message => {
        return <p>{message}</p>
      })}

    </div>
  )
}

export default Alert;