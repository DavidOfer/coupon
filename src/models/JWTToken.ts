export default class JWTToken{
        authorities:{authority:string}[];
        sub:string;
        iat:number;
        exp:number;
}