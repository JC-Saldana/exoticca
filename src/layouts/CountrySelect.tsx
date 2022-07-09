import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import "./styles.scss"

interface Props {
    country: string;
    setCountry: any;
}

export default function CountrySelect({ country, setCountry }: Props) {

    const handleChange = (e: any) => {
        setCountry(e.target.value)
    }

    return (
        <div className="select-row">
            <h1 className='cards-title'>TopSales {country}</h1>
            <div className="form-control">
                <FormControl>

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
            </div>
        </div>
    )
}