import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface Props {
    country: string;
    setCountry: any;
}

export default function CountrySelect({ country, setCountry }: Props) {
  /*   const dispatch = useDispatch<AppDispatch>()
    const { isLoading, cardsData } = useSelector((state: RootState) => state.cards)
    const [cards, setCards] = useState()
    useEffect(() => {
        dispatch(getCards())
    }, []) */

    const handleChange = (e: any) => {
        setCountry(e.target.value)
    }

    return (
        <>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Country</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={country}
                    label="Age"
                    onChange={handleChange}
                >
                    <MenuItem value={"us"}>United States</MenuItem>
                    <MenuItem value={"uk"}>United Kingdom</MenuItem>
                    <MenuItem value={"ca"}>Canada</MenuItem>
                </Select>
            </FormControl>
        </>
    )
}