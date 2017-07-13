import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    constructor(private https: Http){}

    empID = '';
    displayEmpfirstname; displayEmplastname; displayEmpage; displayEmpgender; displayEmpemail; displayEmpphone; displayEmpaddress; displayEmpcompany = '';

   /* myFavLang = [
      {'name': 'html', 'type': 'frontend'},
      {'name': 'html', 'type': 'frontend'},
      {'name': 'html', 'type': 'frontend'},
      {'name': 'html', 'type': 'frontend'},
    ];*/

    ngOnInit() {
      this.https.get('http://localhost:3000/employees')
      .subscribe(
        (res: Response)=>{
         const empDetailsDisplay = res.json();
          console.log(empDetailsDisplay);
        }
      )   
    }

    searchEmp(){
      this.https.get('http://localhost:3000/employees/' + this.empID)
      .subscribe(
        (res: Response)=>{
          const empDetails = res.json();
          console.log(empDetails);
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
    }
}
