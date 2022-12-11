export default interface IStatus {
    id: number;
    status: "NEW" | "ACCEPT" | "DECLINED" | "DONE";
}
