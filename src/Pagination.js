import "./Pagination.css";


function Pagination({ pageNum, nPages, setPageNum}) {

  let arrPages = [...Array(nPages + 1).keys()].slice(1); //[1,2,3,...nPages]

  function prevPage(){
    if (pageNum > 1) setPageNum(prev => prev-1);
  }

  function nextPage(){
    if (pageNum < nPages) setPageNum(prev => prev+1);
  }


  return (
    <ul className="Pagination">
      <button  onClick={prevPage} disabled={pageNum === 1}>Prev</button>
      {arrPages.map(num => {
        return ((num === pageNum) ?
          <button className="currentPage" >{num}</button>
          :
          <button onClick={() => setPageNum(num)}>{num}</button>);
      })}
      <button onClick={nextPage} disabled={pageNum === nPages}>Next</button>
    </ul>

  );
}


export default Pagination;


// ((num === pageNum) ?
//           pNum = <p>num</p>
//           :
//           pNum = <p onClick={() => setPageNum(num)}>num</p>);