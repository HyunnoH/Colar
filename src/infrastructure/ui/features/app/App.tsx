import MenuBarLayout from "../menu-bar";
import ToolBarLayout from "../toolbar";
import WorkingArea from "../working-area";
import { GlobalStyle } from "../../styles/global-styles";

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
