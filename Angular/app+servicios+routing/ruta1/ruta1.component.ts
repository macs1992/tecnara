import { Component, OnInit } from '@angular/core';
import { Persona } from '../model/Persona';

@Component({
  selector: 'app-ruta1',
  templateUrl: './ruta1.component.html',
  styleUrls: ['./ruta1.component.css']
})
export class Ruta1Component implements OnInit {
  title:string = '';
  active:boolean = false;
  text:string = "NO MOSTRAR IMAGEN";
  personaToAdd:Persona={name:"",surname:""}
  nombres:Array<Persona> = [{name:"Marcos",surname:"Allue"},
  {name:"David",surname:"Barreras"},
  {name:"Oliver",surname:"Hierro"}];
  constructor() { }

  ngOnInit() {
  }
  pushName(){
    
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
    this.nombres.splice(i,1);   
  }
}
