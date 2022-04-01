import { OpenInNew } from "@mui/icons-material";
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import moment from "moment";

import "./projectCard.modules.css";
import { TeamCardProps } from "./interfaces";

const TeamCard = (props: TeamCardProps) => {
  const { team } = props;
  const { description, createdAt, name, url } = team;
  return (
    <Card
      className="card"
      onClick={() => window.open(`https://glitch.com/@${url}`, "_blank")}
    >
      <CardHeader title={name} subheader={moment(createdAt).format("LLLL")} />
      <CardMedia component="img" height="120" image={""} alt="Team" />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {description.length > 60
            ? `${description.substring(0, 60)}...`
            : description}
        </Typography>
      </CardContent>
      <CardActions>
        <Tooltip title="See Collection" placement="top">
          <IconButton
            aria-label="See live demo"
            onClick={() => window.open(`https://glitch.com/@${url}`, "_blank")}
            className="action-btn"
          >
            <OpenInNew />
          </IconButton>
        </Tooltip>
      </CardActions>
    </Card>
  );
};

export default TeamCard;
