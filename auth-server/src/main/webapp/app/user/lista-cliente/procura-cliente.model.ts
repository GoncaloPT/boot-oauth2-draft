export class ProcuraClienteModel {
    nome?: string;
    idEmpresa?: number;
    email?: string;
    vazia(): boolean {
        return !this.nome && !this.idEmpresa && !this.email;
    }
    limpar(): void {
        this.nome = this.email = null;
        this.idEmpresa = null;
    }
}