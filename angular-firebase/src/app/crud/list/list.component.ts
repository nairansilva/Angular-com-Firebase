import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DiaperService } from '../shared/diaper-data/diaper.service';
import { DiaperDataService } from '../shared/diaper-data/diaper-data.service';
import { Diaper } from '../shared/diaper-data/diaper.model';

export interface PeriodicElement {
  marca: string;
  modelo: string;
  tamanho: string;
  quantidade: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {modelo: "A", marca: 'Hydrogen', tamanho: "P", quantidade: 1},
  {modelo: "B", marca: 'Helium', tamanho: "M", quantidade: 2}
 ];

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
   dataSource: Observable<any>;
 
  displayedColumns: string[] = ['modelo', 'marca', 'tamanho', 'quantidade', 'editar', 'excluir'];
  constructor(private diaperService: DiaperService,
              private diaperDataService: DiaperDataService) { }

  ngOnInit(): void {
    this.dataSource = this.diaperService.getAll()    
  }

  editar(row){
    console.log(row)
  }

  excluir(row){
    console.log(row)
  }

}
