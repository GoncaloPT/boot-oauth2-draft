export class ProcuraClienteModel {
    nome?: string;
    login?: string;
    email?: string;

    public constructor(nome?: string, login?: string, email?: string) {
        this.nome = nome;
        this.login = login;
        this.email = email;
    }


    vazia(): boolean {
        return !this.nome && !this.login && !this.email;
    }
    limpar(): void {
        this.nome = this.email = null;
        this.login = null;
    }
}