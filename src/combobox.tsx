import { ChevronsUpDown, Check } from "lucide-react";
import { useState } from "react";
import { Button } from "~/ui/button";
import { cn } from "./lib/utils";
import { Popover, PopoverContent, PopoverTrigger } from "~/ui/popover";
import { useSnapshot } from "valtio";
import { store } from "./state";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "~/ui/command";

export function Combobox() {
  const frameworks = useSnapshot(store.frameworks);
  const user = useSnapshot(store.user);
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between"
        >
          {user.framework
            ? frameworks.find(
                (framework) => framework.value === store.user.framework
              )?.label
            : "Select framework..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent align="start" className="w-max p-0">
        <Command>
          <CommandInput placeholder="Search framework..." />
          <CommandEmpty>No framework found.</CommandEmpty>
          <CommandGroup>
            {frameworks.map((framework) => (
              <CommandItem
                className="cursor-pointer"
                key={framework.value}
                onSelect={(currentValue) => {
                  setOpen(false);
                  store.user.framework = currentValue;
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    store.user.framework === framework.value
                      ? "opacity-100"
                      : "opacity-0"
                  )}
                />
                {framework.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
