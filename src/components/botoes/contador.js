import React, { useState } from "react";
import { Text } from "react-native";
import ContadorBotoes from "./ContadorBotoes";
import ContadorDisplay from "./ContadorDisplay";
export default () => {

    const [num, setValor] = useState(0);
    const inc = () => setValor(num + 1);
    const dec = () => setValor(num - 1);
    return (
        <>
            <Text style={{ color: '#000', fontSize: 28 }}>
                Contador:</Text>
            <ContadorDisplay numero={num} />
            <ContadorBotoes inc={inc} dec={dec} />
        </>
    )
}