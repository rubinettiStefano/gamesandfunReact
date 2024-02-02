import { Link } from "react-router-dom";

const Navbar = (props)=>
{


  return(
    <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary mb-3">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Homepage</Link> 
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link active" to="anagrafe">Anagrafe</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" to="calcolatrice">Calcolatrice</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link active" to="paperino">Paperino</Link>
                    </li>
                </ul>
            </div>
        </nav>
        {/* Pari pari al tag html <a>, ma semplicemente mandano alla ROUTE indicata dopo il to */}
        {/* <Link to="/">Homepage</Link> 
        <Link to="anagrafe">Anagrafe</Link>
        <Link to="calcolatrice">Calcolatrice</Link>
        <Link to="paperino">Paperino</Link> */}
    </>

  );
}

export default Navbar;