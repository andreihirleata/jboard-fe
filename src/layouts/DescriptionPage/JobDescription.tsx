import JobModel from "../../models/JobModel";

type AppProps = {
  job: JobModel;
};

export const JobDescription = ({ job }: AppProps): JSX.Element => {

  return <div className="w-2/3 text-white mt-5 ml bg-slate-400">
    <h1>{job.jobTitle}</h1>
    <p>{job.location}</p>
    <p>{job.recruiter.company.name}</p>
    <p>{job.description}</p>
  </div>;
};

