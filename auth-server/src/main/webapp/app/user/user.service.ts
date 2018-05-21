import { Injectable } from '@angular/core';
import { Credencials } from './model/credencials.model';
import { User } from './model/user.model';
import { resolve } from 'dns';
import { HttpClient, HttpHeaders, } from '@angular/common/http';
import { RegistoModel } from './model/registo.model';
import { PageRequestModel } from '../common/model/page-request.model';
import { PagedResponse } from '../common/model/page-response.model';


@Injectable()
export class UserService {
    constructor(private http: HttpClient) { }

    getCurrent(): Promise<User> {
        return new Promise((resolve, reject) => {
            this.http.get<User>("asd").subscribe((user: User) => {
                resolve(user);
            }, (err) => {
                reject(err);
            });

        });
    }
    getCurrentWithToken(token: string): Promise<User> {
        const headers: HttpHeaders = new HttpHeaders({
            'x_auth_token': token
        });
        return new Promise((resolve, reject) => {
            this.http.get<User>("asd", {
                headers: headers
            }).subscribe((user) => {
                resolve(user);
            }, (err) => {
                reject(err);
            });

        });
    }
    registarUtilizador(registo: RegistoModel): Promise<User> {
        return new Promise((resolve, reject) => {
            this.http.post<User>("URL_REGISTAR_USER", registo).subscribe((user) => {
                resolve(user);
            }, (erro) => {
                reject(erro);
            });
        });

    }

    atualizarUtilizadorCurrent(user: User): Promise<any> {
        return new Promise((resolve, reject) => {
            this.http.put<User>("URL_ATUALIZAR_USER", user).subscribe((response) => {
                resolve(response);
            }, (erro) => {
                reject(erro);
            });
        });
    }

    atualizarUtilizador(user: User): Promise<any> {
        return new Promise((resolve, reject) => {
            this.http.put<User>("URL_ATUALIZAR_USER" + user.idUtilizador, user).subscribe((response) => {
                resolve(response);
            }, (erro) => {
                reject(erro);
            });
        });
    }

    listPaginado(page?: PageRequestModel): Promise<PagedResponse<User>> {
        if (!page) {
            page = PageRequestModel.buildForPage(0);
        }
        return new Promise((resolve, reject) => {
            this.http.get<PagedResponse<User>>("URL_USER" + '/paged', {
                params: page.getAsParams()
            }).subscribe((usersPage) => resolve(usersPage), (erro) => reject(erro))
        });
    }
    listaUtilizadores(idEmpresa: number, nome: string, email: string): Promise<User[]> {
        return new Promise((resolve, reject) => {
            this.http.get<User[]>("URL_USER" + '/' +
                (idEmpresa ? idEmpresa : '') + '&' +
                (nome ? nome : '') + '&' +
                (email ? email : '')).subscribe((utilizadores) => {
                    resolve(utilizadores);
                }, (erro) => {
                    reject(erro);
                });
        });
    }
    listaUtilizadoresPaginado(idEmpresa: number, nome: string, email: string, page?: PageRequestModel): Promise<PagedResponse<User>> {
        if (!page) {
            page = PageRequestModel.buildForPage(0);
        }
        return new Promise((resolve, reject) => {
            this.http.get<PagedResponse<User>>("URL_USER" + '/' +
                (idEmpresa ? idEmpresa : '') + '&' +
                (nome ? nome : '') + '&' +
                (email ? email : '') +
                '/paged', {
                    params: page.getAsParams()
                }).subscribe((page) => {
                    resolve(page);
                }, (erro) => {
                    reject(erro);
                });
        });
    }

  
}
