import { UserControllerService } from './../../services/user-controller.service';
import { mail } from './../login/login.page';
import { Router } from '@angular/router';
import { Paciente, Nacionalidad, Residencia, Ciudad, Usuario } from './../../servicio';
import { PacientesControllerService } from './../../services/pacientes-controller.service';
import { Component, OnInit } from '@angular/core';
import { usermail } from '../register/register.page';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.page.html',
  styleUrls: ['./user-data.page.scss'],
})
export class UserDataPage implements OnInit {
  Nacionalidades: Nacionalidad;
  Ciudades: Ciudad;
  Residencias: Residencia;
  temporal: Usuario;
  paciente = {
    "Nombre": "",
    "Apellido": "",
    "SegundoApellido": "",
    "Identidad": "",
    "Edad": 0,
    "Genero": "",
    "IDNacionalidad": 0,
    "Ciudad": 0,
    "Residencia": 0,
    "IDUser": 0
  };
  constructor(private controller: PacientesControllerService, private router: Router, private controllerUser: UserControllerService) { }
  ionViewWillEnter() {
    this.getLstNacionalidades();
    this.getLstCiudades();
    this.getLstResidencias(1);
    console.log(usermail);
  }
  ngOnInit() {
  }

  create() {
    if (this.paciente.Nombre != "" && this.paciente.Apellido != ""
      && this.paciente.Identidad != "" && this.paciente.Genero != undefined
      && this.paciente.IDNacionalidad != undefined) {
      this.controllerUser.getUsuarios().then((response) => {
        this.temporal = response;
        var flag = true;
        console.log(usermail);
        for (let data of ((this.temporal as unknown) as Iterable<Usuario>)) {
          if (data.Correo == usermail) {
            this.paciente.IDUser = data.IDUser;
            this.controller.create(this.paciente);
            this.router.navigate(['menu', 'tabs']);
          }
        }
      }, (error) => {
        console.log("Error: " + error.statusText);
      });
    }
  }
  getLstNacionalidades() {
    this.controller.getNacionalidades().then((response) => {
      this.Nacionalidades = response;
    }, (error) => {
      console.log("Error: " + error.statusText);
    })
  }
  getLstCiudades() {
    this.controller.getCiudades().then((response) => {
      this.Ciudades = response;
    }, (error) => {
      console.log("Error: " + error.statusText);
    })
  }
  getLstResidencias(id) {
    this.controller.getResidencias(id).then((response) => {
      this.Residencias = response;
    }, (error) => {
      console.log("Error: " + error.statusText);
    })
  }
  onChange() {
    this.getLstResidencias(this.paciente.Ciudad);
  }
}
