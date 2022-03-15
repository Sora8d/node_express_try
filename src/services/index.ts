import { pgPostFuncs, pgUserFuncs, PostRepoInterface, UserRepoInterface } from "../repository/db_repository";
import { UserProp, UserLogin, PostProp, JSONResponse, UserPropRegister } from "../utils/interfaces";
import { encryptPass } from "../utils/encrypt";

type UserServiceInterface = {
    Post(user:UserPropRegister):Promise<void>
    Login(loginInfo:UserLogin):Promise<JSONResponse<UserProp | undefined>>
};
type PostServiceInterface = {
    Post(post:PostProp):Promise<void>
    GetAll():Promise<PostProp[]>
};


class UserService {
    dbRepo: UserRepoInterface

    constructor(dbRepo: UserRepoInterface){
        this.dbRepo = dbRepo;
    }

    Post(user:UserPropRegister){
        user.password = encryptPass(user.password)
        return this.dbRepo.Post(user)
    }

    Login(loginInfo: UserLogin){
        loginInfo.password = encryptPass(loginInfo.password)
        var response: JSONResponse<UserProp | undefined>
        return Promise.resolve(this.dbRepo.Login(loginInfo)
        .then((value) => {
            if (value.length = 1) {
            response.data = value[0]
            response.response.code = 200
        }   else {
            response.response.code = 401
        }
            return response
        })
        .catch((err) => {
            response.response.code = err.code
            response.response.message = err.message
            return response
        }))
    }
};

class PostService {
    dbRepo: PostRepoInterface

    constructor(dbRepo: PostRepoInterface){
        this.dbRepo = dbRepo;
    }

    Post(post: PostProp) {
        return this.dbRepo.Post(post)
    }

    GetAll(){
        return this.dbRepo.GetAll()
    }
}

export {UserService,PostService};
export type {UserServiceInterface, PostServiceInterface}