import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { LANGUAGE_VERSION } from "../constant";


const languageWithVersion = Object.entries(LANGUAGE_VERSION)

const LanguageSelector = ( {currentLanguage, langSelectedFn} ) => {

    return(
        <Box
            sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} 
            mt={1}
        >
            <Typography variant="h6" mr={2}> 
                Language :
            </Typography>
            <Select
                size="small"
                sx={{minWidth: 170}}
                value={currentLanguage}
                onChange={langSelectedFn}
            >
                {
                    languageWithVersion.map(arr => (
                        <MenuItem 
                            key={arr[0]} 
                            value={arr[0]} 
                        >
                            {arr[0]} - <span variant="caption">{arr[1]}</span> 
                        </MenuItem> 
                    ))
                }
            </Select>
            

        </Box>
    );

};   //LanguageSelector component end

export default LanguageSelector;