export class ILogin{
    constructor(
        public email:string,
        public password:string
    ){}
}

export class LoginRes{
    constructor(
        public auth:string,
        public token:string
    ){}
}


export interface userRes{
    _id:string,
    name:string,
    email:string,
    phone:string,
    role:string,
    __v:number
}
