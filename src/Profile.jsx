import { NavLink } from "react-router-dom";

const Profile = () => {
    return (
        <div>
                <div className="nav">
                        <h1 style={{textAlign:"start", color:"white", margin:"20px 0px"}}>OG</h1>
                        <header>
                            <nav className="check">
                                <NavLink to="/"><h3>Home</h3></NavLink>
                                <NavLink to="/repo"><h3>Repo</h3></NavLink>
                                <NavLink to="profile"><h3>Profile</h3></NavLink>
                            </nav>
                        </header>
                </div>
         <h1>Profile</h1>

        </div>
     );
}
 
export default Profile;