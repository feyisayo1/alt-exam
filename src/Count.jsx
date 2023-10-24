import { useState } from "react";

const Count  = () => {
    const [number , setNumber ] = useState(0)

    const addNum =  () => {
        setNumber(() => number + 1)
    }

    if(number > 5){
        throw Error ('Count too high')
    }

    return ( 
        <>
            <div className="firstLayer">
                <div className="wrapper">
                    <div>
                        <h2>Count: {number}</h2>
                        <button onClick={addNum}>Increase</button>
                        <h2>Increase the count past 5 to see the Error Boundary</h2>
                    </div>
                </div>
            </div>
           
        </>
     );
}
 
export default Count ;
