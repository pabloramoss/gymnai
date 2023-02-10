import { Stack, CheckboxGroup, Checkbox } from "@chakra-ui/react";

import NextBack from "./BackNext";
type TrainingGoals = "aumentar fuerza" | "mejorar resistencia" | "perder peso";
const trainingGoals: TrainingGoals[] = ["aumentar fuerza", "mejorar resistencia", "perder peso"];

const Step3: React.FC = () => {
  return (
    <CheckboxGroup colorScheme="green">
      <Stack spacing={[1, 5]}>
        <p>Objetivo del entrenamiento</p>
        {trainingGoals.map((goal) => (
          <Checkbox key={goal} value={goal}>
            {goal}
          </Checkbox>
        ))}
      </Stack>
      <NextBack />
    </CheckboxGroup>
  );
};

export default Step3;
