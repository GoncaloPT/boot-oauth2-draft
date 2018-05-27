import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../../user/model/user.model';
import { NgbPopover, NgbPopoverConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  templateUrl: './center-view.component.html',
})
export class CenterViewComponent implements OnInit {
  @ViewChild('p') p: NgbPopover;
  private user: User;
  constructor(config: NgbPopoverConfig) {
    config.placement = 'bottom';
  }

  ngOnInit() {
    this.user = new User();
    this.user.fullName = 'Gonçalo Silva';
    this.user.authorities = ['Admin', 'User'];
  }

  //TODO
  logout() {
    return null;
  }

  isAdmin() {
    return (this.user.authorities.indexOf('Admin') > -1);
  }
}
