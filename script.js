let images = [];

document.getElementById('imageUpload').addEventListener('change', function (e) {
  const files = e.target.files;
  const preview = document.getElementById('preview');
  preview.innerHTML = '';
  images = [];

  for (let file of files) {
    const reader = new FileReader();
    reader.onload = function (event) {
      const img = document.createElement('img');
      img.src = event.target.result;
      preview.appendChild(img);
      images.push(event.target.result);
    };
    reader.readAsDataURL(file);
  }
});

function pullGacha() {
  if (images.length === 0) {
    alert("Please upload some OC images first!");
    return;
  }

  const randomIndex = Math.floor(Math.random() * images.length);
  const selectedImage = images[randomIndex];

  const result = document.getElementById('result');
  result.innerHTML = `<h2>You pulled:</h2><img src="${selectedImage}" alt="Pulled OC">`;
}
