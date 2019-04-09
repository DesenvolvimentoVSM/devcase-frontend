import { Estado } from 'src/app/pagina-estado/estado/shared/Estado.model';

export class Cidade {
    id: number;
    nome: string;
    estado = new Estado();
}
