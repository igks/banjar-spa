import { Box, Divider, Typography } from "@mui/material";
import { palettes, spacing } from "../../constants/theme";
import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

const CardTimeline = () => {
  const pengurus = [
    {
      periode: "2020 - Sekarang",
      ketua: "Nyoman Arsanayasa",
      bendahara: " Ni Wayan Yuli Astuti",
      bendaharaBanten: "Rini Megasari",
    },
    {
      periode: "2019 - 2020",
      ketua: "Made Suardana",
      bendahara: "Ni Wayan Yuli Astuti",
      bendaharaBanten: "Sri Soemarni",
    },
    {
      periode: "2018 - 2019",
      ketua: "I Ketut Suwitra",
      bendahara: "Ni Wayan Yuli Astuti",
      bendaharaBanten: "Sri Soemarni",
    },
    {
      periode: "2017 - 2018",
      ketua: "I Gusti Made Suyasa",
      bendahara: "Ni Wayan Yuli Astuti",
      bendaharaBanten: "Sri Soemarni",
    },
    {
      periode: "2016 - 2017",
      ketua: " I Gusti Kade Sugiantara",
      bendahara: "Ni Wayan Yuli Astuti",
      bendaharaBanten: "Sri Soemarni",
    },
    {
      periode: "2012 - 2016",
      ketua: "Made Pariatna",
      bendahara: "Sri Soemarni",
      bendaharaBanten: "Sri Soemarni",
    },
  ];
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
        Riwayat Pengurus
      </Typography>
      <Divider sx={{ marginBottom: spacing(1) }} />
      <Timeline
        sx={{
          [`& .${timelineItemClasses.root}:before`]: {
            flex: 0,
            padding: 0,
          },
        }}
      >
        {pengurus.map((data) => (
          <TimelineItem key={data.periode}>
            <TimelineSeparator>
              <TimelineDot color="primary" />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Box>
                <Typography variant="subtitle2">{data.periode}</Typography>
                <Typography variant="body2">Ketua : {data.ketua}</Typography>
                <Typography variant="body2">
                  Bendahara : {data.bendahara}
                </Typography>
                <Typography variant="body2">
                  Bendahara Banten : {data.bendaharaBanten}
                </Typography>
              </Box>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Box>
  );
};

export default CardTimeline;
