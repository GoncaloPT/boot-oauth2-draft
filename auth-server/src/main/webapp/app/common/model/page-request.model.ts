import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PaginationConfig } from '../../blocks/config/uib-pagination.config';

@Injectable()
export class PageRequestModel {

    public totalElements: number;

    public static build(): PageRequestModel {
      return new PageRequestModel(1, 5);
    }

    public static buildForPage(page: number): PageRequestModel {
      return new PageRequestModel(page, 5);
    }

    constructor(public page: number,
        public size: number,
        public sort?: string) {
    }

    public getAsParams(): HttpParams {
        /** É necessario duplicar para evitar que mudanças aqui façam trigger de 1 page change **/
        let _page: number = this.page;
        if (this.page > 0) {
            _page = this.page - 1;
        }
        const params: HttpParams = new HttpParams().set('page', _page.toString())
            .set('size', this.size.toString());
        if (this.sort) {
            params.set('sort', this.sort);
        }
        return params;
    }
}
