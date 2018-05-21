
export class User{
    public idUtilizador: number;
    public primeiroNome: string;
    public ultimoNome: string;
    public email: string;
    public dataNascimento: Date;
    public mulher: boolean;
    public profissao?: string;
    public urlImagemPerfil?: string;
    public nrTelefone?: number;
    public nomeCompleto?: string;
    public perfil?: string;
    public idEmpresa?: number;
    public nomeEmpresa?:string
    public idLocal?: number;
    public ativo: boolean;
    public resultadoBiotipo : Number;
    public resultadoCronotipo : Number;


    constructor(
        idUtilizador?: number,
        primeiroNome?: string,
        ultimoNome?: string,
        email?: string,
        dataNascimento?: number,
        mulher?: boolean,
        profissao?: string, 
        urlImagemPerfil?: string,
        nrTelefone?: number,
        nomeCompleto?: string,
        perfil?: string,
        idEmpresa?: number,
        idLocal?: number,
        ativo?: boolean,
        resultadoBiotipo ?: Number,
        resultadoCronotipo ?: Number
    ){
    
    }

}