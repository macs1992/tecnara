import {GestorDeServicios} from './classes/gestorDeServicios';
import {Param,Servicio} from './model/index';
import { printParam } from './utils/printParam';
let servs:Array<Servicio>=[];
let gestor:GestorDeServicios=new GestorDeServicios(servs);

const suma = (entry:Array<Param>,nameOut:string):Param =>
{   
    let obj:Param={
        name:nameOut,
        value:0
    }   
    for (let val of entry){
        obj.value+=val.value;
    }
    return obj;    
}
const media= (entry:Array<Param>,nameOut:string):Param =>
{
    let obj:Param={
        name:nameOut,
        value:0
    }  
    for (let val of entry){
        obj.value+=val.value;
    }
    obj.value=obj.value/entry.length;
    return obj;   
}
const mayor = (entry:Array<Param>,nameOut:string):Param =>
{
    let obj:Param={
        name:nameOut,
        value:0
    }  
    if (entry.length>0){
        obj.value=entry[0].value;
    }
    for (let val of entry){
        if(val.value>obj.value){
            obj.value=val.value;
        }        
    }
    return obj;   
}
const menor = (entry:Array<Param>,nameOut:string):Param =>
{
    let obj:Param={
        name:nameOut,
        value:0
    }  
    if (entry.length>0){
        obj.value=entry[0].value;
    }
    for (let val of entry){
        if(val.value<obj.value){
            obj.value=val.value;
        }        
    }
    return obj;   
}
let servicioMas:Servicio= {
    id:'suma',
    action: suma
}
gestor.addServicio(servicioMas);
let servicioMedia:Servicio= {
    id:'media',
    action: media
}
gestor.addServicio(servicioMedia);
let servicioMayor:Servicio= {
    id:'mayor',
    action: mayor
}
gestor.addServicio(servicioMayor);
let servicioMenor:Servicio= {
    id:'menor',
    action: menor
}
gestor.addServicio(servicioMenor);
let params:Array<Param> = [{name:'a',value:8},{name:'b',value:10},{name:'c',value:12}];


let servicios:string[]=gestor.getAllServices();
for (let i of servicios){
    console.log(i);
}

for (var i=0;i<servicios.length;i++){
    printParam(gestor.getServicioByIndex(i).action(params,'resultado'));
}