import { useState } from "react";
import * as C from "./App.styles";
import { AddArea } from "./components/AddArea";
import { ListItem } from "./components/ListItem";
import { Item } from "./types/Item";

const App = () => {
  const [list, setList] = useState<Item[]>([
    { id: 1, name: "Comprar o pão na padaria", done: false },
    { id: 2, name: "Comprar o bolo na padaria", done: true },
  ]);

  const handleTask = (taskName: string) => {
    const newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false,
    });
    setList(newList);
  };

  return (
    <C.Components>
      <C.Area>
        <C.Header>Lista de Tarefas</C.Header>

        <AddArea onEnter={handleTask} />

        {list.map((item, index) => {
          return <ListItem key={index} item={item} />;
        })}
      </C.Area>
    </C.Components>
  );
};

export default App;
