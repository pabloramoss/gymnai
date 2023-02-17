import { UserData } from "./types";

export const prompt: (UserData: UserData) => string = ({
  sex,
  age,
  weight,
  height,
  physicalCondition,
  trainingGoal,
  availableTime,
  daysOff: restDays,
  injuries,
}) =>
  `Genera una rutina de gimnasio para una persona de sexo ${sex} de ${age} años, que pesa ${weight} kg y mide ${height} cm. Su condición física es ${physicalCondition}, y su objetivo de entrenamiento es ${trainingGoal}. Tiene ${availableTime} diarias para entrenar, y los días que descansa son: ${restDays}. Sus lesiones o condiciones medicas son: ${injuries}`;
