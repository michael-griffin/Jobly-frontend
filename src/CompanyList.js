import { useState, useEffect } from "react";
import CompanyCard from "./CompanyCard";
import SearchForm from "./SearchForm";
import JoblyApi from "./api";


function CompanyList() {

  const [companies, setCompanies] = useState([]);

  useEffect(function getCompanies() {
    async function getCompaniesFromApi() {
      const companies = await JoblyApi.getCompanies();
      setCompanies(companies);
    }
    getCompaniesFromApi();
  }, []);

  async function searchCompaniesFromApi(searchTerm) {
    const companies = await JoblyApi.getCompanies(searchTerm);
    setCompanies(companies);
  }

  function makeCompanyCardList() {
    console.log('companies is : ', companies);
    return companies.map(company => (
      <CompanyCard key={company.handle} handle={company.handle} name={company.name} description={company.description}
        logoUrl={company.logoUrl} />
    ));
  }

  return (
    <div className="CompanyList">
      <SearchForm handleSubmit={searchCompaniesFromApi} />
      {makeCompanyCardList()}
    </div>
  );
}

export default CompanyList;
