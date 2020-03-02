import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators
} from "@angular/forms";
import { DiaperService } from '../shared/diaper-data/diaper.service';
import { DiaperDataService } from '../shared/diaper-data/diaper-data.service';
import { Diaper } from '../shared/diaper-data/diaper.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  formulario: FormGroup;
  diaper: Diaper;
  key: string;
  marca: string;
  modelo: string;
  tamanho: string;
  quantidade: number;

  constructor(private formBuilder: FormBuilder,
    private diaperService: DiaperService,
    private diaperDataService: DiaperDataService) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      marca: [''],
      modelo: [''],
      tamanho: [''],
      quantidade: [0]
    });
  }

  salvar(): void{
    if (this.key){

    } else {
      this.diaperService.insert(this.formulario.value)
      this.formulario.reset();
    }
  }

}
