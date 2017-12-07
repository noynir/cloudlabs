
export abstract class BaseResponse<T> {
    success: boolean = true;
    error: string = null;
    data: T;

}