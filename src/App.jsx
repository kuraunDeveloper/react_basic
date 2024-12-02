import { useEffect, useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

export const App = () => {
    console.log("--App--");
    const [num, setNum] = useState(0);
    const [isShowMiya, setIsShowMiya] = useState(false);
    const onClickCountUp = () => {
        setNum((prev) => prev + 1);
    };
    const onClickToggle = () => {
        setIsShowMiya(!isShowMiya);
    };

    useEffect(() => {
        if (num > 0 && num % 3 === 0) {
            isShowMiya || setIsShowMiya(true);
        } else {
            isShowMiya && setIsShowMiya(false);
        }
    }, [num]);

    return (
        <div>
            <h1 style={{ color: "#aacfff" }}>こんにちは</h1>
            <ColorfulMessage color="blue">みやんご</ColorfulMessage>
            <ColorfulMessage color="green">やんぼ</ColorfulMessage>
            <button onClick={onClickCountUp}>カウントアップ</button>
            <p>{num}</p>
            <button onClick={onClickToggle}>on/off</button>
            {isShowMiya && 
            <p>みやたろう</p>}
        </div>
    );
};
