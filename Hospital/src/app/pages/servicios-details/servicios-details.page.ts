import { Servicio } from './../../servicio';
import { ServiciosControllerService } from './../../services/servicios-controller.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-servicios-details',
  templateUrl: './servicios-details.page.html',
  styleUrls: ['./servicios-details.page.scss'],
})
export class ServiciosDetailsPage implements OnInit {
  servicio:Servicio;
  id:string;
  constructor(private activatedRoute: ActivatedRoute, private controller:ServiciosControllerService) { }
  ionViewWillEnter(){
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.getServicio();
  }
  ngOnInit() {
  }
  getServicio() {
    this.controller.getDetails(this.id).then( (response) =>{
      this.servicio = response;
    }, (error) => {
      console.log("Error: " + error.statusText);
    })
  }


}