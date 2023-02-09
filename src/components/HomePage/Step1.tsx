import { Stack, Input, Button, Checkbox, CheckboxGroup } from "@chakra-ui/react";

import { COLORS } from "@/constants";

interface Props {
  handleNext: () => void;
}

const Step1: React.FC<Props> = ({ handleNext }) => {
  return (
    <Stack>
      <CheckboxGroup colorScheme="green">
        <p>Sexo</p>
        <Stack direction="row" spacing={[1, 5]}>
          <Checkbox value="hombre">Hombre</Checkbox>
          <Checkbox value="mujer">Mujer</Checkbox>
        </Stack>
      </CheckboxGroup>
      <Input placeholder="Edad" type="number" />
      <Input placeholder="Peso [kg]" type="number" />
      <Input placeholder="Altura [cm]" type="number" />
      <button onClick={handleNext}>Next</button>
      <Button background={COLORS.green} color={COLORS.background} onClick={handleNext}>
        Siguiente
      </Button>
    </Stack>
  );
};

export default Step1;
