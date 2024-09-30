import { Component, inject } from '@angular/core';
import { ProdutosService } from '../../services/produtos.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, RouterLink } from '@angular/router';
import { FormComponent } from "../../components/form/form.component";
import { Produto } from '../../interfaces/produto.interface';

@Component({
  selector: 'app-criar',
  standalone: true,
  imports: [FormComponent, RouterLink],
  templateUrl: './criar.component.html',
  styleUrl: './criar.component.scss'
})
export class CriarComponent {

  produtosService = inject(ProdutosService);
  matSnackBar = inject (MatSnackBar);
  router = inject(Router);
  

  onSubmit(produto: Produto){
    this.produtosService.post(produto).subscribe(() => {
      this.matSnackBar.open('Produto criado com sucesso!', 'Ok', { 
        duration: 3000,
        horizontalPosition: 'right',
        verticalPosition: 'top'
      });
      this.router.navigateByUrl('/');
    });
  }
}
