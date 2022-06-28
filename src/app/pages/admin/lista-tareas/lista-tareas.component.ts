import { Component, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ListarTareas } from 'src/app/model/IlistarTareas';
import { ListaTareasService } from 'src/app/services/lista-tareas.service';

@Component({
  selector: 'app-lista-tareas',
  templateUrl: './lista-tareas.component.html',
  styleUrls: ['./lista-tareas.component.css'],
})
export class ListaTareasComponent implements OnInit {
  // tareas: any = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];

  tareas: ListarTareas[] = [];
  enProceso: ListarTareas[] = [];
  terminadas: ListarTareas[] = [];

  arraycrearTarea: any[] = [];

  messageValidators!: UntypedFormGroup;

  constructor(private listaTareasService: ListaTareasService) {}

  formTareas = new UntypedFormGroup({
    tarea: new UntypedFormControl(null, Validators.required),
    fecha: new UntypedFormControl(null, Validators.required),
    direccion: new UntypedFormControl(null, Validators.required),
    realiza: new UntypedFormControl(null, Validators.required),
    idCliente: new UntypedFormControl(null, Validators.required),
    observaciones: new UntypedFormControl(null, Validators.required),
  });

  listarTareas() {
    this.listaTareasService.listarTareas().subscribe(
      (res) => {
        console.log(res);
        this.tareas = res;
      },
      (err) => console.log(err)
    );
  }

  // enProceso() {}

  // terminadas() {}
  crearTarea(): void {
    try {
      if (this.formTareas.valid) {
        const formDatos = new FormData();
        formDatos.append('tarea', this.formTareas.get('tarea')?.value);
        formDatos.append('fecha', this.formTareas.get('fecha')?.value);
        formDatos.append('idCliente', this.formTareas.get('idCliente')?.value);
        formDatos.append('direccion', this.formTareas.get('direccion')?.value);
        formDatos.append('realiza', this.formTareas.get('realiza')?.value);
        formDatos.append('observaciones', this.formTareas.get('observaciones')?.value
        );
        console.log(formDatos);
        // formDatos.append('uid', this.file);

        this.listaTareasService
          .crearTarea(formDatos) // paso los dos parametros como en el back, el body y el file
          .subscribe(
            (data) => {
              console.log('Response: ', data);
              this.formTareas.reset();
            },
            (err) => {
              console.log(err);
            }
          );
      } else !this.formTareas.valid;
      const value = this.formTareas.valid;
      console.log('formulario valido desde algular: ', value);
    } catch (error) {
      console.log('ERROR:', error);
    }
  }

  drop(event: CdkDragDrop<ListarTareas[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  ngOnInit(): void {
    this.listarTareas();
    // this.enProceso();
    // this.terminadas();

    this.formTareas = new UntypedFormGroup({
      tarea: new UntypedFormControl(null, Validators.required),
      fecha: new UntypedFormControl(null, Validators.required),
      direccion: new UntypedFormControl(null, Validators.required),
      realiza: new UntypedFormControl(null, Validators.required),
      idCliente: new UntypedFormControl(null, Validators.required),
      observaciones: new UntypedFormControl(null, Validators.required),
    });
  }
}
