import { ColorfulMessage } from "./components/ColorfulMessage";

export const App = () => {
    const onClickButton = () => alert();
    return (
        <div>
            <h1 style={{ color: "#aacf00" }}>こんにちは</h1>
            <ColorfulMessage color="blue">みやんご</ColorfulMessage>
            <ColorfulMessage color="green">やんぼ</ColorfulMessage>
            <button onClick={onClickButton}>ボタン</button>
        </div>
    );
};
