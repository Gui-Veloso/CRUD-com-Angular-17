import { Component, Injectable, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';


@Component({
  selector: 'modal-deletar',
  template: `
  <h2 mat-dialog-title>Deletar um produto</h2>
<mat-dialog-content>
  Tem certeza que quer deletar esse produto?
</mat-dialog-content>
<mat-dialog-actions align="end">
  <button mat-button (click)="onNo()" >Não</button>
  <button mat-raised-button (click)="onYes()" cdkFocusInitial>Sim, desejo deletar</button>
</mat-dialog-actions>
  `,
  standalone: true,
  imports: [MatButtonModule, MatDialogModule]
})
export class ModalDeletarComponent {
  matDialogRef = inject(MatDialogRef);
  onNo(){
    this.matDialogRef.close(false);
  }

  onYes(){
    this.matDialogRef.close(true);
  }

}

@Injectable({
  providedIn: 'root'
})
export class ConfirmationDialogService {
  matDialog = inject(MatDialog);

  constructor() { }

  openDialog():Observable<boolean> {
    return this.matDialog
    .open(ModalDeletarComponent).afterClosed();
  }

}
