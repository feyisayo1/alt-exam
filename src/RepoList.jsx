import { Link, NavLink, } from "react-router-dom";
import useFetch from "./custom-hooks/useFetch";
import Loading from "./Loading";

const ReposList = () => {
    const{ repos, error, loading} = useFetch('https://api.github.com/users/feyisayo1/repos')

    // const repos = useLoaderData()

    // const items = repos.map((repo) => Object.values(repo))
   
    return ( 
        <div>
            <div style={{background:"#2b3452", height:"100%" }}>
                {/* <div className="nav">
                        <h1 className="myrepo">My Repo List</h1>
                        <header>
                            <nav className="check">
                                <NavLink to="/"><h3>Home</h3></NavLink>
                                <NavLink to="/repo"><h3>Repo</h3></NavLink>
                                <NavLink to="profile"><h3>Profile</h3></NavLink>
                            </nav>
                        </header>
                </div> */}
                <div className='results-container'>
                    {error && <div className='error'><p>{error}</p></div>}
                    {loading && <Loading/>}
                    {repos.map((repo) => 
                        // <div className='card' key={repo.id}>
                            // <Link to={repo.id.toString()} className='card' key={repo.id} data-aos="slide-down">
                            <Link to={repo.id.toString()} className='card' key={repo.id} data-aos="fade-down">
                                <p>
                                    {repo.name}
                                </p>   
                            </Link>
                        // </div>
                    )}
                </div>
            </div>
           
        </div>

     );
}
 
export default ReposList;