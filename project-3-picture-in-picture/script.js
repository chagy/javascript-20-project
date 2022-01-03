const videoElement = document.getElementById("video");
const button = document.getElementById("button");

async function selectMediaStream() {
  try {
    const medaiStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = medaiStream;
    videoElement.onloadedmetadata = () => {
      videoElement.onplay();
    };
  } catch (error) {
    console.error(error);
  }
}

button.addEventListener("click", async () => {
  button.disabled = true;
  await videoElement.requestPictureInPicture();
  button.disabled = false;
});

selectMediaStream();
