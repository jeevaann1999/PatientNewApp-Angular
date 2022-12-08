import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search-patient',
  templateUrl: './search-patient.component.html',
  styleUrls: ['./search-patient.component.css']
})
export class SearchPatientComponent {
  patientName=""
  searchData:any=[]
constructor(private api:ApiService){}

readValues=()=>{
  let data:any={
    "patientName":this.patientName
  }
  console.log(data)
  this.api.searchPatients(data).subscribe(
    (response:any)=>{
      console.log(response)
      if (response.length==0) {
        alert("No result found")
      } else {
        this.searchData=response
      }
    }
  )
}
deleteBtnClick=(patientName:any)=>{
  let data:any={"patientName":patientName}
  this.api.deletePatients(data).subscribe(
    (response:any)=>{
      console.log(response)
    }
  )
}
}
