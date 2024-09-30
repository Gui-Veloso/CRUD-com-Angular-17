import { Component, EventEmitter, Output, inject, input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { Produto } from '../../interfaces/produto.interface';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormField, MatLabel, MatInput, MatButtonModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  produto = input<Produto | null>(null);
  form!: FormGroup;

  @Output() salvar = new EventEmitter<Produto>();

  ngOnInit():void {
    this.form = new FormGroup({
      nome: new FormControl<string>(this.produto()?.nome || '', { 
      nonNullable: true, 
      validators: Validators.required})
    })
  }
  
  onSubmit(){
    const produto = this.form.value as Produto;
    this.salvar.emit(produto);
  }
}
