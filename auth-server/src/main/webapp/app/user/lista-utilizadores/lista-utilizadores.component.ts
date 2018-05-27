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
  selector: 'hab-lista-utilizadores',
  templateUrl: './lista-utilizadores.component.html',
  styles: []
})
export class ListaUtilizadoresComponent implements OnInit {
  public procura: ProcuraClienteModel;
  public ultimaProcura: ProcuraClienteModel;
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
    this.service.getUsers().then((usersPage) => {
      this.usersOriginal = usersPage;
    })
  }

  procurar(paginacao?: boolean) {
    console.log(this.pagination);
    this.loading = true;
    if (paginacao) {
      this.procura = new ProcuraClienteModel(this.ultimaProcura.nome, this.ultimaProcura.login, this.ultimaProcura.email);
    } else {
      this.ultimaProcura = new ProcuraClienteModel(this.procura.nome, this.ultimaProcura.login, this.ultimaProcura.email);
    }  
    this.service.getUsersFiltered(this.procura.login, this.procura.nome, this.procura.email, this.pagination)
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
