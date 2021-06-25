import MenuBarLayout from "./features/menu-bar";
import ToolBarLayout from "./features/toolbar";
import WorkingArea from "./features/working-area";
import { GlobalStyle } from "./styles/global-styles";

function App() {
  return (
    <MenuBarLayout>
      <GlobalStyle />
      <ToolBarLayout>
        <WorkingArea />
      </ToolBarLayout>
    </MenuBarLayout>
  );
}

export default App;
