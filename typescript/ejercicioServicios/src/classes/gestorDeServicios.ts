import { Servicio } from "../model/index";

export class GestorDeServicios{
    private servicios:Array<Servicio>;
    constructor (servicios:Array<Servicio>) {
        this.servicios=servicios;
    }
    getServicioByIndex(index:number):Servicio{
        return this.servicios[index];
    }
    /*getServicioByName(name:string):Servicio{

    }*/
    addServicio(val:Servicio):void{
        this.servicios.push(val);
    }
    getAllServices():Array<string>{
        let names:Array<string>=[];        
        for (let i=0;i< this.servicios.length;i++){
            let name:string= i + ' - ' +this.servicios[i].id;
            names.push(name)
        }
        return names;
    }
}