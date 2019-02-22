import { Cidade } from 'src/app/pagina-cidades/cidade/shared/Cidade.model';

export class Cliente {
    id: number;
    nome: string;
    cpf: string;
    sexo: Sexo;
    celular: string;
    email: string;
    endereco: string;
    bairro: string;
    cep: string;
    cidade: Cidade = new Cidade();
    totalPontos: number;
}

export enum Sexo {
    Masculino = 'MASCULINO',
    Feminino = 'FEMININO'
}
