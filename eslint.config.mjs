import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import { off } from "process";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      "@typescript-eslint/no-empty-object-type": "off", // Отключаем правило пустых интерфейсов
      "react-hooks/exhaustive-deps": "off", // отключаем правило для массива useEffect
      // "@typescript-eslint/no-unused-vars": "off" // Отключаем то что не используется !!!! Включить!!
      "@typescript-eslint/no-explicit-any": "off"
    },
  },
];

export default eslintConfig;
