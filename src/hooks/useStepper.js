import React from "react";

export const useStepper = ({ initialStep = 1, finishStep }) => {
  const [step, setStep] = React.useState(initialStep);

  const stepRef = React.useRef(null);

  React.useEffect(() => {
    let correctStep = step === 1 ? 0 : step - 1;

    if (stepRef)
      stepRef.current.style.transform = `translateX(-${correctStep * 100}%)`;
  }, [step]);

  const incrementStep = () => {
    if (step === finishStep) {
      return;
    } else {
      setStep((prev) => prev + 1);
    }
  };

  const decrementStep = () => {
    if (step !== initialStep) {
      setStep(step - 1);
    } else return;
  };

  return { step, stepRef, incrementStep, decrementStep };
};
