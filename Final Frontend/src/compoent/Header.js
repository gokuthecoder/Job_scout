import '../App.css'


import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  const token = sessionStorage.getItem("token")
  const nav = useNavigate()
  const logout = () => {
    if (window.confirm("Do you want to logout?")) {
      sessionStorage.clear()
      nav("/login")
    }
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" >
          <img src="/logo152.png" alt="Bootstrap" height="75px" width="100px"/>
            </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link ml-5 active" aria-current="page" ><Link to="/">Home</Link></a>
              </li>
              <li className="nav-item">
                <a className="nav-link ml-5" ><Link to="/jobs">Jobs</Link></a>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link ml-5" ><Link to="/branch">Branch</Link></a>
              </li> */}
              <li className="nav-item">
                <a className="nav-link ml-5" ><Link to="/company">Company</Link></a>
              </li>

              {/* <li className="nav-item">
                <a className href="#"><Link to="/about">About</Link></a>
              </li> */}

              <li className="nav-item">
                <a className="nav-link ml-5" href="#"><Link to="/contact">Contact</Link></a>
              </li>
              {!token || token == "" || token == "null" || token == "undefined" || token == undefined || token == null ?
                <>
                  <li className="nav-item">
                    <a className="nav-link ml-5" ><Link to="/login">Log in</Link></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link ml-5" ><Link to="/signup">Sign up</Link></a>
                  </li>
                </>
                :
                <>
                  {/* <li className="nav-item">
                    <a className="nav-link ml-5" ><Link to="/appliedjob">AppliedJob</Link></a>
                  </li> */}
                  <li className="nav-item">
                    <a className="nav-link ml-5" ><Link to="/placement">Placement</Link></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link ml-5" onClick={logout} >Log out</a>
                  </li>
                </>
              }
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}