import MarkdownContent from "@/components/general/markdown-content";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CharacteristicItem } from "@/data/types-api";

interface CharacteristicModuleProps
  extends React.HTMLAttributes<HTMLDivElement> {
  square?: string;
  compressor?: string;
  wifi?: string;
  price?: string;
  btu_capacity?: string;
  refrigerant_type?: string;
  cooling_power?: string;
  heating_power?: string;
  operation_modes?: string;
  min_noise_level?: string;
  series?: string;
  max_line_length?: string;
  characteristics?: CharacteristicItem[];
  description?: string;
}

const CharacteristicModule: React.FC<CharacteristicModuleProps> = ({
  square,
  compressor,
  wifi,
  btu_capacity,
  refrigerant_type,
  cooling_power,
  heating_power,
  operation_modes,
  min_noise_level,
  series,
  max_line_length,
  characteristics,
  description,
}) => {
  const characteristicBaseArray = [
    {
      key: "Помещение м²",
      value: square,
    },
    {
      key: "Компрессор",
      value: compressor,
    },
    {
      key: "Wi-Fi",
      value: wifi,
    },
    {
      key: "Тип (мощность БТЕ/BTU)",
      value: btu_capacity,
    },
    {
      key: "Тип хладагента",
      value: refrigerant_type,
    },
    {
      key: "Мощность при охлаждении",
      value: cooling_power,
    },
    {
      key: "Мощность при обогреве",
      value: heating_power,
    },
    {
      key: "Режим работы",
      value: operation_modes,
    },
    {
      key: "Мин. уровень шума",
      value: min_noise_level,
    },
    {
      key: "Серия",
      value: series,
    },
    {
      key: "Макс. длина коммуникаций",
      value: max_line_length,
    },
  ];

  // console.log("characteristics", characteristics);
  return (
    <div className="mt-6">
      <Tabs defaultValue="description" className="w-full max-w-2xl">
        <TabsList>
          <TabsTrigger className="text-lg" value="description">
            Описание
          </TabsTrigger>
          <TabsTrigger className="text-lg" value="characteristic">
            Характеристики
          </TabsTrigger>
        </TabsList>
        <TabsContent value="description" className="w-full">
          <MarkdownContent className="-mt-4" content={description} />
        </TabsContent>
        <TabsContent value="characteristic">
          <table className="min-w-full divide-y divide-gray-300 border-b w-ful rounded-2xl overflow-hidden">
            <tbody className=" divide-y divide-gray-200">
              {characteristicBaseArray.map((i) => {
                return (
                  <tr key={i.key} className="bg-white even:bg-[#F9FAFB]">
                    <td className="px-3 py-4 text-sm table-cell">{i.key}</td>
                    <td className="px-3 py-4 text-sm whitespace-nowrap text-right  font-bold">
                      {i.value}
                    </td>
                  </tr>
                );
              })}
              {characteristics?.map((i) => {
                return (
                  <tr key={i.key} className="bg-white even:bg-[#F9FAFB]">
                    <td className="px-3 py-4 text-sm table-cell">{i.key}</td>
                    <td className="px-3 py-4 text-sm whitespace-nowrap text-right  font-bold">
                      {i.value}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default CharacteristicModule;
