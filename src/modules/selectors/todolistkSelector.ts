import {AppRootStateType} from "../store";
import {   TasksPropsType} from "../../App";


export const taskSelector = (state:AppRootStateType):TasksPropsType=> state.tasks