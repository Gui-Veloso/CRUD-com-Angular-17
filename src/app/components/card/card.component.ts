import { Component, EventEmitter, Output, computed, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Produto } from '../../interfaces/produto.interface';



@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  produto = input.required<Produto>();

  @Output() editar = new EventEmitter(); 
  @Output() deletar = new EventEmitter(); 

  nomeProduto = computed(() => this.produto().nome)

  onEdit(){
    this.editar.emit();
  }
  
  onDelete(){
    this.deletar.emit();
  }


}
