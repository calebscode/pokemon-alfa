import { Avatar, Box, Button, Divider, Typography } from "@mui/material";

export default function TrainerHeader({ data }) {
  function stringToColor(string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = "#";

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
  }

  function stringAvatar(name) {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
    };
  }

  return (
    <>

      <Box className="trainer-header">
        <Avatar
          {...stringAvatar(data.trainerData.trainer.name)}
          className="trainer-avatar"
        />
        <Box className="trainer-right">
          <Typography variant="h5">{data.trainerData.trainer.name}</Typography>
          <Box className="trainer-bottom">
            <Box>
              <Typography variant="h6">
                Level {data.trainerData.trainer.level}
              </Typography>
              <Typography variant="body1">
                {data.trainerData.trainer.xp} XP
              </Typography>
            </Box>
            <Button variant="outlined">Edit</Button>
          </Box>
        </Box>
      </Box>
      <Divider sx={{mt:"10px"}} variant="middle"/>
    </>
  );
}
