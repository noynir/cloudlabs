import {BaseResponse} from "./baseResponse";
import {Student} from "../Student";

export class StudentLoginResponse extends BaseResponse<Student>{

    constructor(student: Student ){
        super();
        this.data = student;
    }
}