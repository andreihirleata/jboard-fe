import JobModel from "../../models/JobModel";

type AppProps = {
  job: JobModel;
};

export const JobDescription = ({ job }: AppProps): JSX.Element => {
  return (
    <div className=" text-white mt-5 mr-5 bg-primary rounded-md p-3">
      <h1>{job.jobTitle}</h1>
      <p>{job.location}</p>
      <p>{job.recruiter.company.name}</p>
      <p>{job.description}</p>
    </div>
  );
};
