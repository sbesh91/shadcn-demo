import { Button } from "~/ui/button";
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
import { Combobox } from "./combobox";
import { useSnapshot } from "valtio";
import { store } from "./state";

export function Modal() {
  const user = useSnapshot(store.user);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          initial={{
            scale: 1,
            boxShadow: "0 0 0 transparent",
          }}
          whileHover={{
            scale: 1.05,
            boxShadow:
              "0 1px 3px hsl(var(--foreground) / 0.1), 0 1px 2px hsl(var(--foreground) / 0.2)",
          }}
          transition={{
            type: "spring",
          }}
          variant="secondary"
          className="dark:hover:bg-cyan-400 hover:bg-amber-300 transition-colors dark:hover:text-black"
        >
          Edit Profile
        </Button>
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
              defaultValue={user.name}
              className="col-span-3"
              onInput={(event) => {
                store.user.name = event.currentTarget.value;
              }}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input
              id="username"
              defaultValue={user.username}
              className="col-span-3"
              onInput={(event) => {
                store.user.name = event.currentTarget.value;
              }}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label className="text-right">Combobox</Label>
            <div className="col-span-3">
              <Combobox />
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
