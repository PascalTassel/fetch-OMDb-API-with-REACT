import { Box, Link } from "@mui/material";

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        borderTop: 1,
        borderColor: (theme) => theme.palette.divider,
        px: (theme) => theme.spacing(2),
        py: (theme) => theme.spacing(1)
      }}
    >
      <Box component="small" sx={{ color: (theme) => theme.palette.grey[500] }}>
        Made in April 2022 by{" "}
        <Link href="mailto:tasselp@gmail.com">Pascal Tassel</Link>
      </Box>
    </Box>
  );
}

export default Footer;
