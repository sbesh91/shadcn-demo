import { AccessibilityIcon } from "lucide-react";
import { Button } from "~/ui/button";
import { Checkbox } from "~/ui/checkbox";
import { Label } from "~/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "~/ui/popover";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "~/ui/tooltip";
import { Modal } from "./modal";
import { useSnapshot } from "valtio";
import { watch } from "valtio/utils";
import { store, useMapKey } from "./state";
import { Users } from "./users";
import { useEffect } from "react";

watch((get) => {
  get(store.theme);

  document.body.className = store.theme.value;
});

function App() {
  const theme = useSnapshot(store.theme);

  function toggleTheme() {
    if (store.theme.value === "light") {
      store.theme.label = "Dark";
      store.theme.value = "dark";
      return;
    }
    store.theme.label = "Light";
    store.theme.value = "light";
  }

  return (
    <div className="bg-white dark:bg-slate-700 transition-colors h-full flex flex-col justify-center">
      <div className="grid justify-center gap-2">
        <Popover>
          <PopoverTrigger asChild>
            <Button size="icon" variant="outline">
              <AccessibilityIcon />
            </Button>
          </PopoverTrigger>
          <PopoverContent side="left" className="w-auto">
            Hello World
          </PopoverContent>
        </Popover>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Label
                layout
                className="bg-slate-300 hover:bg-emerald-200 dark:bg-slate-500 dark:hover:outline-emerald-300 dark:hover:outline transition m-2 rounded-sm flex items-center p-2 gap-2 cursor-pointer"
              >
                <Checkbox onCheckedChange={toggleTheme} />
                <span>Theme: {theme.label}</span>
              </Label>
            </TooltipTrigger>
            <TooltipContent>Hello World</TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <Modal />
        <User />
        <Users />
      </div>
    </div>
  );
}

function User() {
  // const u = useMapKey(store.users, 1);
  const u2 = useMapKey(store.users, 3);

  useEffect(() => {
    // console.log(u?.name);
    console.log(u2?.name);
  }, [u2?.name]);
  return null;
}

export default App;
