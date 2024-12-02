import { useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

export const App = () => {
    const [num, setNum] = useState(0);
    const onClickCountUp = () => {
        setNum((prev) => prev + 1);
        setNum((prev) => prev + 1);
    };
    return (
        <div>S
            <h1 style={{ color: "#aacf00" }}>こんにちは</h1>
            <ColorfulMessage color="blue">みやんご</ColorfulMessage>
            <ColorfulMessage color="green">やんぼ</ColorfulMessage>
            <button onClick={onClickCountUp}>カウントアップ</button>
            <p>{num}</p>
        </div>
    );
};
