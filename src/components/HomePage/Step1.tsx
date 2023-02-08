import { Stack, Input } from "@chakra-ui/react";

import NextBack from "./BackNext";

const Step1 = () => {
  return (
    <Stack>
      <Input placeholder="Edad" type="number" />
      <Input placeholder="Peso [kg]" type="number" />
      <Input placeholder="Altura [cm]" type="number" />
      <NextBack />
    </Stack>
  );
};

export default Step1;
