import React, { useState } from "react";
import { storage } from "../../firebase/index";
import ReactPlayer from "react-player";
import "./upload.css";
import "./uploaderScreen.css";
import axios from "axios";
import { Link } from "react-router-dom";

const Upload = () => {
  const [video, setVideos] = useState(null);
  const [image, setImages] = useState(null);
  const [vidupload, setVideosUpload] = useState(false);
  const [viddelete, setVideosDelete] = useState(false);
  const [imgupload, setImagesUpload] = useState(false);
  const [imgdelete, setImagesDelete] = useState(false);
  const [imgchange, setimgChange] = useState(false);
  const [vidchange, setvidChange] = useState(false);
  const [Vidurl, setVidUrl] = useState("");
  const [imgprogress, setimgProgress] = useState(0);
  const [vidprogress, setvidProgress] = useState(0);

  // Use let or const to ensure block scoping
  const VideoRef = video
    ? storage.ref(`videos/${video.name}`)
    : storage.ref("videos/");
  const ImageRef = image
    ? storage.ref(`images/${image.name}`)
    : storage.ref("images/");

  const videoDeleteUpload = () => {
    VideoRef.delete()
      .then(() => {
        setVideosDelete(true);
      })
      .catch((error) => {
        console.log(error);

        alert("Video cant be delete!!! Please try again after sometime");
      });
  };
  const imageDeleteUpload = () => {
    ImageRef.delete()
      .then(() => {
        setImagesDelete(true);
      })
      .catch((error) => {
        alert("Video cant be delete!!! Please try again after sometime");
      });
  };
  const handleVideoChange = (e) => {
    if (e.target.files[0]) {
      setVideos(e.target.files[0]);
      setVideosUpload(true);
    }
  };
  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImages(e.target.files[0]);
      if (vidupload) setImagesUpload(true);
      else alert("Please upload a video first");
    }
  };

  const Imgsave = async (url) => {
    try {
      console.log("called");

      const res = await axios.post(
        "http://localhost:5000/api/video",
        {
          Poster: url,
          video: Vidurl,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(res); //check now
    } catch (e) {
      console.log(e);
    }
  };
  const handleVideoUpload = async () => {
    if (video === null) alert("Please Upload a Video");
    else {
      const uploadTask = storage.ref(`videos/${video.name}`).put(video);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const vidprogress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setvidProgress(vidprogress);
        },
        (error) => {
          console.log(error);
        },
        async () => {
          storage
            .ref("videos")
            .child(video.name)
            .getDownloadURL()
            .then((url) => {
              setVidUrl(url);

              console.log(Vidurl);
            });
        }
      );
      setvidChange(true);
      // console.log("This the url" + Vidurl)
    }
  };
  const handleImageUpload = () => {
    if (image === null) alert("Please Upload a Video");
    else {
      const uploadTask = storage.ref(`images/${image.name}`).put(image);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const imgprogress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setimgProgress(imgprogress);
        },
        (error) => {
          console.log(error);
        },
        () => {
          storage
            .ref("images")
            .child(image.name)
            .getDownloadURL()
            .then((url) => {
              Imgsave(url);
            });
        }
      );
      setimgChange(true);
    }
  };

  return (
    <div className="S-parent">
      <link
        rel="stylesheet"
        href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
        integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
        crossOrigin="anonymous"
      />
      <div className="S-uploader">
        <div className="S-upload">
          {vidupload ? (
            <div className="S-react-player">
              <div>PREVIEW</div>
              <ReactPlayer
                url={URL.createObjectURL(video)}
                controls={true}
                width="100%"
              />
            </div>
          ) : (
            <div>Upload a video</div>
          )}
          <div className="video-upload">
            {vidchange && vidprogress !== 100 ? (
              <div className="S-progress">
                <progress
                  className="S-progress-bar"
                  value={vidprogress}
                  max="100"
                />
                <span>{vidprogress}%</span>
              </div>
            ) : (
              ""
            )}
            <div className="S-video">Video Upload</div>
            <input type="file" onChange={handleVideoChange} accept="video/*" />

            <button
              className={
                vidprogress === 100
                  ? "btn btn-success S-button"
                  : "btn btn-dark S-btn"
              }
              onClick={handleVideoUpload}
            >
              {vidprogress !== 100 ? (
                <div>
                  <span>
                    <i class="fad fa-play-circle  S-icon"></i>
                  </span>
                  <span>Upload</span>
                </div>
              ) : (
                <div>
                  <span>
                    <i class="fad fa-check-circle S-icon"></i>
                  </span>
                  <span>Uploaded</span>
                </div>
              )}
            </button>
            {vidprogress === 100 ? (
              <button onClick={videoDeleteUpload} className="btn btn-danger">
                {!viddelete ? (
                  <div>
                    <span>
                      <i class="fad fa-times-circle S-icon"></i>
                    </span>
                    <span>Delete</span>
                  </div>
                ) : (
                  <span>Deleted</span>
                )}
              </button>
            ) : (
              ""
            )}
          </div>

          {vidupload ? (
            imgupload ? (
              <div className="S-react-player">
                <div>PREVIEW</div>
                <img
                  src={URL.createObjectURL(image)}
                  alt=""
                  width="40%"
                  height="20%"
                />
              </div>
            ) : (
              <div>Upload a Thumbnail</div>
            )
          ) : (
            ""
          )}
          {vidupload ? (
            <div className="image-upload">
              {imgchange && imgprogress !== 100 ? (
                <div className="S-progress">
                  <progress
                    className="S-progress-bar"
                    value={imgprogress}
                    max="100"
                  />
                  <span>{imgprogress}%</span>
                </div>
              ) : (
                ""
              )}
              <div className="S-video">Thumbnail Upload</div>
              <input
                type="file"
                onChange={handleImageChange}
                accept="image/*"
              />
              <button
                className={
                  imgprogress === 100
                    ? "btn btn-success S-button"
                    : "btn btn-dark S-btn"
                }
                onClick={handleImageUpload}
              >
                {imgprogress !== 100 ? (
                  <div>
                    <span>
                      <i class="fal fa-image S-icon"></i>
                    </span>
                    <span>Upload</span>
                  </div>
                ) : (
                  <div>
                    <span>
                      <i class="fad fa-check-circle S-icon"></i>
                    </span>
                    <span>Uploaded</span>
                  </div>
                )}
              </button>
              {imgprogress === 100 ? (
                <button onClick={imageDeleteUpload} className="btn btn-danger">
                  {!imgdelete ? (
                    <div>
                      <span>
                        <i class="fad fa-times-circle S-icon"></i>
                      </span>
                      <span>Delete</span>
                    </div>
                  ) : (
                    <span>Deleted</span>
                  )}
                </button>
              ) : (
                ""
              )}
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="S-final">
        {vidupload ? (
          <Link to="/videolist">
            <button className="btn btn-success">
              <span>
                <i class="fad fa-check-square S-icon"></i>
              </span>
              <span>Done</span>
            </button>
          </Link>
        ) : (
          ""
        )}
        {vidupload ? (
          <Link to="/videolist">
            <button className="btn btn-danger">
              <span></span>
              <i class="fad fa-times-circle S-icon"></i>
              <span>Cancel</span>
            </button>
          </Link>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Upload;
