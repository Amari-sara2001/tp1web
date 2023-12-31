import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ServiceEmpService} from "../../services/service-emp.service";
import {Employe} from "../../employe";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-emp',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-emp.component.html',
  styleUrl: './list-emp.component.css'
})
export class ListEmpComponent implements OnInit{
  ngOnInit(): void {
    this.showList();
  }
  EmpList: Employe[]=[];


  constructor(private empService:ServiceEmpService,private router:Router ) {
  }

  showList(){
    this.empService.getAllEmp().subscribe(
        (data :Employe[]) => {
          // Opérations à effectuer en cas de succès
          console.log('Données récupérées :', data);
          this.EmpList=data;
        },
        error => {
          // Gestion des erreurs
          console.error('Erreur lors de la requête :', error);
        }
    );

  }

  deleteAll() {
    this.EmpList=[];
  }

    modifierEmp(id: number) {
      this.router.navigate(['/update',id]);

    }

  supprimerEmp(id: number) {
    this.empService.deleteEmp(id).subscribe(
        (data) => {
          // Opérations à effectuer en cas de succès
          console.log('Données récupérées :', data);
          this.showList();

        },
        (error) => {
          // Gestion des erreurs
          console.error('Erreur lors de la requête :', error);
        }
    );

  }
}
