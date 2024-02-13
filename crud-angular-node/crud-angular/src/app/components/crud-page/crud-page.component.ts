import { Component } from '@angular/core';
import { User } from 'src/app/interfaces/users';
import { userData } from 'src/app/interfaces/usersData';


@Component({
  selector: 'app-crud-page',
  templateUrl: './crud-page.component.html',
  styleUrls: ['./crud-page.component.scss']
})
export class CrudPageComponent {

  users: User[] = []

  toggle:boolean = true

  constructor() {}

  ngOnInit(): void {
  this.users = userData;
}

  toggleModal() {
    this.toggle = !this.toggle
  }

}