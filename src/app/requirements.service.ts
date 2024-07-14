import { Injectable } from '@angular/core';
import { requirementModel } from './requirements/requirements.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequirementsService {

  constructor(private http:HttpClient) { }

getRequirements(){
  return this.http.get('http://localhost:5000/Tracker')
}
addRequirement(item:requirementModel){
  console.log(item);
  return this.http.post('http://localhost:5000/insert',{"Tracker":item})
  .subscribe(data=>{console.log(data)})
}
}


