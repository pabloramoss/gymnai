import { Stack, Input, Button, Checkbox, CheckboxGroup, Box } from "@chakra-ui/react";
import { useSwiper } from "swiper/react";

import { COLORS } from "@/constants";

const Step1 = () => {
  const swiper = useSwiper();

  return (
    <Stack height="100%" justify={"space-between"} p={10}>
      <Box>
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
      </Box>
      <Button background={COLORS.green} color={COLORS.background} onClick={() => swiper.slideNext}>
        Siguiente
      </Button>
    </Stack>
  );
};

export default Step1;
