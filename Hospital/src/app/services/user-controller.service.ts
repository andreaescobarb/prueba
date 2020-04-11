import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../servicio';

@Injectable({
  providedIn: 'root'
})
export class UserControllerService {
  url = 'https://localhost:44380/api/Users';
  constructor(private http: HttpClient) { }
  create(user: User) {
    this.http.post(this.url, JSON.stringify(user));
  }
  getUsers(){
    let promise = new Promise<User>((resolve, reject) => {
      this.http.get(this.url)
      .toPromise()
      .then( (response) => {
        resolve(response as User);
      }, (error) => {
        reject(error);
      })
  })
  return promise;
  }
  getDetails = (id): Promise<User> => {
    let urll = this.url + '/' + id;
    let promise = new Promise<User>((resolve, reject) => {
      this.http.get(urll)
        .toPromise()
        .then((response) => {
          resolve(response as User);
        }, (error) => {
          reject(error);
        })
    })
    return promise;
  }
}
