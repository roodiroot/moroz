import MarkdownContent from "@/components/general/markdown-content";
import OpenFeedbackButton from "@/components/general/open-feedback-button";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface OfferModulleProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  square?: string;
  compressor?: string;
  wifi?: string;
  price?: string;
  description_short?: string;
  btu_capacity?: string;
  brand?: string;
}
const OfferModulle: React.FC<OfferModulleProps> = ({
  title,
  square,
  compressor,
  wifi,
  price,
  description_short,
  btu_capacity,
  brand,
}) => {
  return (
    <Card className="flex-1 w-full lg:max-w-lg">
      <CardHeader>
        <CardTitle>
          <h1
            className={
              "text-2xl font-bold tracking-tight text-gray-900 md:text-5xl"
            }
          >
            <span className="font-normal text-3xl">Сплит-система</span>
            <br />
            <span className="text-3xl">{title}</span>
          </h1>
        </CardTitle>
        <CardDescription className="mt-4">
          <MarkdownContent content={description_short} />
        </CardDescription>
        <CardAction className="font-bold text-primary">{brand}</CardAction>
      </CardHeader>
      <CardContent className="flex-1">
        <table className="min-w-full divide-y divide-gray-300 border-b w-ful rounded-2xl overflow-hidden">
          <tbody className=" divide-y divide-gray-200">
            <tr className="bg-white even:bg-[#F9FAFB]">
              <td className="px-3 py-4 text-sm table-cell">Помещение м²:</td>
              <td className="px-3 py-4 text-sm whitespace-nowrap text-right  font-bold">
                {square}
              </td>
            </tr>
            <tr className="bg-white even:bg-[#F9FAFB]">
              <td className="px-3 py-4 text-sm table-cell">Wi-Fi:</td>
              <td className="px-3 py-4 text-sm whitespace-nowrap  font-bold text-right">
                {wifi}
              </td>
            </tr>
            <tr className="bg-white even:bg-[#F9FAFB]">
              <td className="px-3 py-4 text-sm table-cell">Компрессор:</td>
              <td className="px-3 py-4 text-sm whitespace-nowrap  font-bold text-right">
                {compressor}
              </td>
            </tr>
            <tr className="bg-white even:bg-[#F9FAFB]">
              <td className="px-3 py-4 text-sm table-cell">
                Тип (мощность БТЕ/BTU):
              </td>
              <td className="px-3 py-4 text-sm whitespace-nowrap  font-bold text-right">
                {btu_capacity}
              </td>
            </tr>
          </tbody>
        </table>
      </CardContent>
      <CardFooter className="flex justify-between">
        <OpenFeedbackButton>
          <Button>Узнать наличие</Button>
        </OpenFeedbackButton>
        <div className="text-2xl font-bold">
          ₽ {Intl.NumberFormat("Ru-ru").format(Number(price))}
        </div>
      </CardFooter>
    </Card>
  );
};

export default OfferModulle;
