export interface Goal {
  name: string;
  checked: boolean;
}

export interface Exercise {
  name: string;
  reps: number;
  percentage: number;
}

export interface Session {
  name: string;
  exercises: Exercise[];
  time: number;
}
