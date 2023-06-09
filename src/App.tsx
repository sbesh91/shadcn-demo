import { useState } from "react";
import { Button } from "~/ui/button";
import { Checkbox } from "~/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/ui/dialog";
import { Input } from "~/ui/input";
import { Label } from "~/ui/label";

function App() {
  const [theme, setTheme] = useState("light");

  function toggleTheme() {
    setTheme((prev) => {
      if (prev === "light") {
        document.body.className = "dark";
        return "dark";
      }

      document.body.className = "light";
      return "light";
    });
  }

  return (
    <div className="bg-white dark:bg-slate-700 transition-colors h-full flex flex-col justify-center">
      <div className="grid justify-center gap-2">
        <Label className="bg-slate-300 dark:bg-slate-500 transition-colors m-2 rounded-sm flex items-center p-2 gap-2 cursor-pointer">
          <Checkbox onCheckedChange={toggleTheme} />
          Theme: {theme}
        </Label>

        <Dialog>
          <DialogTrigger asChild>
            <Button variant="secondary">Edit Profile</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Edit profile</DialogTitle>
              <DialogDescription>
                Make changes to your profile here. Click save when you're done.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input
                  id="name"
                  defaultValue="Pedro Duarte"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  Username
                </Label>
                <Input
                  id="username"
                  defaultValue="@peduarte"
                  className="col-span-3"
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}

export default App;
