import React from "react";
import { Text, View } from "react-native";
import Estilos from '../../estilos/styles';

export default props => {
    return (
        <View style={Estilos.display}>
            <Text style={Estilos.displayText}>
                {props.numero}
            </Text>
        </View>
    );
}