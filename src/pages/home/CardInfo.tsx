import { Box, Divider, Typography } from "@mui/material";
import { palettes, spacing } from "../../constants/theme";

export type CardInfoProps = {
  title: string;
  content: string;
};

const CardInfo = ({ title, content }: CardInfoProps) => {
  return (
    <Box
      sx={{
        backgroundColor: palettes.common.white,
        padding: spacing(2),
        borderRadius: spacing(1),
      }}
    >
      <Typography
        variant="subtitle1"
        fontWeight={600}
        color={palettes.text.primary}
        sx={{ marginBottom: spacing(1) }}
      >
        {title}
      </Typography>
      <Divider sx={{ marginBottom: spacing(1) }} />
      <Typography>{content}</Typography>
    </Box>
  );
};

export default CardInfo;
