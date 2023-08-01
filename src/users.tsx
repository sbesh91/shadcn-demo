import { useSnapshot } from "valtio";
import { store } from "./state";
import { Button } from "~/ui/button";

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
  store.users.set(1, {
    id: 1,
    name: "Pedro Pascal",
    username: "@pedro",
    framework: store.frameworks[0].value,
  });
}

export function Users() {
  const users = useSnapshot(store.users);
  const list = Array.from(users.values());
  return (
    <div>
      <div className="flex gap-2 mb-2">
        <Button onClick={add}>Add</Button>
        <Button onClick={update}>Update</Button>
      </div>
      {list.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
}
