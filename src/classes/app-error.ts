import { IError } from './../interfaces/error.interface';

export class AppError implements IError {
    code: number;
    field: string;
    message: string;

    constructor(code: number, field: string, message: string) {
        this.code = code;
        this.field = field;
        this.message = message;
    }
}
