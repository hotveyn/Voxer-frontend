import ICategory from "@/interfaces/ICategory";

export default interface IQuestion{
    id: number
    description: string
    question_category?:ICategory
}