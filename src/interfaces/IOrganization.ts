import IRegion from "@/interfaces/IRegion";

export default interface IOrganization {
    id: number;
    name: string;
    region?: IRegion;
}
