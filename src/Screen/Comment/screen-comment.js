import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Container, Content, Input, Item, Text, Thumbnail } from 'native-base';
import Head from '../../Components/Head';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Image, StyleSheet, View, TouchableWithoutFeedback, ImageStore } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import ImagePicker from "react-native-image-picker";
import ImageResizer from 'react-native-image-resizer'

function mapStateToProps(state) {
    return {};
}

let options = {
    title: 'Select Image',
    storageOptions: {
        skipBackup: true,
        path: 'images'
    }
};

class ScreenComment extends Component {
    constructor(props) {
        super(props);

        this.state = {
            imagePreview: 'data:image/png;base64,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',
            isAddImage: false
        }
    }


    onPickImage = () => {
        return () => {
            // console.log("asdasdad")
            ImagePicker.showImagePicker(options, (response) => {
                // console.log('Response = ', response);

                if (response.didCancel) {
                    console.log('User cancelled image picker');
                }
                else if (response.error) {
                    console.log('ImagePicker Error: ', response.error);
                }
                else if (response.customButton) {
                    console.log('User tapped custom button: ', response.customButton);
                }
                else {
                    console.log('data:image/png;base64,' + response.data)
                    ImageResizer.createResizedImage('data:image/png;base64,' + response.data, 200, 200, 'JPEG', 80)
                        .then(({ uri }) => {
                            // console.log(uri)
                            ImageStore.getBase64ForTag("file://" + uri, (data) => {
                                let source = 'data:image/png;base64,' + data;
                                // console.log('getBase64ForTag', source);
                                this.setState({
                                    isAddImage: true,
                                    imagePreview: source
                                });
                            }, (e) => {
                                console.log('getBase64ForTag-error', e);
                            });
                        }).catch((err) => {
                            console.log(err);
                        });
                }
            });
        }
    }

    onRemoveImage = () => {
        return () => {
            console.log('remove')
            this.setState({
                isAddImage: false,
                imagePreview: ''
            })
        }
    }

    render() {
        return (
            <Container>
                <Head leftIcon={"arrow-left"}
                    leftPress={() => this.props.navigation.goBack()} body={"Comment"} />
                <Content>
                    <View style={{ margin: 10 }}>
                        <View style={styles.card}>
                            <View style={styles.card_content}>
                                <Text style={styles.card_name}>
                                    Yosafat Bama Arintoko
                                </Text>
                                <Text style={{ fontSize: 12 }}>
                                    Etiam et mollis ipsum. Sed porta varius magna, lacinia hendrerit massa viverra at.
                                    Aenean vitae nibh augue. Proin eleifend accumsan nisi, vitae consectetur felis
                                    imperdiet vestibulum. Proin sit amet aliquam leo. Vestibulum scelerisque aliquam mi,
                                    a finibus nunc scelerisque nec.
                                </Text>
                                <Icon name="clock-o" size={12} color='#BEBEBE' style={{ justifyContent: 'center' }}>
                                    <Text style={{ fontSize: 12, color: '#BEBEBE' }}>
                                        {' '}2 minute
                                    </Text>
                                </Icon>
                            </View>
                        </View>
                        <View style={{
                            height: 50,
                            width: 50,
                            backgroundColor: '#BEBEBE',
                            borderRadius: 5,
                            position: 'absolute'
                        }}>

                        </View>
                    </View>
                    <View style={{ margin: 10 }}>
                        <View style={styles.card}>
                            <View style={styles.card_content}>
                                <Text style={styles.card_name}>
                                    Sinatrio Happy Triaji
                                </Text>
                                <Text style={{ fontSize: 12 }}>
                                    Ut nec tortor quis tellus euismod auctor sed eget lacus. Sed at scelerisque massa,
                                    nec egestas urna. Cras sit amet elementum arcu, ac luctus libero.
                                </Text>
                                <Icon name="clock-o" size={12} color='#BEBEBE' style={{ justifyContent: 'center' }}>
                                    <Text style={{ fontSize: 12, color: '#BEBEBE' }}>
                                        {' '}2 minute
                                    </Text>
                                </Icon>
                            </View>
                        </View>
                        <View style={{
                            height: 50,
                            width: 50,
                            backgroundColor: '#BEBEBE',
                            borderRadius: 5,
                            position: 'absolute'
                        }}>

                        </View>
                    </View>
                    <View style={{ margin: 10 }}>
                        <View style={styles.card}>
                            <View style={styles.card_content}>
                                <Text style={styles.card_name}>
                                    Sinatrio Happy Triaji
                                </Text>
                                <Text style={{ fontSize: 12 }}>
                                    Ut nec tortor quis tellus euismod auctor sed eget lacus. Sed at scelerisque massa,
                                    nec egestas urna. Cras sit amet elementum arcu, ac luctus libero.
                                </Text>
                                <Icon name="clock-o" size={12} color='#BEBEBE' style={{ justifyContent: 'center' }}>
                                    <Text style={{ fontSize: 12, color: '#BEBEBE' }}>
                                        {' '}2 minute
                                    </Text>
                                </Icon>
                            </View>
                        </View>
                        <View style={{
                            height: 50,
                            width: 50,
                            backgroundColor: '#BEBEBE',
                            borderRadius: 5,
                            position: 'absolute'
                        }}>

                        </View>
                    </View>
                    <View style={{ margin: 10 }}>
                        <View style={styles.card}>
                            <View style={styles.card_content}>
                                <Text style={styles.card_name}>
                                    Sinatrio Happy Triaji
                                </Text>
                                <Text style={{ fontSize: 12 }}>
                                    Ut nec tortor quis tellus euismod auctor sed eget lacus. Sed at scelerisque massa,
                                    nec egestas urna. Cras sit amet elementum arcu, ac luctus libero.
                                </Text>
                                <Icon name="clock-o" size={12} color='#BEBEBE' style={{ justifyContent: 'center' }}>
                                    <Text style={{ fontSize: 12, color: '#BEBEBE' }}>
                                        {' '}2 minute
                                    </Text>
                                </Icon>
                            </View>
                        </View>
                        <View style={{
                            height: 50,
                            width: 50,
                            backgroundColor: '#BEBEBE',
                            borderRadius: 5,
                            position: 'absolute'
                        }}>

                        </View>
                    </View>
                </Content>
                {/* <Thumbnail square source={{ uri: this.state.imagePreview }} /> */}
                {
                    this.state.isAddImage
                    &&
                    <View style={{ width: '100%', height: 100, backgroundColor: 'white', flexDirection: 'row' }}>

                        <View style={{}}>

                            <View style={{
                                height: 85,
                                overflow: 'hidden',
                                borderRadius: 5,
                                margin: 5,
                                width: 85,
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: 'red'
                            }}>


                                <Image

                                    style={{ width: 100, height: 100 }}
                                    source={{ isStatic: true, uri: this.state.imagePreview }} />
                            </View>
                            <TouchableWithoutFeedback onPress={this.onRemoveImage()}>
                                <View style={{
                                    height: 25,
                                    borderRadius: 15,
                                    borderStyle: 'solid',
                                    borderWidth: 1,
                                    borderColor: '#BEBEBE',
                                    width: 25,
                                    right: 0,
                                    backgroundColor: '#FFF',
                                    position: 'absolute',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                    <Icon name="times" size={20} color='#BEBEBE' />
                                </View>
                            </TouchableWithoutFeedback>

                        </View>
                    </View>
                }

                <LinearGradient
                    style={{ height: 50, width: '100%', backgroundColor: '#9E9E9E', padding: 5, flexDirection: 'row' }}
                    start={{ x: 0.25, y: 0.25 }} end={{ x: 1.0, y: 1.0 }}
                    colors={['#4FC3F7', '#1E88E5', '#1A237E']}>
                    {/* <View> */}

                    <View style={{ width: 10 + '%' }}>
                        <Button transparent full style={{ height: 40 }} onPress={this.onPickImage()}>
                            <Icon name="camera" size={20} color='#FFFFFF' />
                        </Button>
                    </View>
                    <View style={{ width: 80 + '%', justifyContent: 'center' }}>
                        <Item rounded style={{ height: 30, backgroundColor: '#FFFFFF' }}>
                            <Input style={{ padding: 2 }} />
                        </Item>
                    </View>
                    <View style={{ width: 10 + '%' }}>
                        <Button transparent full style={{ height: 40 }}>
                            <Icon name="paper-plane" size={20} color='#FFFFFF' />
                        </Button>
                    </View>
                    {/* </View> */}
                </LinearGradient>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    card: {
        left: 10 + "%",
        width: 90 + "%",
        backgroundColor: '#FFFFFF',
        position: 'relative',
        borderRadius: 5
    },
    card_content: {
        marginLeft: 25,
        minHeight: 60,
        padding: 5
    },
    card_name: {
        color: '#2196F3', fontWeight: 'bold', fontSize: 14
    }
});
export default connect(
    mapStateToProps,
)(ScreenComment);