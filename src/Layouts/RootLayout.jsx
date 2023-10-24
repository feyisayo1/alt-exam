import { Outlet, NavLink } from "react-router-dom";

const RootLayout = () => {
    return ( 
        <div>
            <div style={{background:"#2b3452"}}>
                <div className="nav" data-aos="fade-down">
                    <h1 style={{textAlign:"start", color:"white", margin:"20px 0px"}}>OG</h1>
                    <header>
                        <nav>
                            <NavLink to="/"><h3>Home</h3></NavLink>
                            <NavLink to="repo"><h3>Repo-List</h3></NavLink>
                        </nav>
                    </header>

                </div>
             
            </div>
           
            <main>
                <Outlet/>
            </main>
        </div>
     );
}
 
export default RootLayout;