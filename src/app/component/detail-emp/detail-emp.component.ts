import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-detail-emp',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './detail-emp.component.html',
  styleUrl: './detail-emp.component.css'
})
export class DetailEmpComponent {
  employe={
    id:1,
    nom:"Ahmed",
    prenom:"Mohmed",
    email:"mohamed@gmail.com",

}
  etatEmp=false;
  modifierEmp(){
    this.employe={
      id:22,
      nom:"sara",
      prenom:"Mid",
      email:"midd@gmail.com",
    }
  };


  updateEmp() {
    
  }
}
