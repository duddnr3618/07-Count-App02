import Viewer from "./component/Viewer";
import Controller from "./component/Controller";
import {useState , useRef} from 'react';
import './App.css';
import Event from "./component/Event";


function App() {

  // useState : 상태(값/데이터) -> 변경 -> 랜더링 , 상태값은 부모에서 자식으로만 전달 가능하다.
  const [count , setCount] = useState(0);     // Viewer 컴포넌트에 전달할 상태값

  // 함수 호출 : 자식 --> 부모로 호출
  const handleSetCount = (value) => {
    setCount (count + value);
  }

  // useRef : 컴포넌트가 생성될때 작동되지 않도록 설정
  const didMountRef = useRef(false);


  return (
    <div className = "App">
      <h1>Simple Counter</h1>

      <section>
      <Viewer count = {count}/>
      {count % 2 === 0 && <Event /> }     
      </section>

      <section>
      <Controller handleSetCount = {handleSetCount}/>
      </section>
    </div>
  );
}

export default App;
