import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { ProdutosService } from '../../services/produtos.service';
import { Produto } from '../../interfaces/produto.interface';
import { CardComponent } from '../../components/card/card.component';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { filter } from 'rxjs';
import { ConfirmationDialogService } from '../../services/confirmation-dialog.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CardComponent, RouterLink, MatButtonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {

  produtos = signal<Produto[]>(inject(ActivatedRoute).snapshot.data['produtos']);
  teste(){
    console.log(this.produtos());
  }
  
  
  
  produtosService = inject(ProdutosService);
  router = inject(Router);
  confirmationDialogService = inject(ConfirmationDialogService);

  onEdit(produto: Produto ){
    this.router.navigateByUrl(`/editar-produto/${produto.id}`);
  }

  onDelete(produto: Produto){
    this.confirmationDialogService.openDialog().subscribe((resposta: boolean) => {
    if (resposta){
      this.produtosService.delete(produto.id).subscribe(() => {
        this.produtosService.getAll().subscribe((produtos)=>{
          this.produtos.set(produtos);
        })
      
      });
      
    }
    })
  }




}
