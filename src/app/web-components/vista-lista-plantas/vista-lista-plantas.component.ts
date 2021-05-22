import { Component, OnInit } from '@angular/core';
import { DocumentsService } from '../../services/documents/documents.service'

import { Observable } from 'rxjs';

@Component({
  selector: 'app-vista-lista-plantas',
  templateUrl: './vista-lista-plantas.component.html',
  styleUrls: ['./vista-lista-plantas.component.css']
})
export class VistaListaPlantasComponent implements OnInit {

  plantas$: Observable<any[]>;

  constructor(private plantaService: DocumentsService) { }

  ngOnInit(): void {
    this.plantas$ = this.plantaService.getPlantas();
  }
}
