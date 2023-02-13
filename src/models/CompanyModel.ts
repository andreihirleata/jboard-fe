import RecruiterModel from "./RecruiterModel";

class CompanyModel {
    id: string;
    name: string;
    recruiters: RecruiterModel[];

    constructor(id: string, name: string,recruiters: RecruiterModel[]) {
        this.id = id;
        this.name = name;
        this.recruiters = recruiters;
    }
}

export default CompanyModel;