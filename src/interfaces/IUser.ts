import ICategory from "@/interfaces/ICategory";
import IOrganization from "@/interfaces/IOrganization";
import IType from "@/interfaces/IType";

export default interface IUser{
    id:number,
    first_name: string,
    last_name: string,
    father_name?: string,
    email: string,
    phone: string,
    type: IType,
    question_category?: ICategory,
    organization?: IOrganization,
    password?: string,
    api_token?: string
}