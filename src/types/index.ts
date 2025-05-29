

export interface IRoadSection {
  id: number;
  kmInicial: number;
  kmFinal: number;
  extensao: number;
  observacao: string;
  status: 'Em Andamento' | 'Concluídos';
}