import {  UserProp, UserLogin,  PostProp, JSONResponse, UserRegisterDummie, LoginDummie } from "../utils/interfaces";
import { encryptPass } from "../utils/encrypt";
import {UserServiceInterface,PostServiceInterface} from '../services/index';
import { isType } from "../utils/JSONTypeCheck";

type UserControllerInterface = {
    Post(user:UserProp):Promise<void | JSONResponse<undefined>>
    Login(loginInfo:any):Promise<JSONResponse<UserProp | undefined>>
}

type PostControllerInterface = {
    Post(post:PostProp):Promise<void>
    GetAll():Promise<PostProp[]>
}

class UserController {
    dbSvs: UserServiceInterface

    constructor(dbSvs: UserServiceInterface){
        this.dbSvs = dbSvs;
    }

    async Post(user:any){
        if (!isType(user, UserRegisterDummie)) {
            return new Promise<JSONResponse<undefined>>((resolve => {
                resolve({data: undefined, response: {code: 400, message: "bad body"}})
            }))
        }
        user.password = encryptPass(user.password)
        return this.dbSvs.Post(user)
    }

    async Login(loginInfo: any): Promise<JSONResponse<UserProp | undefined>>{
        if (!isType(loginInfo, LoginDummie)) {
            return new Promise<JSONResponse<undefined>>((resolve => {
                resolve({data: undefined, response: {code: 400, message: "bad body"}})
            }))
        }
        return this.dbSvs.Login(loginInfo)
    }
};

class PostController {
    dbSvs: PostServiceInterface

    constructor(dbSvs: PostServiceInterface){
        this.dbSvs = dbSvs;
    }

    async Post(post: PostProp) {
        return this.dbSvs.Post(post)
    }

    async GetAll(){
        return this.dbSvs.GetAll()
    }
}

export {UserController, PostController, PostControllerInterface, UserControllerInterface};