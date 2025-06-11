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
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import InputPhoneMask from "@/components/ui/input-phone-mask";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { sendMessagePopup } from "@/actions/sender";

const HeroForm = () => {
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
    } else {
      toast.error("Ошибка отправки формы, попробуйте позже");
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-4 items-center sm:items-end sm:flex-row">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="relative flex-1 flex flex-col gap-0 mt-2 w-full">
                <FormLabel className="text-white text-sm font-bold">
                  Ваше имя
                </FormLabel>
                <FormControl>
                  <Input
                    className="bg-white mt-2 w-full"
                    placeholder="Введите имя"
                    {...field}
                  />
                </FormControl>
                {/* <FormDescription>
                  This is your public display name.
                </FormDescription> */}
                <FormMessage className="absolute -bottom-4 text-xs" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field: { value, onChange } }) => (
              <FormItem className="relative flex-1 flex flex-col gap-0 mt-2 w-full">
                <FormLabel className="text-white text-sm font-bold">
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

          <div className="w-full sm:hidden ">
            <FormField
              control={form.control}
              name="policy"
              render={({ field }) => (
                <FormItem className="flex items-center gap-2 ">
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
                  <label className="text-white text-sm">
                    Я согласен на обработку{" "}
                    <a
                      target="_blank"
                      className="text-primary font-bold"
                      href=""
                    >
                      персональных данных
                    </a>
                  </label>
                </FormItem>
              )}
            />
          </div>
          <Button className="w-full sm:w-auto">Вызвать мастера</Button>
        </div>
        <FormField
          control={form.control}
          name="policy"
          render={({ field }) => (
            <FormItem className="sm:flex sm:items-center sm:gap-2 sm:mt-5 hidden ">
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
              <label className="text-white text-sm">
                Я согласен на обработку{" "}
                <a
                  target="_blank"
                  className="text-primary font-bold"
                  href="/privacy-policy"
                >
                  персональных данных
                </a>
              </label>
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
};

export default HeroForm;
