import {AppRootStateType} from "../store";
import {   TodolistType} from "../../App";


export const todolistkSelector = (state:AppRootStateType):TodolistType[]=> state.todolists