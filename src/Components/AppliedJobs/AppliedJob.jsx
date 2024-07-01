import PropTypes from 'prop-types';
const AppliedJob = ({appliedJob}) => {
    const {logo, job_title, company_name, remote_or_onsite, location, salary} = appliedJob;
    return (
        <div>
            <div className="card card-body rounded-2xl border bg-base-200 shadow-2xl mt-5 mb-5">
  <figure>
    <img
      src={logo} />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{job_title}</h2>
    <p>{company_name}</p>
    <div className="card-actions justify-end">
      <p>{location}</p>
      <p>{remote_or_onsite}</p>
      <p>{salary}</p>
    </div>
  </div>
</div>
        </div>
    );
};

AppliedJob.propTypes ={
    appliedJob: PropTypes.object
}

export default AppliedJob;