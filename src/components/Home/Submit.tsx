import { Button, Stack, Text } from "@chakra-ui/react";
import { useState } from "react";

import { generateText } from "@/lib/api";
import { UserData } from "@/lib/types";
import { prompt } from "@/lib/constants";
interface Props {
  userData: UserData;
}
const Submit: React.FC<Props> = ({ userData }) => {
  const [routine, setRoutine] = useState<string>("");
  const [promptString, setPromptString] = useState("");
  const onClick = () => {
    generateText(prompt(userData)).then((res) => setRoutine(res));
  };

  return (
    <Stack>
      <Button onClick={onClick}>Enviar</Button>
      <Text>{routine ? routine : "No hay rutina"}</Text>
      <textarea
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setPromptString(e.target.value)}
      />
      <button onClick={() => generateText(promptString)}>prompt</button>
    </Stack>
  );
};

export default Submit;
