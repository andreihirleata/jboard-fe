import RecruiterModel from "./RecruiterModel";

class JobModel {
    id: string;
    jobTitle:string;
    description: string;
    recruiter: RecruiterModel;

    // TODO - refactor to arrays of string
    skills: string;
    location: string;

    salary: number;

    constructor(id: string,jobTitle:string, description: string,recruiter: RecruiterModel, skills: string,location:string,salary: number) {
        this.id = id;
        this.jobTitle = jobTitle;
        this.description = description;
        this.recruiter = recruiter;
        this.location = location;
        this.skills = skills;
        this.salary = salary;
    }
}

export default JobModel;