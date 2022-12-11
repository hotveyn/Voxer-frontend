import IQuestion from "@/interfaces/IQuestion";

export default interface ICategory {
    id: number;
    name: string;
    questions?: IQuestion[];
}
