"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { formProfileSchema } from "@/schemas";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import InputPhoneMask from "@/components/ui/input-phone-mask";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { DialogFooter } from "@/components/ui/dialog";
import useFeedbackForm from "@/hooks/use-feedback-form";
import { sendMessagePopup } from "@/actions/sender";

const FeedbackForm = () => {
  const { onClose } = useFeedbackForm();

  const form = useForm<z.infer<typeof formProfileSchema>>({
    resolver: zodResolver(formProfileSchema),
    defaultValues: {
      phone: "",
      name: "",
      policy: false,
    },
  });

  async function onSubmit(values: z.infer<typeof formProfileSchema>) {
    const res = await sendMessagePopup(values);
    if (res.succsess) {
      form.reset();
      toast.success("Заявка успешно отправлена");
      onClose();
    } else {
      toast.error("Ошибка отправки формы, попробуйте позже");
    }
  }

  return (
    <Form {...form}>
      <form className="grid gap-4 py-4 px-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="relative flex-1 flex flex-col gap-0 mt-2 w-full">
              <FormLabel className="text-sm font-bold">Ваше имя</FormLabel>
              <FormControl>
                <Input
                  className="bg-white mt-2 w-full"
                  placeholder="Введите имя"
                  {...field}
                />
              </FormControl>
              <FormMessage className="absolute -bottom-4 text-xs" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field: { value, onChange } }) => (
            <FormItem className="relative flex-1 flex flex-col gap-0 mt-2 w-full">
              <FormLabel className="text-sm font-bold">
                Ваш номер телефона
              </FormLabel>
              <FormControl>
                <InputPhoneMask
                  setValue={onChange}
                  value={value}
                  className={cn(
                    "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
                    "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
                    "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
                    "bg-white mt-2 w-full"
                  )}
                />
              </FormControl>
              <FormMessage className="absolute -bottom-4 text-xs" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="policy"
          render={({ field }) => (
            <FormItem className="flex sm:items-center sm:gap-2 sm:mt-5">
              <FormControl>
                <Switch
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  className={cn(
                    form.formState.errors.policy &&
                      "border-2 border-destructive ring-1 ring-destructive"
                  )}
                />
              </FormControl>
              <label className="text-sm">
                Я согласен на обработку{" "}
                <a target="_blank" className="text-primary font-bold" href="">
                  персональных данных
                </a>
              </label>
            </FormItem>
          )}
        />
      </form>
      <DialogFooter className="bg-[#FAF8F8] px-6 pb-6 pt-4 flex gap-4">
        <Button variant="outline" className="flex-1">
          Отмена
        </Button>
        <Button
          type="submit"
          className="flex-1"
          onClick={form.handleSubmit(onSubmit)}
        >
          Вызвать мастера
        </Button>
      </DialogFooter>
    </Form>
  );
};

export default FeedbackForm;
