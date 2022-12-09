import IOrganization from "@/interfaces/IOrganization";

export default interface IRegion{
    id: number
    name: string
    organizations?: IOrganization
}