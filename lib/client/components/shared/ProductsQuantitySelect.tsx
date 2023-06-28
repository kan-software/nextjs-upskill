import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

export type ProductsQuantitySelectProps = {
  quantity: number;
};

export function ProductsQuantitySelect({
  quantity,
}: ProductsQuantitySelectProps) {
  const quantityValues = Array.from(Array(quantity).keys()).map(
    (index) => index + 1
  );

  return (
    <FormControl
      sx={{ m: 1 }}
      size="small"
    >
      <Select defaultValue={1}>
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
