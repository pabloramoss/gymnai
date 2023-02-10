import { Stack, CheckboxGroup, Checkbox, Button } from "@chakra-ui/react";

import NextBack from "./BackNext";
type PhysicalCondition = "principiante" | "intermedio" | "avanzado";
const physicalConditions: PhysicalCondition[] = ["principiante", "intermedio", "avanzado"];

const Step2 = () => {
  return (
    <Stack align={"center"} h="100%" justify="space-between" p={10} spacing={[1, 5]} width="100%">
      <Stack align={"center"} w="100%">
        <p>Condicion fisica</p>
        <Stack>
          <CheckboxGroup colorScheme="green">
            {physicalConditions.map((condition) => (
              <Checkbox key={condition} value={condition}>
                {condition}
              </Checkbox>
            ))}
          </CheckboxGroup>
        </Stack>
      </Stack>
      <NextBack />
    </Stack>
  );
};

export default Step2;
