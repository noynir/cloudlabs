import {Response, Request} from "express";
import {StudentLoginResponse} from "../models/responses/studentLoginResponse";

export class StudentsController {

    static studentLogin(req: Request, res: Response) {

        const courseId = req.body["courseId"];
        const studentId = req.body["studentId"];



        return res.send(new StudentLoginResponse({
            "id" : 1,
            "name" : "nir noy",
            "email" : "nirn@sela.co.il",
            "vm" : null
        }));
    }
}

