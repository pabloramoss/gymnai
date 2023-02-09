import { Stack, Button } from "@chakra-ui/react";

import { COLORS } from "@/constants";

const NextBack: React.FC = () => {
  return (
    <Stack direction="row">
      <Button background={COLORS.green} color={COLORS.background}>
        Atras
      </Button>
      <Button background={COLORS.green} color={COLORS.background}>
        Siguiente
      </Button>
    </Stack>
  );
};

export default NextBack;
