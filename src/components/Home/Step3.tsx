import { Stack, CheckboxGroup, Checkbox, Button } from "@chakra-ui/react";
import { useSwiper } from "swiper/react";

import { UserData } from "@/lib/types";
import { COLORS } from "@/constants";
type TrainingGoals = "aumentar fuerza" | "mejorar resistencia" | "perder peso";
const trainingGoals: TrainingGoals[] = ["aumentar fuerza", "mejorar resistencia", "perder peso"];

interface Props {
  userData: UserData;
  setUserData: (userData: UserData) => void;
}
const Step3: React.FC<Props> = ({ userData, setUserData }) => {
  const swiper = useSwiper();

  const handleTrainingGoal = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setUserData({ ...userData, trainingGoal: value });
  };

  return (
    <CheckboxGroup colorScheme="green">
      <Stack spacing={[1, 5]}>
        <p>Objetivo del entrenamiento</p>
        {trainingGoals.map((goal) => (
          <Checkbox key={goal} value={goal} onChange={handleTrainingGoal}>
            {goal}
          </Checkbox>
        ))}
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
    </CheckboxGroup>
  );
};

export default Step3;
