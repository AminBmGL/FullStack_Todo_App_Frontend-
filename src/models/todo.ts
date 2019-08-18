export class Todo {
    constructor(private id :number ,
        private description:string,
        private done:boolean,
        private targetDate:Date,
        ){ }
}