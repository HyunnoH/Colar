import MenuBarLayout from "./features/menu-bar";
import ToolBarLayout from "./features/toolbar";
import WorkingArea from "./features/working-area";

function App() {
  return (
    <MenuBarLayout>
      <ToolBarLayout>
        <WorkingArea />
      </ToolBarLayout>
    </MenuBarLayout>
  );
}

export default App;
