import { NumberValueAccessor } from '@angular/forms/src/directives';

export class Instructor {
    constructor(
        public Id:number,
        public Name:string,
        public UserName:string,
        public Password:string,
        public Role:string,
        public token?:string

    ){}
}
