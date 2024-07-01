import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../Utility/LocalStorage";
import AppliedJob from "./AppliedJob";

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
            <div className="mx-auto dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn m-1">Options</div>
            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] p-2 shadow">
            <li onClick={()=> jobFilter('all')}><a>All</a></li>
            <li onClick={()=> jobFilter('remote')}><a>Remote</a></li>
            <li onClick={()=> jobFilter('onsite')}><a>On Site</a></li>
            </ul>
            </div>
            <ul>
                {
                    displayJobs.map(appliedJob=> <AppliedJob key={appliedJob.id} appliedJob={appliedJob}></AppliedJob>)
                }
            </ul>
        </div>
    );
};

export default AppliedJobs;