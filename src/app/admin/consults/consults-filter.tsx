import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { ptBR } from "date-fns/locale";
import { DateRange } from "react-day-picker";
import { consults } from "@/consts/consults";

import ConsultInfo from "./consult-info";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function ConsultsFilter() {
  const [dateRange, setDateRange] = React.useState<DateRange | undefined>(
    undefined
  );

  const filteredConsults = consults.filter((consult: { date: string | number | Date; }) => {
    const apptDate = new Date(consult.date);
    if (dateRange?.from && apptDate < dateRange.from) return false;
    if (dateRange?.to && apptDate > dateRange.to) return false;
    return true;
  });

  return (
    <div className="flex flex-col p-4 space-y-4">
      <span>Filtrar por data:</span>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className="w-[280px] justify-start text-left font-normal"
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {dateRange?.from ? (
              dateRange?.to ? (
                <>
                  {format(dateRange.from, "dd/MM/yyyy", { locale: ptBR })} -{" "}
                  {format(dateRange.to, "dd/MM/yyyy", { locale: ptBR })}
                </>
              ) : (
                format(dateRange.from, "dd/MM/yyyy", { locale: ptBR })
              )
            ) : (
              <span>Selecione o período</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            className="font-poppins"
            mode="range"
            selected={dateRange}
            onSelect={setDateRange}
            numberOfMonths={2}
            locale={ptBR}
            formatters={{
              formatWeekdayName: (day) => {
                return format(day, "EEEEE", { locale: ptBR });
              },
            }}
          />
        </PopoverContent>
      </Popover>

      <div className="space-y-2">
        {filteredConsults.length > 0 ? (
          filteredConsults.map((consult: any, index: any) => (
              <ConsultInfo consult={consult} index={index} />
          ))
        ) : (
          <p className="text-sm text-gray-500">Nenhuma consulta encontrada.</p>
        )}
      </div>
    </div>
  );
}