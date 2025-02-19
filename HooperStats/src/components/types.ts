export interface Exercicio {
  nome: string;
  repeticoes: number;
}

export interface Treino {
  id: number;
  nome: string;
  exercicios: Exercicio[];
}