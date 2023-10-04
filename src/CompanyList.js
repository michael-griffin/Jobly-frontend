import { useState, useEffect } from "react";
import CompanyCard from "./CompanyCard";
import SearchForm from "./SearchForm";
import JoblyApi from "./api";


function CompanyList() {

  const [companies, setCompanies] = useState([]);

  useEffect(function getCompanies(){ async function getCompaniesFromApi() {
    const companies = await JoblyApi.getCompanies();
    setCompanies(companies);
  }
    getCompaniesFromApi();
  }, [])


  function filterList(searchTerm) {
    console.log('tried to filter!');
  }

  function makeCompanyCardList(){
    console.log('companies is : ', companies);
    return companies.map(company => (
      <CompanyCard key={company.handle} name={company.name} description={company.description}
        logoUrl={company.logoUrl} />
    ))
  }

  return (
    <div className="CompanyList">
      <SearchForm handleList={filterList}/>
      {makeCompanyCardList()}
    </div>
  )
}

export default CompanyList;
