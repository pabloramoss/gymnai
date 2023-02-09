import { Button, Stack, Textarea } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";

// const HomePage: React.FC = () => {
//   return (
//     <Stack color="white">
//       <Step1 />
//       <Step2 />
//       <Step3 />
//       <Step4 />
//       <Step5 />import { motion } from 'framer-motion';

const HomePage: React.FC = () => {
  const [step, setStep] = useState(1);

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  return (
    <Stack color="white">
      <AnimatePresence>
        {step === 1 && (
          <motion.div animate={{ x: 0 }} exit={{ x: "-100%" }} initial={{ x: "100%" }}>
            <Step1 handleNext={handleNext} />
          </motion.div>
        )}
        {step === 2 && (
          <motion.div animate={{ x: 0 }} exit={{ x: "100%" }} initial={{ x: "-100%" }}>
            <Step2 handleBack={handleBack} handleNext={handleNext} />
          </motion.div>
        )}
        {step === 3 && (
          <motion.div animate={{ x: 0 }} exit={{ x: "-100%" }} initial={{ x: "100%" }}>
            <Step3 handleBack={handleBack} handleNext={handleNext} />
          </motion.div>
        )}
        {step === 4 && (
          <motion.div animate={{ x: 0 }} exit={{ x: "100%" }} initial={{ x: "-100%" }}>
            <Step4 handleBack={handleBack} handleNext={handleNext} />
          </motion.div>
        )}
        {step === 5 && (
          <motion.div animate={{ x: 0 }} exit={{ x: "-100%" }} initial={{ x: "100%" }}>
            <Step5 handleBack={handleBack} />
          </motion.div>
        )}
      </AnimatePresence>
    </Stack>
  );
};

//     </Stack>
//   );
// };

export default HomePage;
