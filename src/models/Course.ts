import {Admin} from "./Admin";
import {Student} from "./Student";

export interface Course {
    id: number;
    name: string;
    admin: Admin;
    Students: Array<Student>;
}