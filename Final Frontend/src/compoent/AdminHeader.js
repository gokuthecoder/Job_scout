import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function AdminHeader() {

  const token = sessionStorage.getItem("token")
  const nav = useNavigate()

  useEffect(() => {
    if (!token || token == "" || token == "null" || token == "undefined" || token == undefined || token == null) {
      nav('/login')
    }
  }, [])


  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link ml-5" href="#" active aria-current="page"><Link to="/admin">Dashboard</Link></a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Jobs
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#"><Link to="/admin/addjobs">Add</Link></a></li>
                  <li><a className="dropdown-item" href="#"><Link to="/admin/jobs">Manage</Link></a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Branch
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#"><Link to="/admin/addbranch">Add</Link></a></li>
                  <li><a className="dropdown-item" href="#"><Link to="/admin/allbranch">Manage</Link></a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Company
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#"><Link to="/admin/addcompany">Add</Link></a></li>
                  <li><a className="dropdown-item" href="#"><Link to="/admin/company">Manage</Link></a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link ml-5" href="#" ><Link to="/admin/placement">Placement</Link></a>
              </li>

              <li className="nav-item">
                <a className="nav-link ml-5" href="#" ><Link to="/admin/appliedjob">Appliedjob</Link></a>
              </li>

              <li className="nav-item">
                <a className="nav-link ml-5" href="#" ><Link to="/admin/contact">Contact</Link></a>
              </li>
              <li className="nav-item">
                <a className="nav-link ml-5" href="#"><Link to="/admin/alluser">Users</Link></a>
              </li>
            </ul>

            {/* <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Link
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Action</a></li>
                  <li><a className="dropdown-item" href="#">Another action</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li> 

            <li className="nav-item">
              <a className="nav-link ml-5" href="#" href="#"><Link to="/admin/contact">Contact</Link></a>
            </li>

            <li className="nav-item">
              <a className="nav-link ml-5" href="#" ><Link to="/signup">Sign up</Link></a>
            </li>

            <li className="nav-item">
              <a className="nav-link ml-5" href="#" ><Link to="">Log out</Link></a>
            </li>
          </ul> */}
          </div>
        </div>
      </nav >
    </>
  )
}