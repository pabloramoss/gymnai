import { Stack, Input, Button, CheckboxGroup, Box } from "@chakra-ui/react";
import { useSwiper } from "swiper/react";

import { COLORS } from "@/constants";
import { UserData } from "@/lib/types";

const sexList = [
  { label: "Hombre", value: "hombre" },
  { label: "Mujer", value: "mujer" },
];

type Sex = "hombre" | "mujer";

interface Props {
  userData: UserData;
  setUserData: (userData: UserData) => void;
}

const Step1: React.FC<Props> = ({ userData, setUserData }) => {
  const swiper = useSwiper();
  const { sex } = userData;

  const handleChangeSex = (e: any) => {
    const updatedUserData = { ...userData, sex: e.target.value };

    setUserData(updatedUserData);
  };

  const handleChangeAge = (e: any) => {
    const updatedUserData = { ...userData, age: e.target.value };

    setUserData(updatedUserData);
  };

  const handleChangeWeight = (e: any) => {
    const updatedUserData = { ...userData, weight: e.target.value };

    setUserData(updatedUserData);
  };

  const handleChangeHeight = (e: any) => {
    const updatedUserData = { ...userData, height: e.target.value };

    setUserData(updatedUserData);
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
        <Input placeholder="Edad" type="number" onChange={handleChangeAge} />
        <Input placeholder="Peso [kg]" type="number" onChange={handleChangeWeight} />
        <Input placeholder="Altura [cm]" type="number" onChange={handleChangeHeight} />
      </Box>
      <Button
        background={COLORS.green}
        color={COLORS.background}
        onClick={() => swiper.slideNext()}
      >
        Siguiente
      </Button>
    </Stack>
  );
};

export default Step1;
