import { cn } from "@/lib/utils";

interface GeneralTitleProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  subtitle?: string;
  description?: string;
}
const GeneralTitle: React.FC<GeneralTitleProps> = ({
  title,
  subtitle,
  description,
  className,
  ...props
}) => {
  return (
    <div {...props} className={cn("max-w-3xl", className)}>
      {title && <h2 className="font-bold text-primary">{title}</h2>}
      {subtitle && (
        <p className="mt-2 text-4xl font-bold tracking-tight text-pretty sm:text-5xl">
          {subtitle}
        </p>
      )}
      {description && (
        <p className="mt-6 text-lg/8 text-gray-600 text-balance">
          {description}
        </p>
      )}
    </div>
  );
};

export default GeneralTitle;
