import FormData from "../form-data";
import { Pencil } from "lucide-react";

type EditableFieldProps = {
  fieldLabel: string;
  children: React.ReactNode
};

export default function EditableData({ fieldLabel, children }: EditableFieldProps) {
  return (
    <div className="flex gap-2 items-center">
      <FormData fieldLabel={fieldLabel}>{children}</FormData>
      <button className="cursor-pointer">
        <Pencil />
      </button>
    </div>
  );
}