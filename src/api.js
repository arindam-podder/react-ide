import axios from "axios";
import { LANGUAGE_VERSION } from "./constant";
import { version } from "react";


const pistonAPI = axios.create({
    baseURL: "https://emkc.org/api/v2/piston", 
});


export const executeCode = async (language, sourceCode) => {
    const response = await pistonAPI.post("/execute", {
        language: language,
        version: LANGUAGE_VERSION[language], 
        files:[
            {
                content: sourceCode,
            },
        ],
    });
    return response;    
}