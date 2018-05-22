import { Component, OnInit } from '@angular/core';
import { User } from '../../user/model/user.model';

@Component({
  templateUrl: './center-view.component.html'
})
export class CenterViewComponent implements OnInit {
  private user: User;
  constructor() { }
  ngOnInit() {
    this.user = new User();
    this.user.nomeCompleto = 'Gonçalo Silva';
  }
}
