export interface Goal {
  name: string;
  checked: boolean;
}

export interface Exercise {
  name: string;
  reps: number;
  makes: number;
  percentage: number;
}

export interface Session {
  id: string;
  name: string;
  exercises: Exercise[];
  time: number;
}
