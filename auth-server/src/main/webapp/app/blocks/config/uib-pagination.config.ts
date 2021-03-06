import { Injectable } from '@angular/core';
import { NgbPaginationConfig} from '@ng-bootstrap/ng-bootstrap';

@Injectable()
export class PaginationConfig {
    constructor(private config: NgbPaginationConfig) {
        config.boundaryLinks = true;
        config.maxSize = 5;
        config.pageSize = 10;
        config.size = 'sm';
    }
}
