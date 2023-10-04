import { useState, useEffect } from "react";
import CompanyCard from "./CompanyCard";
import SearchBar from "./SearchBar";
import JoblyApi from "./api";
import _ from "lodash"; //possible alternative: import {debounce} from "lodash"

/* Displays a list of companies (which can be narrowed by Search)
 *
 * Props: None
 *
 * State:
 *  - companies: The list of companies
 *  - isError: Whether the API call is successful/not. If not, redirects to NotFound page.
 *
 * App -> RoutesList -> CompanyList -> CompanyCard
 */
function CompanyList() {

  const [companies, setCompanies] = useState([]);

  useEffect(function getCompanies() {
    async function getCompaniesFromApi() {
      const companies = await JoblyApi.getCompanies();
      setCompanies(companies);
    }
    getCompaniesFromApi();
  }, []);


  const debounceTime = 1000; //time in ms
  const debounceSearch = _.debounce(searchCompaniesFromApi, debounceTime);

  async function searchCompaniesFromApi(searchTerm) {
    const companies = await JoblyApi.getCompanies(searchTerm);
    setCompanies(companies);
  }

  function makeCompanyCardList() {
    return companies.map(company => (
      <CompanyCard key={company.handle}
        handle={company.handle}
        name={company.name}
        description={company.description}
        logoUrl={company.logoUrl}
      />
    ));
  }

  return (
    <div className="CompanyList">
      <SearchBar handleSearch={debounceSearch} />
      {makeCompanyCardList()}
    </div>
  );
}

export default CompanyList;
