import { Stack, Textarea } from "@chakra-ui/react";

import NextBack from "./BackNext";
interface Props {
  handleBack: () => void;
}

const Step5: React.FC<Props> = ({ handleBack }) => {
  return (
    <Stack>
      <p>Lesiones o condiciones medicas</p>
      <Textarea />
      <button onClick={handleBack}>Back</button>
      <NextBack />
    </Stack>
  );
};

export default Step5;
