import { useEffect, useState } from "react";
import JobModel from "../../models/JobModel";
import { Job } from "./Job";
import { Spinner } from "flowbite-react";
import { JobDescription } from "../DescriptionPage/JobDescription";

export const JobPage = () => {
  const [jobList, setJobList] = useState<JobModel[]>([]);
  const [isLoadingJobs, setIsLoadingJobs] = useState(true);
  const [httpError, setHttpError] = useState(false);
  const [selectedJob, setSelectedJob] = useState<JobModel>();

  useEffect(() => {
    const fetchJobList = async () => {
      const url = `http://localhost:8080/api/job/`;
      const requestOptions = {
        method: "GET",
        "Content-Type": "application/json",
      };

      const response = await fetch(url, requestOptions);
      const responseJson = await response.json();
      setJobList(responseJson);
      setIsLoadingJobs(false);
    };
    fetchJobList().catch((error: any) => {
      setIsLoadingJobs(false);
      setHttpError(error.message);
    });
  }, []);

  if (httpError) {
    return (
      <div className="container mx-auto">
        <p className="text-red-700">{httpError}</p>
      </div>
    );
  }

  if (isLoadingJobs) {
    return (
      <div className="min-h-screen flex flex-col items-center">
        <Spinner
          className="mt-20"
          aria-label="Loading job list"
          color="info"
          size="xl"
        />
        <p className="font-medium font-size-20 mt-2">Loading</p>
      </div>
    );
  }

  return (
    <div className="flex flex-row bg-navy min-h-screen w-9/12 m-auto mt-10 mb-10 rounded-lg">
      <div>
        {jobList.length > 0 ? (
          jobList.map((job) => (
            <Job job={job} key={job.id} setSelectedJob={setSelectedJob}></Job>
          ))
        ) : (
          <></>
        )}
      </div>
      <div> {selectedJob ? <JobDescription job={selectedJob} /> : <></>}</div>
    </div>
  );
};
