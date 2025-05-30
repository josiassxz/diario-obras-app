

export interface IRoadSection {
  id: number;
  kmInicial: number;
  kmFinal: number;
  extensao: number;
  status: 'Em Andamento' | 'Concluídos';
}