import { Stack, CheckboxGroup, Checkbox } from "@chakra-ui/react";

import NextBack from "./BackNext";
type PhysicalCondition = "principiante" | "intermedio" | "avanzado";
const physicalConditions: PhysicalCondition[] = ["principiante", "intermedio", "avanzado"];

interface Props {
  handleNext: () => void;
  handleBack: () => void;
}

const Step2: React.FC<Props> = ({ handleBack, handleNext }) => {
  return (
    <CheckboxGroup colorScheme="green">
      <Stack spacing={[1, 5]}>
        <p>Condicion fisica</p>
        {physicalConditions.map((condition) => (
          <Checkbox key={condition} value={condition}>
            {condition}
          </Checkbox>
        ))}
      </Stack>
      <button onClick={handleBack}>Back</button>
      <button onClick={handleNext}>Next</button>
      <NextBack />
    </CheckboxGroup>
  );
};

export default Step2;
