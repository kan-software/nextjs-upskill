import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

export type ProductsQuantitySelectProps = {
  stock: number;
};

export function ProductsQuantitySelect({ stock }: ProductsQuantitySelectProps) {
  const stockValues = Array.from(Array(stock).keys()).map((index) => index + 1);

  return (
    <FormControl
      sx={{ m: 1 }}
      size="small"
    >
      <Select defaultValue={1}>
        {stockValues.map((value) => (
          <MenuItem
            key={value}
            value={value}
          >
            {value}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
