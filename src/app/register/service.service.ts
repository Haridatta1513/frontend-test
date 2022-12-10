import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

constructor(private http:HttpClient) { }
  registerData(urlencoded: any) {
    return this.http.post(`http://localhost:3000/api/register`, urlencoded);
  }
}
