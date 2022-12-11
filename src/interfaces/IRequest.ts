import IStatus from "@/interfaces/IStatus";

export default interface IRequest{
    id: 1
    status: IStatus
    date?: string
    need_date: string
    reason?: string
    result?: string
}
