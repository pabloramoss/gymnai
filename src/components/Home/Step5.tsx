import { Button, Stack, Textarea } from "@chakra-ui/react";
import { useSwiper } from "swiper/react";
import { useState } from "react";

import { UserData } from "@/lib/types";
import { COLORS } from "@/constants";
import { generateText } from "@/lib/api";
interface Props {
  userData: UserData;
  setUserData: (userData: UserData) => void;
}
const Step5: React.FC<Props> = ({ userData, setUserData }) => {
  const [routine, setRoutine] = useState("");
  const [promptString, setPromptString] = useState("");
  const swiper = useSwiper();

  const handleInjuries = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;

    setUserData({ ...userData, injuries: value });
  };

  const onClick = () => {
    generateText(prompt(userData)).then((res) => setRoutine(res));
  };

  return (
    <Stack>
      <p>Lesiones o condiciones medicas</p>
      <Textarea onChange={handleInjuries} />
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

export default Step5;
