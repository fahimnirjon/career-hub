import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../Utility/LocalStorage";

const AppliedJobs = () => {

    const jobs = useLoaderData();

    const [appliedJobs, setAppliedJobs] = useState([]);
    
    useEffect(()=>{
        const storedJobIds = getStoredJobApplication();
        if(jobs.length > 0){
            // const jobsApplied = jobs.filter(job=> storedJobIds.includes(job.id))

            const jobsApplied = [];
            for(const id of storedJobIds){
                const job = jobs.find(job=> job.id == id);
                if(job){
                    jobsApplied.push(job)
                }
            }

            setAppliedJobs(jobsApplied);

            // console.log(jobs,storedJobIds, jobsApplied);
        }
    },[])

    return (
        <div>
            <p>Jobs i applied:{appliedJobs.length} </p>
            <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn m-1">Click</div>
            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
            <li><a>All</a></li>
            <li><a>Remote</a></li>
            <li><a>On Site</a></li>
            </ul>
            </div>
            <ul>
                {
                    appliedJobs.map(job=> <li key={job.id}><span>{job.job_title}{job.company_name}:{job.remote_or_onsite}</span></li> )
                }
            </ul>
        </div>
    );
};

export default AppliedJobs;