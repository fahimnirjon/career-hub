import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJob = () => {

    const [jobs, setJobs] = useState([]);
    const[dataLength, setDataLength] = useState(4);


    useEffect(()=>{
        fetch('jobs.json')
        .then(res=> res.json())
        .then(data=> setJobs(data));
    },[])

    return (
        <div>
            <div className="text-center">
            <p className="text-5xl text-blue-400">Featured Jobs</p>
            <p className="text-2xl font-light mb-5">Your Dream Jobs Are here.Explore More and Take The opportunity to lead the generation.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {
                    jobs.slice(0, dataLength).map(job=> <Job key={job.id} job={job}></Job> )
                }
            </div>
           <div className={dataLength === jobs.length && 'hidden'}>
           <button onClick={()=> setDataLength(jobs.length)} className="text-center btn mt-5 mb-5 btn-primary bg-gradient-to-r from-purple-400 to-blue-500 hover:from-blue-300 hover:to-purple-400 text-white">Show All Jobs</button>
           </div>
        </div>
    );
};

export default FeaturedJob;