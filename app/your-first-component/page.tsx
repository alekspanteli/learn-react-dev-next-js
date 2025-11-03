import Gallery from "../components/gallery";
import Avatal from "../components/avatar";
import ToDoList from "../components/to-do-list";

export default function YourFirstComponent() {
  return (
    <>
      <h1 className="mb-2">Amazing scientists</h1>
      <Gallery />
      <br/>
      <h1 className="mb-2">Avatar</h1>
      <Avatal />
      <br/>
      <h1 className="mb-2">To Do List</h1>
      <ToDoList />
    </>
  );
}