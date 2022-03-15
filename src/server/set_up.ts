import { UserController, UserControllerInterface } from "../controller";
import { pgUserFuncs, UserRepoInterface } from "../repository/db_repository";
import { UserService, UserServiceInterface } from "../services";

const UserRepoInstance:UserRepoInterface = new pgUserFuncs()
const UserServiceInstance:UserServiceInterface = new UserService(UserRepoInstance);
const UserControllerInstance:UserControllerInterface = new UserController(UserServiceInstance);


export {UserControllerInstance};