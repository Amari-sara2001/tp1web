import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ServiceEmpService} from "../../services/service-emp.service";
import {Employe} from "../../employe";
import {FormsModule} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-emp',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './new-emp.component.html',
  styleUrl: './new-emp.component.css'
})
export class NewEmpComponent {
  emp:Employe =new Employe();
  constructor(private  service : ServiceEmpService, private router: Router) {
  }
  ajouterEmp(){
    this.service.AddEmp(this.emp);
    this.router.navigate(['/list']);

  }

}
