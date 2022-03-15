import { client } from "../../clients/postgreClient";
import { UserProp, UserLogin, PostProp, UserPropRegister } from "../../utils/interfaces";

const user_insert = "INSERT into user (username, email, password) VALUES ($1, $2, $3);",
    user_select = "SELECT (id, username, email, password) from user where email=$1 and password=$2;"

const post_insert = "INSERT into post (author, title, content) VALUES ($1, $2, $3);",
    post_select_all = "SELECT (id, username, email, password) from post order by id;"


type UserRepoInterface = {
    Post(user: UserPropRegister):Promise<void>
    Login(loginInfo: UserLogin):Promise<UserProp[]>
}
type PostRepoInterface = {
    Post(post: PostProp):Promise<void>
    GetAll(): Promise<PostProp[]>
}


class pgUserFuncs {
    Post(user: UserPropRegister) {
        return client.post(user_insert, Object.values(user))
    };

    Login(loginInfo: UserLogin){
        return client.get<UserProp>(user_select, Object.values(loginInfo))  
    };
};

class pgPostFuncs {
    Post(post: PostProp){
        return client.post(post_insert, Object.values(post).slice(1))
    }
    GetAll(){
        return client.get<PostProp>(post_select_all)
    }
}

export {pgUserFuncs, pgPostFuncs};
export type {UserRepoInterface, PostRepoInterface}