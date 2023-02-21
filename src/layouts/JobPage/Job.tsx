import JobModel from "../../models/JobModel";
import { Button } from "flowbite-react";

type AppProps = {
  job: JobModel;
  setSelectedJob: any;
};

export const Job = ({ job, setSelectedJob }: AppProps): JSX.Element => {
  return (
    <div className="bg-primary flex flex-row justify-between m-5  shadow-lg w-[356px] h-[162px]}">
      <div className="m-3 text-white">
        <p className="font-bold text-blue">{job.jobTitle}</p>
        <p className="font-semibold">{job.recruiter.company.name}</p>
        <p className="font-semibold">Recruiter: {job.recruiter.name}</p>
      </div>
      <div className="m-3 text-white">
        <p className="font-medium">£ {job.salary}</p>
        <p className="font-medium">{job.skills}</p>
        <Button
          color="purple"
          onClick={() => {
            setSelectedJob(job);
          }}
        >
          Details
        </Button>
      </div>
    </div>
  );
};
