import { Component, Output } from '@angular/core';
import { Persona } from './model/Persona';
import { MessaggeService } from './services/messagge.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = '';
  param:string = 'param2';
  active:boolean = false;
  text:string = "NO MOSTRAR IMAGEN";
  personaToAdd:Persona={name:"",surname:""}
  nombres:Array<Persona> = [{name:"Marcos",surname:"Allue"},
  {name:"David",surname:"Barreras"},
  {name:"Oliver",surname:"Hierro"}];
  constructor (private mesServ:MessaggeService){}
  mostrarImagen(){
    this.mesServ.log("Hola");
    
    if(this.active){
      this.active=false;
      this.text="NO MOSTRAR IMAGEN";
    } else {
      this.active=true;
      this.text="MOSTRAR IMAGEN";
    }
  }
  pushName(){
    this.mesServ.warn("añadiendo persona");
    this.nombres.push(this.personaToAdd);
    this.personaToAdd={name:"",surname:""}
  }
  validatePerson(){
    if(this.personaToAdd.name===""){
      return false;
    } else if(this.personaToAdd.surname===""){
      return false;
    } else{
      return true;
    }
  }
  delete(i){
    this.mesServ.error("Estas borrando");
    this.nombres.splice(i,1);   
  }


}
