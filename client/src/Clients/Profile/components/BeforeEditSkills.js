import Box from "@mui/material/Box";
import { Chip } from "@mui/material";
import * as React from 'react'

function BeforeEditSkills(props) {
  return (
    <div className="a-before-edit">
      <div className="row a-edit-content a-row-wrapper">
        <div className="col-lg-4 col-sm-12">
          <span className="a-edit-left-title">{props.title}</span>
        </div>
        <div className="col-lg-7 col-sm-10">
          {console.log(props.content)}
          {props.content == undefined ||
          props.content.length == 0 ||
          props.content == "Not Provided" ? (
            <span className="a-edit-right-content a-not-provided">
              Not Provided
            </span>
          ) : (
            <span className="a-edit-right-content">
              <Box
                sx={{
                  flexWrap: "wrap",
                  justifyContent: "flex-start",
                }}
              >
                {props.content
                  ? props.content.map((data, index) => {
                      return data.length == 0 ? (
                        ""
                      ) : (
                        <Chip key={index} label={data} sx={{ margin: "2px" }} />
                      );
                    })
                  : "Not Provided"}
              </Box>
            </span>
          )}
        </div>
        <div className="col-lg-1 col-sm-2">
          <button className="a-edit" onClick={props.editButtonClick}>
            Edit
          </button>
        </div>
      </div>
    </div>
  );
}

export default BeforeEditSkills;
