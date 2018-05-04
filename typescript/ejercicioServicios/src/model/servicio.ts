import { Param } from "./param";

export interface Servicio{
    id:string;
    action:(entry:Array<Param>,nameOut:string)=>Param;
}