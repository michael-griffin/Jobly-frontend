
function CompanyCard({name, description, logoUrl}){

  // const logoURL = new URL(logo);
  // const logoPath = `./logos/${logoURL}`;
  // console.log('title')
  return (
    <div className="CompanyCard">
      <h6>{name}</h6>
      <img src={logoUrl} alt={name} />
      <p><small>{description}</small></p>
    </div>
  )
}

export default CompanyCard;