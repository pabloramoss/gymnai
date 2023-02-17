import { Stack, CheckboxGroup, Checkbox, Button } from "@chakra-ui/react";
import { useSwiper } from "swiper/react";

import { UserData } from "@/lib/types";
import { COLORS } from "@/constants";
type PhysicalCondition = "principiante" | "intermedio" | "avanzado";
const physicalConditions: PhysicalCondition[] = ["principiante", "intermedio", "avanzado"];

interface Props {
  userData: UserData;
  setUserData: (userData: UserData) => void;
}

const Step2: React.FC<Props> = ({ userData, setUserData }) => {
  const swiper = useSwiper();

  const handlePhysicalCondition = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setUserData({ ...userData, physicalCondition: value });
  };

  return (
    <Stack align={"center"} h="100%" justify="space-between" p={10} spacing={[1, 5]} width="100%">
      <Stack align={"center"} w="100%">
        <p>Condicion fisica</p>
        <Stack>
          <CheckboxGroup colorScheme="green">
            {physicalConditions.map((condition) => (
              <Checkbox
                key={condition}
                checked={userData.physicalCondition === condition}
                value={condition}
                onChange={handlePhysicalCondition}
              >
                {condition}
              </Checkbox>
            ))}
          </CheckboxGroup>
        </Stack>
      </Stack>
      <Button
        background={COLORS.green}
        color={COLORS.background}
        onClick={() => swiper.slidePrev()}
      >
        Atras
      </Button>
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

export default Step2;
