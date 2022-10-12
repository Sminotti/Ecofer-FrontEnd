import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FiltrarObjejosArrayService {

  constructor() { }

  eliminaDuplicados = (arr: any) => {

    const arrMap = arr.map((elemento: any[]) => {
      return [JSON.stringify(elemento), elemento]
    });

    return [...new Map(arrMap).values()];
  }


}
