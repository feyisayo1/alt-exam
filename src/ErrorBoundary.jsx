import { Link, useRouteError } from "react-router-dom";

const ErrorBoundary = () => {
  const error = useRouteError()


  return(
    <div className="errorbound">
      <div>
        <h1>Error!!!</h1>
        <h2>{error.message}</h2>
        <h2>Back to the
          <Link to="/">homepage</Link>
        </h2>
      </div>
    </div>
  )
}


export default ErrorBoundary

