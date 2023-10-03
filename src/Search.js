

function SearchForm(searchFunction) {
  const [searchTerm, setSearchTerm] = useState("");

  function handleSearchTermChange(evt) {
    const term = evt.target.value;
    setSearchTerm(term);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    searchFunction(searchTerm);
    setSearchTerm("");
  }

  return (
    <form onSumbit={handleSubmit}>
      <input onChange={handleSearchTermChange} value={searchTerm} placeholder="Search" name="search" />
      <button>Submit</button>
    </form>
  );

}

export default Homepage;
