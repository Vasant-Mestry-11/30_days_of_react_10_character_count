import { useState } from "react";

const CharacterCounter = () => {
  const [count, setCount] = useState<number>(0);
  return (
    <div
      className="container p-10 bg-primary h-screen flex flex-col 
        w-screen items-center justify-center gap-6"
    >
      <div>
        <textarea
          onChange={(e) => {
            setCount(e.target.value.length);
          }}
          rows={10}
          className="p-4 outline-none w-[30rem] text-xl"
        ></textarea>
      </div>
      <h6 className="text-secondary text-4xl">Character Count: {count}</h6>
    </div>
  );
};

export default CharacterCounter;
