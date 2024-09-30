import { ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { ListComponent } from './features/list/list.component';
import { CriarComponent } from './features/criar/criar.component';
import { EditarComponent } from './features/editar/editar.component';
import { inject } from '@angular/core';
import { ProdutosService } from './services/produtos.service';
// linha 14, utilizamos a função de lazy loading, para carregar o componente somente quando existe uma demanda!! ( ajuda principalmente para não sobrecarregar o site quando houver um aumento de escala!)
export const routes: Routes = [{
    path:'',
    resolve: {
        produtos: () => {
            const produtosService = inject(ProdutosService)
            return produtosService.getAll();
        }
    },
    component: ListComponent
},
{
    path:'criar-produto',
    loadComponent: () => import('./features/criar/criar.component').then(m => m.CriarComponent),
},
{
    path:'editar-produto/:id',
    resolve:{
        produto: (route:ActivatedRouteSnapshot , state: RouterStateSnapshot) => {
            const produtosService = inject(ProdutosService);
            return produtosService.get(route.paramMap.get('id') as string)
        },
    },
    loadComponent: () => import('./features/editar/editar.component').then(m => m.EditarComponent),
}

];
