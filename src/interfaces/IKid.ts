import IUser from "@/interfaces/IUser";

export default interface IKid {
    id: number;
    first_name: string;
    last_name: string;
    father_name: string;
    parent: IUser;
}
