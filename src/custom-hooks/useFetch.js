import { useState, useEffect } from "react"
import axios from "axios"
const useFetch = (url) => {
    const [repos, setRepos] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    
    console.log(repos);
    useEffect(() => {
        //using fetch here 
        // fetch(url)
        // .then((response) => response.json())
        // .then((data) => setPosts(data))
        // using axios here
        setTimeout(() => {
            axios
            .get(url)
            .then(response => {
                // console.log(response)
                if(response.status === 200){
                    console.log(response.data)
                    setRepos(response.data)
                    setLoading(false)
                    setError(null)
                }else{
                    throw Error ("can fetch from that resource")
                }
            }).catch(error => {
                if(error.name === 'AbortError'){
                    console.log('fetch aborted');
                }else{
                    setLoading(false)
                    setError(error.message = "No internet connection")
                    console.log(error, error.message)
                }
            })
        }, 1000)

    }, [url])

    const info = repos.map(repo => repo.name)
    console.log(info, repos);
  return { repos, loading, error, info }


}
export default useFetch;

