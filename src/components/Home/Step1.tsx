import { Stack, Input, Button, Checkbox, CheckboxGroup, Box } from "@chakra-ui/react";
import { useSwiper } from "swiper/react";
import { useState } from "react";

import { COLORS } from "@/constants";

const sexList = [
  { label: "Hombre", value: "hombre" },
  { label: "Mujer", value: "mujer" },
];

type Sex = "hombre" | "mujer";

const Step1 = () => {
  const [sex, setSex] = useState<null | Sex>(null);
  const swiper = useSwiper();

  const handleChangeSex = (e: any) => {
    setSex(e.target.value);
  };

  return (
    <Stack height="100%" justify={"space-between"} p={10}>
      <Box>
        <CheckboxGroup colorScheme="green">
          <p>Sexo</p>
          <Stack direction="row" spacing={[1, 5]}>
            {sexList.map((option: any) => (
              <>
                <input
                  checked={option.value === sex}
                  type="checkbox"
                  value={option.value}
                  onChange={handleChangeSex}
                />
                <label onClick={handleChangeSex}>{option.label}</label>
              </>
            ))}
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
