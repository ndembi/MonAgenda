import React from 'react';
import { View, Text } from 'react-native';
import { Button} from 'react-native-elements';
import  Modal from 'react-native-modal';
import { style } from './style';

const MenuTask = () => (
    <Modal 
    isVisible
    animationIn= {'zoomInDown'}
    animationOut={'zoomOutUp'}
    animationInTiming={1000}
    animationOutTiming={1000}
    backdropTransitionInTiming={1000}
    backdropTransitionOutTiming={1000}
    >
        <View style={style.modal}>
            <Text>Que souhaitez-vous faire sur la tache?</Text>
        </View>
        <View>
            <Button
                buttonStyle={style.buttonDelete}
                title="Supprimer"
                onPress={() => console.log("OnPress supprimer")}/>
            <Button
             buttonStyle={style.buttonChangesStatus}
                title="Changer status"
                onPress={() => console.log("OnPress change status")}
            />
        </View>
    </Modal>
);

export default MenuTask;