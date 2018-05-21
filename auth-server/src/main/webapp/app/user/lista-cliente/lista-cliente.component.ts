import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';
import { ProcuraClienteModel } from './procura-cliente.model';
import { Observable } from 'rxjs/Observable';
import { UserService } from '..';
import { User } from '../model/user.model';
import { PageRequestModel } from '../../common/model/page-request.model';
import { PagedResponse } from '../../common/model/page-response.model';
import { Location } from '@angular/common';

@Component({
  selector: 'hab-lista-cliente',
  templateUrl: './lista-cliente.component.html',
  styles: []
})
export class ListaClienteComponent implements OnInit {
  public procura: ProcuraClienteModel;
  public usersPage: PagedResponse<User>;
  public pagination: PageRequestModel;
  public loading: boolean;
  public lastLoadedPage: number;
  /* Para repor a lista caso alguem limpe */
  public usersOriginal: PagedResponse<User>;
  public voltarParaUrlAnterior = false;
  constructor(private activeRoute: ActivatedRoute,
    private service: UserService,
    private location: Location) {


  }

  ngOnInit() {
    this.procura = new ProcuraClienteModel();
    this.activeRoute.params.subscribe((params) => {
      this.voltarParaUrlAnterior = params['goBack'];
    })
  }
  procurar() {
    console.log(this.pagination);
    this.loading = true;
    this.service.listaUtilizadoresPaginado(this.procura.idEmpresa, this.procura.nome, this.procura.email, this.pagination)
      .then((usersPage) => {
        this.loading = false;
        this.usersPage = usersPage;
        this.pagination.totalElements = usersPage.totalElements;
      }).catch((err) => {
        this.loading = false;
        console.warn('listaUtilizadoresPaginado: ', err);
      });
  }
 
  /**
   * Limpa a ProcuraClienteModel
   */
  limpar(): void {
    this.procura.limpar();
    this.usersPage = this.usersOriginal;
  }
}
