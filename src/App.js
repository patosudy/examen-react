import { MiApi } from "./MiApi";


function App() {
  return (
  <>
    
    <nav className="navbar">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">topaspace</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        </li>
        <li className="nav-item">
        </li>
        <li className="nav-item dropdown">
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
        </li>
      </ul>
    </div>
  </div>
</nav>
<div className='container'>

    <MiApi />

</div>
  </>
  );
}

export default App;
