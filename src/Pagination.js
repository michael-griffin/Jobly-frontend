


function Pagination({ currentPage, nPages, setPage, prevPage, nextPage }) {

  let arrPages = [...Array(nPages + 1).keys()].slice(1); //[1,2,3,...nPages]

  return (
    <ul>
      <li onCLick={prevPage}>Prev</li>
      {arrPages.map(num => {
        return ((num === currentPage) ?
          pNum = <p style={{backgroundColor: "blue", color: "white"}}>num</p>
          :
          pNum = <p onClick={() => setPage(num)}>num</p>);
      })}
      <li onClick={nextPage}>Next</li>
    </ul>

  );
}


export default Pagination;


// ((num === currentPage) ?
//           pNum = <p>num</p>
//           :
//           pNum = <p onClick={() => setPage(num)}>num</p>);