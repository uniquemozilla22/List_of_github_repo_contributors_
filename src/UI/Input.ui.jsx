import { Box, TextField } from "@mui/material";

export const Input = ({ icon, ...rest }) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      {icon}
      <TextField
        id="input-with-sx"
        label="With sx"
        variant="standard"
        fullWidth
        sx={{ width: "100%" }}
        {...rest}
      />
    </Box>
  );
};
