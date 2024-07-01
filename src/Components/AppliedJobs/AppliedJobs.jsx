import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../Utility/LocalStorage";

const AppliedJobs = () => {

    const jobs = useLoaderData();

    const [appliedJobs, setAppliedJobs] = useState([]);

    const [displayJobs, setDisplayJobs] = useState([]);

    const jobFilter = filter =>{
        if(filter === 'all'){
            setDisplayJobs(appliedJobs);
        }
        else if(filter === 'remote')
            {
                const remoteJobs = appliedJobs.filter(job=> job.remote_or_onsite === 'Remote');
                setDisplayJobs(remoteJobs);
            }
            else if(filter === 'onsite')
            {
                const onSiteJobs = appliedJobs.filter(job=> job.remote_or_onsite=== 'Onsite');
                setDisplayJobs(onSiteJobs);
            }
    }
    
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
            setDisplayJobs(jobsApplied);

            // console.log(jobs,storedJobIds, jobsApplied);
        }
    },[jobs])

    return (
        <div>
            <p>Jobs i applied:{appliedJobs.length} </p>
            <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn m-1">Click</div>
            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
            <li onClick={()=> jobFilter('all')}><a>All</a></li>
            <li onClick={()=> jobFilter('remote')}><a>Remote</a></li>
            <li onClick={()=> jobFilter('onsite')}><a>On Site</a></li>
            </ul>
            </div>
            <ul>
                {
                    displayJobs.map(job=> <li key={job.id}><span>{job.job_title}{job.company_name}:{job.remote_or_onsite}</span></li> )
                }
            </ul>
        </div>
    );
};

export default AppliedJobs;