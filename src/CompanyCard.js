import { Link } from "react-router-dom";
import "./CompanyCard.css";
/** Company card: displays as one of many in list of companies
 * ALSO clicking a card opens up a company detail page, which has a list
 * of jobs relevant to that company. Passes company handle to company detail
 * list (so that fetch can be done).
 */
function CompanyCard({ name, handle, description, logoUrl }) {

  return (
    <Link className="CompanyCard-Link" to={`/companies/${handle}`}>
      <div className="CompanyCard">
        <h6>{name} {logoUrl && <img src={logoUrl} alt={name} />}</h6>

        <p><small>{description}</small></p>
      </div>
    </Link>
  );
}

export default CompanyCard;