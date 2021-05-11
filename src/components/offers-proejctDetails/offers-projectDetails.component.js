import React, { useEffect, useState } from "react";
import "./offers-projectDetails.styles.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperclip } from "@fortawesome/free-solid-svg-icons";
import OffersTitleCardComponent from "../offers-titleCard/offers-titleCard.component";
import { useDispatch } from "react-redux";
import axios from "../../axiosinterceptor";

function OffersProjectDetailsComponent(props) {
  const dispatch = useDispatch();

  const [show, setShow] = useState(true);

  const [projectName, setProjectName] = useState();
  const [projectBrief, setProjectBrief] = useState();
  const [uploadFile, setUploadFile] = useState();
  const [projectUrl, setProjectUrl] = useState();

  const updateProjectDetails = () => {
    dispatch({
      type: "PROJECT_DETAILS",
      payload: { projectName, projectBrief, uploadFile, projectUrl },
    });
  };

  const addFile = async (e) => {
    e.preventDefault();

    if (
      sessionStorage.getItem("authenticated") &&
      sessionStorage.getItem("authenticated") == "true"
    ) {
      const formData = new FormData();
      formData.append("file", e.target.files[0]);
      const response = await axios.post(
        "http://makriaagency-env.eba-fpicp8xe.eu-west-3.elasticbeanstalk.com/files",
        formData
      );
      if(response.status == 200) {
        setUploadFile(response.data.filename);
      }
      
    }
  };

  useEffect(()=>{
  },[uploadFile,setUploadFile])

  useEffect(() => {
    updateProjectDetails();
  }, [
    projectName,
    setProjectName,
    projectBrief,
    setProjectBrief,
    uploadFile,
    setUploadFile,
    projectUrl,
    setProjectUrl,
  ]);



  return (
    <div className="projectDetail-component">
      <OffersTitleCardComponent
        titleNumber="End"
        titleSection="Project Details"
      />
      <input
        className="input-projectName"
        type="text"
        placeholder="Project Name (This name will be referenced in your invoice.)"
        value={projectName}
        onChange={(e) => setProjectName(e.target.value)}
      />
      <label className="projectBriefTitle" htmlFor="projectBrief">
        {" "}
        Project Brief
      </label>
      <div className="textareaWrap">
        <div className="textareaWrap--padding">
          <textarea
            name="projectBrief"
            id="projectBrief"
            cols="100"
            rows="10"
            placeholder="Kindly share detailed information regarding your project. Attach design files"
            value={projectBrief}
            onChange={(e) => setProjectBrief(e.target.value)}
          ></textarea>
        </div>
        <div className="project-file-section">
          <div className="project-file-section--padding">
            <div className="custom-check">
              <input
                type="checkbox"
                name="agree-checkbox"
                id="checkbox01"
                onClick={() => setShow(!show)}
              />
              <label htmlFor="checkbox01">
                {" "}
                I don't want to submit any file for this job.
              </label>
            </div>

            {show && (
              <>
                <div className="fileupload">
                  <span className="browse-span">
                    <FontAwesomeIcon icon={faPaperclip} />
                    <input
                      onChange={addFile}
                      className="input-typeFile"
                      type="file"
                    />
                    BROWSE
                  </span>
                </div>
                <div className="urlupload">
                  <input
                    type="text"
                    placeholder="Provide URL of your file. (Dropbox, WeTransfer, etc ."
                    className="input-urlupload"
                    onChange={(e) => setProjectUrl(e.target.value)}
                  />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default OffersProjectDetailsComponent;
