import React from 'react';
import {useTheme} from '@react-navigation/native';
import styled from 'styled-components/native';

export default ({children}) => {
    const {colors} = useTheme();
    return <Container colors={colors}>{children}</Container>;
}

const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.colors.backgroundPrimary};
`;
