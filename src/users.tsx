import { useSnapshot } from "valtio";
import { store } from "./state";
import { Button } from "~/ui/button";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";

function add() {
  const nextId = store.users.size + 1;
  store.users.set(nextId, {
    id: nextId,
    name: "Steve",
    username: "@steve",
    framework: store.frameworks[2].value,
  });
}

function update() {
  store.users.set(3, {
    id: 3,
    name: "Pedro Pascal",
    username: "@pedro",
    framework: store.frameworks[0].value,
  });
}

export function Users() {
  const users = useSnapshot(store.users);
  const list = Array.from(users.values());

  return (
    <motion.div layout className="flex flex-col gap-2">
      <motion.div layout className="flex gap-2">
        <Button onClick={add}>Add</Button>
        <Button onClick={update}>Update</Button>
      </motion.div>
      <LayoutGroup>
        <AnimatePresence mode="popLayout">
          {list.map((user) => (
            <motion.div
              key={user.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              layout
            >
              <motion.span
                layout
                className="inline-block border-red-500 border-2 p-1"
              >
                {user.name}
              </motion.span>
            </motion.div>
          ))}
        </AnimatePresence>
      </LayoutGroup>
    </motion.div>
  );
}
