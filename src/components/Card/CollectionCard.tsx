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
import { CollectionCardProps } from "./interfaces";

const CollectionCard = (props: CollectionCardProps) => {
  const { collection } = props;
  const { description, createdAt, name, avatarUrl, fullUrl } = collection;
  return (
    <Card
      className="card"
      onClick={() => window.open(`https://glitch.com/@${fullUrl}`, "_blank")}
    >
      <CardHeader title={name} subheader={moment(createdAt).format("LLLL")} />
      <CardMedia
        component="img"
        height="120"
        image={avatarUrl}
        alt="Collection"
      />
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
            onClick={() =>
              window.open(`https://glitch.com/@${fullUrl}`, "_blank")
            }
            className="action-btn"
          >
            <OpenInNew />
          </IconButton>
        </Tooltip>
      </CardActions>
    </Card>
  );
};

export default CollectionCard;
