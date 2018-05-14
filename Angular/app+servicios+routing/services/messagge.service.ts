import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessaggeService {
  usado:number=0;
  constructor() {}

  log(toWrite){
    this.usado++;
    console.log(toWrite);
  }
  error(toWrite){
    this.usado++;
    console.error(toWrite);
  }
  warn(toWrite){
    this.usado++;
    console.warn(toWrite);
  }
}
