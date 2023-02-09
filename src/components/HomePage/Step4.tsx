import { Select, CheckboxGroup, Stack, Checkbox } from "@chakra-ui/react";

import NextBack from "./BackNext";
type DaysOff =
  | "lunes"
  | "martes"
  | "miercoles"
  | "jueves"
  | "viernes"
  | "sabado"
  | "domingo"
  | "definir automatico";

const dayOffs: DaysOff[] = [
  "lunes",
  "martes",
  "miercoles",
  "jueves",
  "viernes",
  "sabado",
  "domingo",
  "definir automatico",
];

interface Props {
  handleNext: () => void;
  handleBack: () => void;
}

const Step4: React.FC<Props> = ({ handleBack, handleNext }) => {
  return (
    <Stack>
      <p>Tiempo disponible</p>
      <Select placeholder="Tiempo disponible para entrenar">
        <option value="30 min">30 min</option>
        <option value="1 hora">1 hora</option>
        <option value="2 horas">2 horas</option>
        <option value="3 horas">3 horas</option>
      </Select>
      <CheckboxGroup colorScheme="green">
        <Stack spacing={[1, 5]}>
          <p>Dias de descanso</p>
          {dayOffs.map((day) => (
            <Checkbox key={day} value={day}>
              {day}
            </Checkbox>
          ))}
        </Stack>
      </CheckboxGroup>
      <button onClick={handleBack}>Back</button>
      <button onClick={handleNext}>Next</button>
      <NextBack />
    </Stack>
  );
};

export default Step4;
