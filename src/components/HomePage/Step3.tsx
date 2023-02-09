import { Stack, CheckboxGroup, Checkbox } from "@chakra-ui/react";

import NextBack from "./BackNext";
type TrainingGoals = "aumentar fuerza" | "mejorar resistencia" | "perder peso";
const trainingGoals: TrainingGoals[] = ["aumentar fuerza", "mejorar resistencia", "perder peso"];

interface Props {
  handleNext: () => void;
  handleBack: () => void;
}

const Step3: React.FC<Props> = ({ handleBack, handleNext }) => {
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
      <button onClick={handleBack}>Back</button>
      <button onClick={handleNext}>Next</button>
      <NextBack />
    </CheckboxGroup>
  );
};

export default Step3;
