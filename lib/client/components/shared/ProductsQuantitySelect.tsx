import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export type ProductsQuantitySelectProps = {
  stock: number;
  value: number;
  onChange: (newValue: number) => void;
};

export function ProductsQuantitySelect({
  value,
  stock,
  onChange,
}: ProductsQuantitySelectProps) {
  const quantityValues = Array.from(Array(stock).keys()).map(
    (index) => index + 1
  );

  const handleChange = (e: SelectChangeEvent<number>) => {
    const newValue = e.target.value as number;
    onChange(newValue);
  };

  return (
    <FormControl
      sx={{ m: 1 }}
      size="small"
    >
      <Select
        value={value}
        onChange={handleChange}
      >
        {quantityValues.map((value) => (
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
