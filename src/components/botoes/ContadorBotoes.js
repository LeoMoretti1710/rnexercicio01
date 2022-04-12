import React from "react";
import { Button, View } from "react-native";
import Estilos from '../../estilos/styles';
export default props => {
    return (
        <View style={Estilos.painelBotoes}>
            <Button style={Estilos.botao}
                title="+" onPress={props.inc} />
            <Button style={Estilos.botao}
                title="-" onPress={props.dec} />
        </View>
    );
}
