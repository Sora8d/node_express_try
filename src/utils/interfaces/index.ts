

type UserProp = {
    id: string,
    username: string,
    email: string,
    password: string
};

type UserPropRegister = {
    username: string,
    email: string,
    password: string
};

var UserRegisterDummie = {
    username: "",
    email: "",
    password: "",
}

type UserLogin = {
    email: string,
    password: string
};

var LoginDummie = {
    email: "",
    password: "",
}


type PostProp = {
    id: string,
    author: string,
    title: string,
    content: string
};

type Status = {
    code: number
    message?: string
}

type JSONResponse<T> = {
    data: T,
    response: Status
}

export {UserRegisterDummie, LoginDummie}
export type {UserProp, UserPropRegister, UserLogin, PostProp, JSONResponse, Status};