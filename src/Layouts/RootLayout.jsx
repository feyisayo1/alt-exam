import { Outlet, NavLink } from "react-router-dom";

const RootLayout = () => {
    return ( 
        <div>
            {/* <div className="nav">
                <h1 style={{textAlign:"start", color:"red", margin:"20px 0px"}}>repo</h1>
                <header>
                    <nav>
                        <NavLink to="/"><h3>Home</h3></NavLink>
                        <NavLink to="repo"><h3>Repo</h3></NavLink>
                    </nav>
                </header>
            </div> */}
           
            <main>
                <Outlet/>
            </main>
        </div>
     );
}
 
export default RootLayout;