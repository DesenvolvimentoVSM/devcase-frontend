import { Cliente } from 'src/app/pagina-cliente/cliente/shared/Cliente.model';
import { Pontuacao } from 'src/app/pagina-pontos/pontos/shared/Pontuacao.model';
import { TipoPagamento } from 'src/app/pagina-tipo-pagamento/tipo-pag/shared/TipoPagamento.model';

export class Venda {
    id: number;
    descricao: number;
    data: string;
    valor: number;
    cliente: Cliente = new Cliente();
    pontos: Pontuacao = new Pontuacao();
    tipoPag: TipoPagamento = new TipoPagamento();
}
