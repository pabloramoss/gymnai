import { Stack, Button } from "@chakra-ui/react";
import { useSwiper } from "swiper/react";

import { COLORS } from "@/constants";

const NextBack: React.FC = () => {
  const swiper = useSwiper();

  return (
    <Stack direction="row" w="100%">
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

export default NextBack;
