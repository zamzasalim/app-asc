import { Link, useRouteError } from "react-router-dom"


const CoinError = () => {
  const error = useRouteError()

  return (
    <div className="container text-center mt-5">
      <div className="text-light p-3">
        <div>
          <h1 className="display-1">{error.message}</h1>
          <p className="lead">Please try another search.</p>
          <hr className="my-4" />
          <Link to="/" className="btn btn-outline-success btn-lg mt-3">Go back to home</Link>
        </div>
      </div>
    </div>
  )

}

export default CoinError