import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cat } from '../models/cat';

@Injectable({
  providedIn: 'root'
})
export class CatService {

  private BASE_URL = "https://api.thecatapi.com/v1/breeds"

  constructor(private http: HttpClient) { 
  }

  getAllCats(){
    return this.http.get<Cat>(this.BASE_URL)
  }

}