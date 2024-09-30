import { Produto } from "./produto.interface";

export type ProdutoPayload = Omit<Produto, "id">