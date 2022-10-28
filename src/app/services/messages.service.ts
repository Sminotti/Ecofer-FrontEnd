import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor(public snackBar: MatSnackBar) { }

  openMessage(message: string) {
    this.snackBar.open(message,'ok',{duration:2000});
  }
}
