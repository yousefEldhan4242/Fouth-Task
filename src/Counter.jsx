import { useState } from "react";

const Counter = () => {
  // state is like value of something but it is preserved throught re-renders
  // and when the state changes it will re-rednder the component
  // you can use the state among the same component using hooks or class components
  // or you can use it among all the project using react-redux or redux-tool-kit or context-api
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
    </div>
  );
};

export default Counter;
