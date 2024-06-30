import { useLoaderData, useParams } from "react-router-dom";
import { CiBadgeDollar } from "react-icons/ci";
import { IoBagAddOutline } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../../Utility/LocalStorage";

const JobDetails = () => {
    const jobs = useLoaderData();
    const {id} = useParams();
    const intId = parseInt(id);
    const job= jobs.find(job=> job.id === intId)
    console.log(job)

    const handleApplyJobs = () =>{
        saveJobApplication(intId);
        toast('You Have Applied Successfully');
    }

    return (
        <div>
            <div>
            <h2 className="text-center">Job Details  </h2>
            </div>
            <div className="grid mt-28 mb-20 gap-4 md:grid-cols-4">
                <div className="border p-3 md:col-span-3">
                    <p className="font-bold mt-5 mb-5">Job Description: <span className="font-normal">{job.job_description}</span> </p>
                    <p className="font-bold mt-5 mb-5">Job Responsibility: <span className="font-normal">{job.job_responsibility}</span> </p>
                    <p className="font-bold mt-5 mb-5">Educational Requirements: <span className="font-normal">{job.educational_requirements}</span></p>
                    <p className="font-bold mt-5 mb-5">Experiences: <span className="font-normal">{job.experiences}</span> </p>
                </div>
                <div className="border p-3 bg-purple-100">
                    <h2 className="text-xl font-bold mt-3 mb-5">More Details:</h2>
                    <div>
                        <div className="flex mb-3">
                        <CiBadgeDollar className="text-2xl"></CiBadgeDollar> <p className="text-sm font-bold">Salary: <span className="font-normal">{job.salary}</span> </p>
                        </div>
                        <div className="flex mb-3">
                            <IoBagAddOutline className="text-2xl"></IoBagAddOutline>
                            <p className="text-sm font-bold">Job Title: <span className="font-normal">{job.job_title}</span> </p>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-xl font-bold">Contact Information</h2>
                        <div className="flex gap-1 mt-4 mb-3">
                            <FaPhoneAlt className="text-xl"></FaPhoneAlt>
                            <p className="text-sm font-bold">Phone: <span className="font-light">{job.contact_information.phone}</span></p>
                        </div>
                        <div className="flex mt-4 mb-3">
                            <MdOutlineEmail className="text-2xl"></MdOutlineEmail>
                            <p className="text-sm font-bold">Email: <span className="font-normal">{job.contact_information.email}</span> </p>
                        </div>
                        <div className="flex mb-3">
                            <CiLocationOn className="text-2xl"></CiLocationOn>
                            <p className="text-sm font-bold">Location: <span className="font-normal">{job.location}</span></p>
                        </div>
                    </div>
                </div>
                <button onClick={handleApplyJobs} className="btn p-5 rounded-xl mb-5 btn-primary bg-gradient-to-r from-purple-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500">Apply Now</button>
            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;