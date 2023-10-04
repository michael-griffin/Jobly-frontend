import { useState } from "react";

function SearchForm({ handleSubmit }) {
  const [searchTerm, setSearchTerm] = useState("");

  function handleSearchTermChange(evt) {
    const term = evt.target.value;
    setSearchTerm(term);
  }

  function submitForm(evt) {
    evt.preventDefault();
    handleSubmit(searchTerm);
  }

  return (
    <form onSubmit={submitForm}>
      <input onChange={handleSearchTermChange}
        value={searchTerm}
        placeholder="Search"
        name="search" />
      <button>Submit</button>
    </form>
  );

}

export default SearchForm;
