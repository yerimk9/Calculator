import "./styles/App.css";
import ButtonBox from "./components/ButtonBox";
import { useRecoilState } from "recoil";
import { InputState } from "./recoil";
import NoticeModal from "./components/NoticeModal";

function App() {
  const [input] = useRecoilState(InputState);

  return (
    <div>
      <NoticeModal />
      <div className="container">
        <div className="inputBox">
          <input type="text" readOnly value={input} className="input" />
        </div>
        <ButtonBox />
      </div>
    </div>
  );
}

export default App;
