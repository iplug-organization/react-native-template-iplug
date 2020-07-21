import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import {useTheme} from '@react-navigation/native';
import {connect} from 'react-redux';
import {setText} from '../../store/actions/auth/setTexts';
import SyncContainer from '../../components/SyncContainer';

const Home = ({text, setText}) => {
    const {colors} = useTheme();

    return (
        <SyncContainer>
            <CustomText colors={colors} >{text}</CustomText>

            <CustomButton
                colors={colors}
                title="Simple Button pressed"
                onPress={() => {
                    setText('Teste de Aplicação com React Navigation 5');
                }}
            />
        </SyncContainer>
    );
};

Home.propTypes = {
    text: PropTypes.string,
    setText: PropTypes.func.isRequired,
};

Home.defaultProps = {
    text: '',
};

// Connect with redux
const mapStateToProps = ({auth: {text}}) => ({text});

const mapDispatchToProps = {
    setText,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

const CustomText = styled.Text`
    color: ${props => props.colors.textPrimary};
`;

const CustomButton = styled.Button`
    background-color: ${props => props.colors.primary};
    color: ${props => props.colors.backgroundSecondary};
`;

