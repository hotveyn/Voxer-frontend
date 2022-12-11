import IKid from "@/interfaces/IKid";
import IQuestion from "@/interfaces/IQuestion";
import IRequest from "@/interfaces/IRequest";
import IReview from "@/interfaces/IReview";
import IUser from "@/interfaces/IUser";

export default interface IConsultation {
    id: number,
    kid: IKid,
    question: IQuestion,
    consultant: IUser,
    review: IReview,
    request: IRequest
}
