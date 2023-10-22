import { Link, useLoaderData, useParams } from "react-router-dom"
import NotFound from "../NotFound";
export default function RepoDetail(){
    // const {id} = useParams()
    const repo = useLoaderData()
    console.log(repo);
    return(
        <div>
            <div className="repo-wrapper-container">
                {!repo.id  ? 
            <NotFound/> :
                    <div className="repo_wrapper">
                        <div className="card-details">
                            {/* <div> */}
                                <div className="img">
                                    <img src="https://avatars.githubusercontent.com/u/45480719?v=4" alt="Owners Profile picture"  />
                                </div>
                                <p  className="repo_detail_card_title"><b>Repo Name:</b> <span>{repo.full_name}</span></p> 
                                <p className="watchers"><b>Watchers: </b> <span>{repo.watchers_count}</span></p>
                                <p  className="forks"><b>Forks:</b> <span>{repo.forks_count}</span></p>
                                <p className="forks"><b>Url: </b> <span>{repo.url}</span></p>
                                <p className="desc-title"><b>Description:</b> <span>{repo.description}</span></p>
                                <p className="desc-title"><b>Description:</b>  <span>{repo.created_at}</span></p>
                                <p className="desc-title"><b>Description:</b> <span>{repo.updated_at}</span></p>
                                <p className="desc-title"><b>Description:</b> <span>{repo.svn_url}</span></p>
                                <div style={{display:"flex", justifyContent:"space-between"}} >
                                    <b><Link to='/' >➡ Go Home</Link></b>
                                    <b><a href={repo.svn_url} target="_blank">➡ Go To Repo Here</a></b>
                                </div>
                            
                            {/* </div> */}
                        </div>
                    </div>
            }
            </div>
   
        </div>
    )

}

//loader function 
export const  RepoDetailLoader = async ({params}) => {
    const { id } = params
    const res = await fetch(`https://api.github.com/repositories/${id}`)
    return res.json()
}



