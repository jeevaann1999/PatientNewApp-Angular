import { Component } from '@angular/core';

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

  readValues=()=>{
    let patient:any={
      "patientName":this.patientName,
      "patientid":this.patientid,
      "address":this.address,
      "contactNo":this.contactNo,
      "dateofAppoint":this.dateofAppoint,
      "doctorName" :this.doctorName
    }
  }
}
