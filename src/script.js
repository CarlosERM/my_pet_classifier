import { client } from "@gradio/client";

const submit = document.getElementById("predict-button");
const drag_over = document.getElementById("drop_zone");
let file;

function dropHandler(e) {
  e.preventDefault();
  const image_zone = document.getElementById("drop_zone");
  const upload_image = document.getElementById("upload_image");
  const upload_title = document.getElementById("upload_title");

  if (e.dataTransfer.items) {
    [...e.dataTransfer.items].forEach((item, i) => {
      if (item.kind == "file") {
        file = item.getAsFile();

        const bgUrl = URL.createObjectURL(file);

        image_zone.classList.add("bg-cover");
        image_zone.classList.add("bg-center");
        image_zone.classList.add("bg-no-repeat");
        image_zone.style.backgroundImage = `url(${bgUrl})`;

        upload_image.classList.add("hidden");
        upload_title.classList.add("hidden");
      }
    });
  } else {
    [...e.dataTransfer.files].forEach((file, i) => {
      console.log(`FILES  file[${i}].name = ${file.name}`);
    });
  }
}

function dragOverHandler(e) {
  console.log("File(s) in drop zone");
  e.preventDefault();
}

function onClickHandler(e) {
  let input = document.getElementById("input_photo");
  input.click();
}

async function makePrediction(file) {
  try {
    const app = await client("airvit2/pet_classifier");
    const result = await app.predict("/predict", [file]);

    console.log("Prediction successful");
    console.log(result.data);
  } catch (error) {
    console.log("An error occurred during prediction");
    console.error(error);
  }
}

function onClickPredict(e) {
  e.preventDefault();
  makePrediction(file);
}

submit.addEventListener("click", onClickPredict);

drag_over.addEventListener("drop", dropHandler);
drag_over.addEventListener("dragover", dragOverHandler);
drag_over.addEventListener("click", onClickHandler);
