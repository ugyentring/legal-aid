import * as React from "react";

function ImageHeader(props) {
  return (
    <section className="bg-dark a-img-header">
      <div className="a-center">
        <div className="container">
          <div className="a-center m-3">
            <img
              src="https://th.bing.com/th/id/OIP.nTK-yAWL01laY6CKjMEq3gHaHa?w=211&h=211&c=7&r=0&o=5&dpr=1.25&pid=1.7"
              alt=""
              style={{ borderRadius: "50%" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ImageHeader;
