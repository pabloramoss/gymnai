export interface UserData {
  sex: string;
  age: number;
  weight: number;
  height: number;
  physicalCondition: string;
  trainingGoal: string;
  availableTime: string;
  daysOff: string;
  injuries: string;
}

export const InitialUserData: UserData = {
  sex: "",
  age: 0,
  weight: 0,
  height: 0,
  physicalCondition: "",
  trainingGoal: "",
  availableTime: "",
  daysOff: "",
  injuries: "",
};
