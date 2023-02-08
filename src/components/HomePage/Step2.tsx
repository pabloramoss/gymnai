import { Stack, CheckboxGroup, Checkbox } from "@chakra-ui/react";

import NextBack from "./BackNext";
type PhysicalCondition = "principiante" | "intermedio" | "avanzado";
const physicalConditions: PhysicalCondition[] = ["principiante", "intermedio", "avanzado"];

const Step2 = () => {
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
      <NextBack />
    </CheckboxGroup>
  );
};

export default Step2;
