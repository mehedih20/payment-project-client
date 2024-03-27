import { useRef, useState } from "react";
import "./AuthModal.css";
import Webcam from "react-webcam";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {
  logout,
  setUserVerified,
  takeUserPhotoToggle,
} from "../../../redux/features/user/userSlice";
import { toast } from "sonner";

const AuthModal = () => {
  const { takingUserPhoto, userData } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const webcamRef = useRef(null);
  const [capturedImage, setCapturedImage] = useState(null);

  const capture = async () => {
    const imageSrc = webcamRef.current.getScreenshot();
    const blob = dataURItoBlob(imageSrc);
    setCapturedImage(blob);
    return blob;
  };

  const dataURItoBlob = (dataURI) => {
    const byteString = atob(dataURI.split(",")[1]);
    const mimeString = dataURI.split(",")[0].split(":")[1].split(";")[0];
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], { type: mimeString });
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    const response = await fetch(userData.photoUrl);
    const referenceBlob = await response.blob();
    const liveBlob = await capture();
    const toastId = toast.loading("Verifying user...");

    formData.append("reference_image", referenceBlob, "reference.jpg");
    formData.append("live_image", liveBlob, "live.jpg");

    axios
      .post("http://localhost:5000/compare", formData)
      .then((response) => {
        if (response?.data) {
          const { identical } = response.data;
          if (identical === "Comparison failed") {
            toast.error("User not verified!", { id: toastId });
            dispatch(logout());
            dispatch(takeUserPhotoToggle());
            return;
          }
          dispatch(setUserVerified(response.data));
          if (response.data.identical === true) {
            toast.success("User verified!", { id: toastId });
          } else {
            toast.error("User not verified!", { id: toastId });
          }
        }
        setCapturedImage(null);
        dispatch(takeUserPhotoToggle());
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <div className={`auth-modal-container ${!takingUserPhoto && "hidden"}`}>
      <div className="auth-modal">
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          style={{ width: "500" }}
        />
        <button onClick={capture}>Capture Photo</button>
        {capturedImage && (
          <div>
            <h2>Captured Photo:</h2>
            <img
              src={URL.createObjectURL(capturedImage)}
              alt="Captured"
              width="100"
            />
          </div>
        )}
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default AuthModal;
