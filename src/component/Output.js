import Box from "@mui/material/Box"; 
import Button from '@mui/material/Button';
import { useState } from "react";
import { executeCode } from "../api";
import { wait } from "@testing-library/user-event/dist/utils";
import { Typography } from "@mui/material";



export default function Output( {currentLanguage, editorValue} ){

    const [output, setOutput] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const execute = async (event) => {

        if (!editorValue) return;

        try{
            setIsLoading(true);
            const apiOutput = await executeCode(currentLanguage, editorValue);
            // console.log(apiOutput)
            setOutput(apiOutput.data.run.output.split("\n"));
            apiOutput.data.run.stderr ? setIsError(true) : setIsError(false);
        }catch(error){
            console.log(error);
        }finally{
            setIsLoading(false);
        }

    } 
    

    return(
        <Box 
            // sx={{border: '2px solid grey', }} 
        >
            <Button 
                variant="contained" 
                color="success"
                onClick={execute}
                // loading="true"
                disabled={isLoading}
            >
                RUN CODE
            </Button>
            <Box
                height="45vh"
                sx={{backgroundColor: '#d6d3cb', border: '2px solid #d6d3cb', }}
                color={isError ? 'red' : ''}
                borderColor={isError ? 'red' : '#d6d3cb'}
                p={1}
            >
                {output ? output.map((line, i) => <Typography key={i}>{line}</Typography>) 
                    : "Click \"RUN CODE\" to see the output here."}
            </Box>
        </Box> 
    )

}//Output function end