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
                    jobsApplied.push(id)
                }
            }

            setAppliedJobs(jobsApplied);

            // console.log(jobs,storedJobIds, jobsApplied);
        }
    },[])

    return (
        <div>
            <p>Jobs i applied:{appliedJobs.length} </p>
        </div>
    );
};

export default AppliedJobs;