import { Button } from "antd";
import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count <= 1) return;
    setCount(count - 1);
  };

  return (
    <div className="w-[100vh] h-[100vh] flex items-center justify-center">
      <div className="flex gap-[20px] items-center justify-center">
        <Button onClick={decrement} type="primary" danger>
          -
        </Button>
        {count}
        <Button onClick={increment} type="primary">
          +
        </Button>
      </div>
    </div>
  );
};

export default App;
