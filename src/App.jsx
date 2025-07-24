
function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4 w-100">
        <div className="container">
          <a className="navbar-brand" href="#">STOR DI E CRE' CA'</a>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Chi siamo</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Prodotti</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container text-center mt-5">
        <h1>Benvenuto nel nostro Store!</h1>
        <p className="lead">Scopri i nostri prodotti e i nostri E CRE' CA' </p>
        {/* Puoi aggiungere qui un'immagine promozionale se vuoi */}
      </div>
    </>
  )
}

export default App