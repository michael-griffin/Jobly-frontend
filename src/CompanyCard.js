
function CompanyCard({title, description, logoPath}){

  // const logoURL = new URL(logo);
  const logoPath = `./logos/${logoPath}`;

  return (
    <div className="CompanyCard">
      <h6>{title}</h6>
      <img src={logoPath} alt={title} />
      <p><small>{description}</small></p>
    </div>
  )
}

export default CompanyCard;