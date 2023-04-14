import {Box, styled } from '@mui/material';
import { useContext, useState, useEffect} from 'react';
import { DataContext } from '../contexts/DataProvider';

const Container = styled(Box)`
    height : 40vh;
`;
const Result = () => {
    const [src,setSrc] = useState(''); 

    // we have html, css and js here.
    const {html,css,js} = useContext(DataContext);
    const srcCode = `
        <html>
            <body>${html}</body>
            <style>${css}</style>
            <script>${js}</script> 
            
        </html>
    `
    useEffect(()=>{
        const timeout = setTimeout(()=>{
            setSrc(srcCode);
        },1000 ) // settimeout code of execution ko rok deta h.

        return ()=> clearTimeout(timeout);//comp unmount(comp unmounts from DOM) ki condition hoti, jb useEffect ke andar se
        // kuch bhi return kroge toh yeh func chal jayega
    }, [html,css,js]) // because we want our component to run it when html, css or js changes.
    // it tells ki jb bhi hthml, css, js change ho , useEffect ko run krna h. 
    
    // now we have our html,css and js in our context so import useContext
    return (
        <Container>
            <iframe srcDoc = {src}
            sandbox='allow-scripts'
            title = "Output"
            width="100%"
            height = "100%"
            frameBorder={0}/>
        </Container>
    )
}
export default Result;