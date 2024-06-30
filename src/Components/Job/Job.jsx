import PropTypes from 'prop-types';
import { CiLocationOn } from "react-icons/ci";
import { CiBadgeDollar } from "react-icons/ci";
import { Link } from 'react-router-dom';

const Job = ({job}) => {
    const {id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary} = job;
    return (
        <div>
            <div className="card card-compact bg-base-200  shadow-xl">
  <figure>
    <img className='mt-4'
      src={logo}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="text-xl font-bold">{job_title}</h2>
    <p className='font-semibold'>{company_name}</p>
    <div className="flex gap-2 mt-2">
        <button className="px-5 py-2 text-[#7E90FE] font-extrabold border rounded border-[#7E90FE]">{remote_or_onsite}</button>
        <button className="px-5 py-2 text-[#7E90FE] font-extrabold border rounded border-[#7E90FE]">{job_type}</button>
    </div>
    <div className='flex mt-3 mb-2'>
    <p className='flex p-2 gap-1'><CiLocationOn className='text-2xl'></CiLocationOn><span className='font-bold'>{location}</span></p>
    <p className='flex p-2 gap-1'><CiBadgeDollar className='text-2xl'></CiBadgeDollar><span className='font-bold'>{salary}</span></p>
    </div>
    <div className="card-actions">
    <Link to={`/job/${id}`}>
    <button className="btn text-white bg-gradient-to-r from-purple-400 to-blue-500 hover:from-blue-300 hover:to-purple-400 ">View Details</button>
    </Link>
    </div>
  </div>
</div>
        </div>
    );
};


export default Job;