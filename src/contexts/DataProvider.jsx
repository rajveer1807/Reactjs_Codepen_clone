import { createContext, useState } from "react";
// first we have to initialise our context, we give it a name 
export const DataContext = createContext();
// this takes a value by default, which can be null or left empty ie. undefined.
// now  we create a context component that will return our context


const DataProvider = ({children}) => {
    const [html, setHtml] = useState('');
    const [css, setCss] = useState('');
    const [js, setJs] = useState('');
    return (
        <DataContext.Provider
            value= {{
                html, 
                setHtml, 
                css,
                setCss,
                js,
                setJs
            }}
        >
            {children} 
        </DataContext.Provider>
    )
    // hume children ko nikalna pdega aur fir fwd bhi krana padega, so {children} written.
}
export default DataProvider;