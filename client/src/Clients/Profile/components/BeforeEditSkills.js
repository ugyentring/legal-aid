import Box from "@mui/material/Box";
import { Chip } from "@mui/material";
import * as React from "react";

function BeforeEditSkills({ title, content, editButtonClick }) {
  return (
    <div className="a-before-edit">
      <div className="row a-edit-content a-row-wrapper">
        <div className="col-lg-4 col-sm-12">
          <span className="a-edit-left-title">{title}</span>
        </div>
        <div className="col-lg-7 col-sm-10">
          <span className="a-edit-right-content">
            {content && content.length > 0 ? (
              <Box
                sx={{
                  flexWrap: "wrap",
                  justifyContent: "flex-start",
                }}
              >
                {content.map((data, index) => (
                  <Chip key={index} label={data} sx={{ margin: "2px" }} />
                ))}
              </Box>
            ) : (
              <span className="a-edit-right-content a-not-provided">
                Not Provided
              </span>
            )}
          </span>
        </div>
        <div className="col-lg-1 col-sm-2">
          <button className="a-edit" onClick={editButtonClick}>
            Edit
          </button>
        </div>
      </div>
    </div>
  );
}

export default BeforeEditSkills;
