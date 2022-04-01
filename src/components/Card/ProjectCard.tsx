import { Edit, Merge, OpenInNew } from "@mui/icons-material";
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
import { ProjectCardProps } from "./interfaces";

const ProjectCatd = (props: ProjectCardProps) => {
  const { project } = props;
  const { id, description, createdAt, domain } = project;
  return (
    <Card
      className="card"
      onClick={() => window.open(`https://${domain}.glitch.me`, "_blank")}
    >
      <CardHeader title={domain} subheader={moment(createdAt).format("LLLL")} />
      <CardMedia
        component="img"
        height="120"
        image={`https://cdn.glitch.me/project-avatar/${id}.png`}
        alt="Project"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {description.length > 60
            ? `${description.substring(0, 60)}...`
            : description}
        </Typography>
      </CardContent>
      <CardActions>
        <Tooltip title="Edit this project" placement="top">
          <IconButton
            aria-label="Edit this project"
            onClick={() =>
              window.open(`https://glitch.com/edit/#!/${domain}`, "_blank")
            }
            style={{ marginRight: "45px" }}
            className="action-btn"
          >
            <Edit />
          </IconButton>
        </Tooltip>
        <Tooltip title="Remix this project" placement="top">
          <IconButton
            aria-label="Remix this project"
            onClick={() =>
              window.open(
                `https://glitch.com/edit/#!/remix/${domain}`,
                "_blank"
              )
            }
            style={{ marginRight: "45px" }}
            className="action-btn"
          >
            <Merge />
          </IconButton>
        </Tooltip>
        <Tooltip title="See live demo" placement="top">
          <IconButton
            aria-label="See live demo"
            onClick={() => window.open(`https://${domain}.glitch.me`, "_blank")}
            className="action-btn"
          >
            <OpenInNew />
          </IconButton>
        </Tooltip>
      </CardActions>
    </Card>
  );
};

export default ProjectCatd;
