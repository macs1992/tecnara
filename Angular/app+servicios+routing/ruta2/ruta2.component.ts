import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MessaggeService } from '../services/messagge.service';

@Component({
  selector: 'app-ruta2',
  templateUrl: './ruta2.component.html',
  styleUrls: ['./ruta2.component.css']
})
export class Ruta2Component implements OnInit {
  parametroruta:string;
  constructor(private activatedRoute:ActivatedRoute,private servLog:MessaggeService) { }

  ngOnInit() {
    this.servLog.log("hola");
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.parametroruta = id;
  }

}
