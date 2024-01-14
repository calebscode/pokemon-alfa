import { Avatar, Box, Button, Divider, Typography } from "@mui/material";
import { stringAvatar } from "../../../lib/avatarUtils";

export default function TrainerHeader({ data }) {

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
