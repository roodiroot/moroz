"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import LogoHeader from "../../logo";
import useFeedbackForm from "@/hooks/use-feedback-form";
import FeedbackForm from "../../forms/feedback-form";

export function FeedbackModal() {
  const { isOpen, toggle } = useFeedbackForm();
  return (
    <Dialog open={isOpen} onOpenChange={toggle}>
      <DialogContent className="top-4 translate-y-0 md:-translate-y-1/2 md:top-1/2 p-0 overflow-hidden sm:max-w-[511px] gap-0 rounded-3xl">
        <DialogHeader className="px-6 pt-6 pb-4">
          <LogoHeader className="-ml-3" />
          <DialogTitle className="text-base text-primary font-bold text-start">
            Обратная связь
          </DialogTitle>
          <div className="text-3xl sm:text-4xl font-bold  text-start">
            Добро пожаловать
          </div>
          <DialogDescription className="text-base mt-2 text-start">
            Оставьте свой номер — мы перезвоним, ответим на все вопросы и
            предложим удобное решение.
          </DialogDescription>
        </DialogHeader>
        <FeedbackForm />
      </DialogContent>
    </Dialog>
  );
}
