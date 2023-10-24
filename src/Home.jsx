import { NavLink } from 'react-router-dom';
import Loading from './Loading';
import ReposList from './RepoList';
import useFetch from './custom-hooks/useFetch';
import me from './assets/me.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';



const Home = () => {
    const{ repos, error, loading} = useFetch('https://api.github.com/users/feyisayo1/repos')
    useEffect(() => {
      AOS.init({
        // offset: 200,
        duration: 600,
        // easing: 'ease-in-sine',
        delay: 100,
      });
    }, [])

    return (  
      <div className="page">
                    {/* <h1 style={{textAlign:"start", color:"red", margin:"20px 0px"}}>My Repo List</h1> */}

        <div className="landing-page-container">
          <div className="left-side">
            {/* <div className="nav" data-aos="fade-down">
                <h1 style={{textAlign:"start", color:"white", margin:"20px 0px"}}>OG</h1>
                <header>
                    <nav>
                        <NavLink to="/"><h3>Home</h3></NavLink>
                        <NavLink to="repo"><h3>Repo</h3></NavLink>
                        <NavLink to="profile"><h3>Profile</h3></NavLink>
                    </nav>
                </header>
            </div> */}

            {/* {repos && <ReposList repos={repos} title="My Repo List"/>}
            {loading && <Loading/>}
            {error && <div className='error'>{error}</div>} */}

            <div className='home' >

              <div data-aos="fade-right" >
                <p>Welcome to my repo page</p>
                <h3>Hello, I'm</h3> 
                <h2>David</h2>
                {/* <h4>Frontend Developer</h4> */}
                <h1>
                  I am Frontend Developer who is passionate about crafting visually stunning digital experiences that delight users and exceed expectations.<br/>
                  With meticulous attention to detail and pixel-perfect precision, I bring designs to life through clean, efficient, and maintainable code.<br/>
                  My expertise in HTML, CSS, JavaScript, VueJs and ReactJS enables me to develop responsive, intuitive, and highly functional interfaces that seamlessly integrate with backend systems.<br/>
                </h1>
              </div>
              <div className="pic" data-aos="fade-left">
                <img src={me} alt=""/>
              </div>
            </div>
            <div className='social-wrapper'>
              <div className='social'>
                <a href="https://twitter.com/_ichbindavid" target='_blank'>
                  <FontAwesomeIcon icon={faTwitter} bounce size="2xl" style={{color: "#bc4123",}} />
                </a>
                <a href="https:github.com/feyisayo1" target='_blank'>
                  <FontAwesomeIcon icon={faGithub} bounce size="2xl" style={{color: "#bc4123",}} />
                </a>
                <a href="https://www.linkedin.com/in/ogunleye-david-8a9b22194?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target='_blank'>
                  <FontAwesomeIcon icon={faLinkedin} bounce size="2xl" style={{color: "#bc4123",}} />
                </a>
              </div>
              <h3 style={{color:"white", marginTop:"20px"}}>Check out my 
                  <NavLink to="404" style={{ borderRadius:"4px", color:"#bc4123", fontSize:"30px", borderBottom:"3px solid #bc4123"}} > 404 page </NavLink>
              </h3>
              <h3 style={{color:"white", marginTop:"20px"}}>Check out my 
                  <NavLink to="count" style={{ borderRadius:"4px", color:"#bc4123", fontSize:"30px", borderBottom:"3px solid #bc4123"}} > Error boundary page </NavLink>
              </h3>
            </div>
          </div>
        </div>

      </div>
    );
}
 
export default Home;
