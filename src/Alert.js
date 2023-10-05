

function Alert({errors}){
  console.log("ALERT errors", errors, errors[0]);
  return (
    <div>Alert! You messed up. {errors[0].message}</div>
  )
}

export default Alert;