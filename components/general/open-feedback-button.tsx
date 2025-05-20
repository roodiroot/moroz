"use client";

import useFeedbackForm from "@/hooks/use-feedback-form";

const OpenFeedbackButton = ({ children }: { children: React.ReactNode }) => {
  const { onOpen } = useFeedbackForm();
  return <div onClick={onOpen}>{children}</div>;
};

export default OpenFeedbackButton;
