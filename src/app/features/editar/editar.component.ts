import { Component, inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ProdutosService } from '../../services/produtos.service';
import { Produto } from '../../interfaces/produto.interface';
import { FormComponent } from '../../components/form/form.component';

@Component({
  selector: 'app-editar',
  standalone: true,
  imports: [FormComponent, RouterLink],
  templateUrl: './editar.component.html',
  styleUrl: './editar.component.scss'
})
export class EditarComponent {

  produtosService = inject(ProdutosService);
  matSnackBar = inject (MatSnackBar);
  router = inject(Router);

  produto: Produto = inject(ActivatedRoute).snapshot.data['produto'];

  onSubmit(produto: Produto){
    this.produtosService.put(this.produto.id, produto).subscribe(() => {
      this.matSnackBar.open('Produto editado com sucesso!', 'Ok', { 
        duration: 3000,
        horizontalPosition: 'right',
        verticalPosition: 'top'
      });
      this.router.navigateByUrl('/');
    });
  }

}
