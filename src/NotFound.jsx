import { Link } from "react-router-dom";
import img404 from "./assets/img404.gif"

const NotFound = () => {
    return ( 
        <div>
            <div className="bg-wrapper">
                <div className="wrapper-404">
                    {/* <h2>Page not found</h2> */}
                    <div>

                    <div className="img-404">
                        {/* <img src={'https://www.lego.com/_next/static/images/emmet-346028b3b34aaad64f69c1158744e518.png'} alt="404 image"  /> */}
                        <img src={img404} alt="4040"/>
                        {/* <img src='https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?w=826&t=st=1697879557~exp=1697880157~hmac=2b0a3ab868a13c8dfce4e8661894ff8c318b357430f59a95ba64d63cd371f9b2' alt="404 image"  /> */}
                    </div>
                    <div className="text-404">
                        {/* <h1>
                            404
                        </h1> */}
                        <p>Sorry we can't find that page! Don't worry though, everything is STILL AWESOME! Go to the <Link to="/"><button>Home Page</button></Link></p>
                        
                    </div>
                    </div>
                
                </div>
            </div>
         
         
        </div>
     );
}
 
export default NotFound;