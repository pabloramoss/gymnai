import { Select, CheckboxGroup, Stack, Checkbox, Button } from "@chakra-ui/react";
import { useSwiper } from "swiper/react";

import { UserData } from "@/lib/types";
import { COLORS } from "@/constants";
type DaysOff =
  | "lunes"
  | "martes"
  | "miercoles"
  | "jueves"
  | "viernes"
  | "sabado"
  | "domingo"
  | "definidos por ti";

const dayOffs: DaysOff[] = [
  "lunes",
  "martes",
  "miercoles",
  "jueves",
  "viernes",
  "sabado",
  "domingo",
  "definidos por ti",
];

interface Props {
  userData: UserData;
  setUserData: (userData: UserData) => void;
}

const Step4: React.FC<Props> = ({ userData, setUserData }) => {
  const swiper = useSwiper();

  const handleAvailableTime = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;

    setUserData({ ...userData, availableTime: value });
  };

  const handleDayOff = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setUserData({ ...userData, daysOff: value });
  };

  return (
    <Stack>
      <p>Tiempo disponible</p>
      <Select placeholder="Tiempo disponible para entrenar" onChange={handleAvailableTime}>
        <option value="30 min">30 min</option>
        <option value="1 hora">1 hora</option>
        <option value="2 horas">2 horas</option>
        <option value="3 horas">3 horas</option>
      </Select>
      <CheckboxGroup colorScheme="green">
        <Stack spacing={[1, 5]}>
          <p>Dias de descanso</p>
          {dayOffs.map((day) => (
            <Checkbox key={day} value={day} onChange={handleDayOff}>
              {day}
            </Checkbox>
          ))}
        </Stack>
      </CheckboxGroup>
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
      </Button>{" "}
    </Stack>
  );
};

export default Step4;
