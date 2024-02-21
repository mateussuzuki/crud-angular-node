import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal-color',
  templateUrl: './modal-color.component.html',
  styleUrls: ['./modal-color.component.scss']
})
export class ModalColorComponent {


  constructor(){}


  @Input() action!:string
  @Output() toggle: EventEmitter<void> = new EventEmitter<void>();

  toggleModal() {
    this.toggle.emit()
  }




}
