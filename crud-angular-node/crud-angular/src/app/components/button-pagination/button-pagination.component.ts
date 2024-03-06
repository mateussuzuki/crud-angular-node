import { Component, EventEmitter, Input, Output, numberAttribute } from '@angular/core';

@Component({
  selector: 'app-button-pagination',
  templateUrl: './button-pagination.component.html',
  styleUrls: ['./button-pagination.component.scss']
})
export class ButtonPaginationComponent {
  
  @Input() totalPags!:number
  @Input() currentPag!:number
  @Output() changePag:EventEmitter<number> = new EventEmitter<number>()
  
  constructor(){}
  
  
  getRange(totalPags:number) {
    let pags:any[] = []

    for(let a = 1; a <= totalPags; a++) {
      pags.push({
        numberPage: a,
        selected: a == this.currentPag
      })
    } 
    return pags
  }

  getPage(changePag:number) {
    this.currentPag = changePag
    this.changePag.emit(this.currentPag)
  }

}


