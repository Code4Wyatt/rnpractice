import { View, Text, Dimensions, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Modal from "react-native-modal";
const MenuModal = () => {
    const [showModal, setShowModal] = useState(true);

    return (
        <View style={{ position: 'absolute' }}>
            <Modal
                animationIn="slideInLeft"
                animationOut="slideOutRight"
                animationInTiming={500}
                animationOutTiming={750}
                isVisible={showModal}
                useNativeDriver={true}
                onBackButtonPress={() => {
                    setShowModal(!showModal);
                }}>
                <View
                    style={{ 
                        backgroundColor: 'transparent',
                        width: Dimensions.get('screen').width / 1.1,
                        height: Dimensions.get('screen').height,
                    }}>

                    <TouchableOpacity onPress={() => setShowModal(false)} style={{ marginTop: 50 }}>
                        <Text style={{ color: 'white' }}>Menuuu</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setShowModal(false)} style={{ backgroundColor: 'rgba(128, 128, 128, 0.2)' }}>
                        <Text style={{ color: 'white' }}>Menuuu</Text>
                    </TouchableOpacity>



                </View>
            </Modal>
        </View>
    )
}

export default MenuModal