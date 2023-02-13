import CompanyModel from "./CompanyModel";

class RecruiterModel {
    id: string;
    name: string;
    company: CompanyModel;

    constructor(id: string, name: string, company: CompanyModel) {
        this.id = id;
        this.name = name;
        this.company = company;
    }
}

export default RecruiterModel;