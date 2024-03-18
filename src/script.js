import { client } from "@gradio/client";

const submit = document.getElementById("predict-button");
const drag_over = document.getElementById("drop_zone");
const upload_input = document.getElementById("input_photo");

const image_zone = document.getElementById("drop_zone");
const upload_image = document.getElementById("upload_image");
const upload_title = document.getElementById("upload_title");
let file;

function addTitle(title) {
  const h2_title = document.getElementById("pet_breed");
  h2_title.innerHTML = title;
}

async function makePrediction(fl) {
  try {
    let reader = new FileReader();
    reader.onloadend = async function () {
      const app = await client("airvit2/pet_classifier");
      const result = await app.predict("/predict", [reader.result]);
      addTitle(result.data[0].label);
    };
    reader.readAsDataURL(fl);
  } catch (error) {
    console.log("An error occurred during prediction");
    console.error(error);
  }
}

function addImage(fl) {
  const bgUrl = URL.createObjectURL(fl);

  image_zone.classList.add("bg-cover");
  image_zone.classList.add("bg-center");
  image_zone.classList.add("bg-no-repeat");
  image_zone.style.backgroundImage = `url(${bgUrl})`;

  upload_image.classList.add("hidden");
  upload_title.classList.add("hidden");

  file = fl;
}

function removeImage() {
  image_zone.classList.remove("bg-cover");
  image_zone.classList.remove("bg-center");
  image_zone.classList.remove("bg-no-repeat");
  image_zone.style.backgroundImage = "";

  upload_image.classList.remove("hidden");
  upload_title.classList.remove("hidden");
}

function dropHandler(e) {
  e.preventDefault();
  removeImage();
  if (e.dataTransfer.items) {
    [...e.dataTransfer.items].forEach((item, i) => {
      if (item.kind == "file") {
        file = item.getAsFile();
        addImage(file);
      }
    });
  } else {
    [...e.dataTransfer.files].forEach((file, i) => {
      console.log(`FILES  file[${i}].name = ${file.name}`);
    });
  }
}

function dragOverHandler(e) {
  e.preventDefault();
}

function handleImageSelect(e) {
  const files = e.target.files;
  const file = files[0];
  const reader = new FileReader();
  const onReaderLoad = (file) => {
    removeImage();
    addImage(file);
  };

  reader.onload = onReaderLoad(file);
  reader.readAsText(file);
}

function onClickHandler(e) {
  const input = document.getElementById("input_photo");
  input.click();
}

function onClickPredict(e) {
  e.preventDefault();
  makePrediction(file);
}

upload_input.addEventListener("change", handleImageSelect, false);
submit.addEventListener("click", onClickPredict);
drag_over.addEventListener("drop", dropHandler);
drag_over.addEventListener("dragover", dragOverHandler);
drag_over.addEventListener("click", onClickHandler);
