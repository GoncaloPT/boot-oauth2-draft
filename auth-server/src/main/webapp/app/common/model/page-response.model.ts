export class PagedResponse<T> {
    content: Array<T>;
    totalPages: number;
    totalElements: number;
    last: boolean;
    first: boolean;
    number: number;
    numberOfElements: number;
}
