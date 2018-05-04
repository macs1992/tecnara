import { Param } from "../model/index";

export const printParam=(param:Param):void => {
    console.log(param.name +": " +param.value);
}