import { useContext } from 'react';
import Editor from './Editor'
import { Box, styled } from '@mui/material';
import {DataContext} from '../contexts/DataProvider';
const Container = styled(Box)`
    display: flex;
    background-color : #060606;
    flex-direction: row;
    @media (max-width: 767px) {
        flex-direction: column;
    }  
`;
const Code = () => {
    const {html, setHtml, css, setCss, js, setJs}= useContext(DataContext);
    return (
        <Container> 
            <Editor
                heading = "HTML"
                icon = "/"
                color = "#FF3C41"
                value = {html}
                onChange = {setHtml}/>
            <Editor
                heading = "CSS"
                icon = "*"
                color = "#0EBEFF"
                value = {css}
                onChange = {setCss}/>
            <Editor
                heading = "Javascript"
                icon = "()"
                color = "#FCD000"
                value = {js}
                onChange = {setJs}/>
        </Container>
    )
}
export default Code;