import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
 private state,token,username : string;

  constructor(private http : HttpClient) { }
}
