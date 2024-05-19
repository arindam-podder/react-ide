import React from "react";
import Box  from "@mui/material/Box";
import { Editor } from "@monaco-editor/react";
import LanguageSelector from "./LanguageSelector";
import Output from "./Output";
import { useState } from "react";
import { CODE_SNIPPETS } from "../constant";





export default function CodeEditor(){

    const [currentLanguage, updateCurrentLanguage] = useState('java')
    const [editorValue, updateEditorValue] = useState(CODE_SNIPPETS["java"])

    const langSelected = (event) => {
        updateCurrentLanguage(event.target.value)
        updateEditorValue(CODE_SNIPPETS[event.target.value])
       
    }




    return(

        <Box>
            <LanguageSelector  currentLanguage={currentLanguage} langSelectedFn={langSelected} />
            <Box 
                height="55vh"
                sx={{border: '2px solid grey' }}
                mt={1}
            
            >
                <Editor 
                    // height="50vh" 
                    theme="vs-dark"
                    language={currentLanguage} 
                    defaultValue={CODE_SNIPPETS[currentLanguage]}
                    value={editorValue}
                    onChange={(value) => updateEditorValue(value)}
                />
            </Box>
            <Output currentLanguage={currentLanguage} editorValue={editorValue} />
        </Box>
    );

}; //CodeEditor component end 