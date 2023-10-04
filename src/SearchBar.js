import { useState } from "react";

function SearchBar({ handleSearch }) { //handleSubmit
  const [searchTerm, setSearchTerm] = useState("");

  function handleSearchTermChange(evt) {
    const term = evt.target.value;
    setSearchTerm(term);
    handleSearch(searchTerm);
  }

  // function submitForm(evt) {
  //   evt.preventDefault();
  //   handleSubmit(searchTerm);
  // }

  return (
    <form>
      <input onChange={handleSearchTermChange}
        value={searchTerm}
        placeholder="Search"
        name="search" />
    </form>
  );
  //   <form onSubmit={submitForm}>
  //   <input onChange={handleSearchTermChange}
  //     value={searchTerm}
  //     placeholder="Search"
  //     name="search" />
  //   <button>Submit</button>
  // </form>
}

export default SearchBar;
