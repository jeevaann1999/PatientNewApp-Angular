import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent {
  patientName=""
  patientid =""
  address =""
  contactNo ="" 
  dateofAppoint =""
  doctorName =""

  constructor(private api:ApiService){}

  readValues=()=>{
    let patient:any={
      "patientName":this.patientName,
      "patientid":this.patientid,
      "address":this.address,
      "contactNo":this.contactNo,
      "dateofAppoint":this.dateofAppoint,
      "doctorName" :this.doctorName
    }
    console.log(patient)
    this.api.addPatients(patient).subscribe(

      (response:any)=>{
        console.log(response)
      }
    )
  }
}
