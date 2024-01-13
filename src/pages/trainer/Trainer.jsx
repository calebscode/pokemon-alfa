import useFetch from "../../../lib/useFetch";
import TrainerBio from "./TrainerBio";
import TrainerHeader from "./TrainerHeader";
import { Box, Container } from "@mui/material";
import TrainerLevelPath from "./TrainerLevelPath";

export default function Trainer() {
  const url = "http://localhost:3000/users/1/";
  const { error, isPending, data } = useFetch(url);

  return (
    <Container className="trainer">
      {error && <div className="error">Error: {error}</div>}
      {isPending && <div>Loading...</div>}
      {data && (
        <>
          <TrainerHeader data={data} />
          <Box className="trainer-body">
            <TrainerBio bio={data.trainerData.trainer.bio} />
            <TrainerLevelPath levels={data.trainerData.trainer.levels}/>
          </Box>
        </>
      )}
    </Container>
  );
}
