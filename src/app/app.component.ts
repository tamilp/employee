import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    constructor(private http: Http){}

     singleEmpShowHide: boolean = false;
     empListShowHide: boolean = true;

    empDetailsDisplay: '';
    empID; displayEmppicture; displayEmpfirstname; displayEmplastname; displayEmpage; displayEmpgender; displayEmpemail; displayEmpphone; displayEmpaddress; displayEmpcompany = '';

    ngOnInit() {
      this.http.get('http://localhost:3000/employees')
      .subscribe(
        empDetailsDisplay => this.empDetailsDisplay = empDetailsDisplay.json(), //Bind to view
        error => { console.log(error); } // Log errors if any 
      )   
    }

    searchEmp(){
      
      this.http.get('http://localhost:3000/employees/' + this.empID)
      .subscribe(
        (res: Response)=>{
          const empDetails = res.json();
          console.log(empDetails);
           this.displayEmppicture = empDetails.picture;
          this.displayEmpfirstname = empDetails.firstname;
          this.displayEmplastname = empDetails.lastname;
          this.displayEmpage = empDetails.age;
          this.displayEmpgender = empDetails.gender;
          this.displayEmpemail = empDetails.email;
          this.displayEmpphone = empDetails.phone;
          this.displayEmpaddress = empDetails.address;
          this.displayEmpcompany = empDetails.company;
        }
      )
      
      if (this.empID != '') {
        console.log("value");
        this.singleEmpShowHide = true
        this.empListShowHide = false
      }else{
        console.log("not value")
        this.singleEmpShowHide = false
        this.empListShowHide = true
      }
      
    }
}
