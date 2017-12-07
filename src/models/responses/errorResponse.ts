import {BaseResponse} from "./baseResponse";

export class ErrorResponse extends BaseResponse<any>{

    constructor(error: string){
        super();
        this.success = false;
        this.error = error;
    }
}