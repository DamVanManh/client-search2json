let resultData = [];

async function search() {
  const keyword = document.getElementById("keyword").value;
  const loadingEl = document.getElementById("loading");
  const resultEl = document.getElementById("result");
  const downloadBtn = document.getElementById("downloadBtn");

  loadingEl.style.display = "block";
  resultEl.textContent = "";
  downloadBtn.style.display = "none";

  try {
    const url = `https://search2json.onrender.com/search?q=${encodeURIComponent(
      keyword
    )}`;
    const res = await fetch(url);
    resultData = await res.json();

    resultEl.textContent = JSON.stringify(resultData, null, 2);
    downloadBtn.style.display = "inline-block";
  } catch (error) {
    resultEl.textContent = "Error fetching data.";
    console.error(error);
  } finally {
    loadingEl.style.display = "none";
  }
}

function download() {
  const blob = new Blob([JSON.stringify(resultData, null, 2)], {
    type: "application/json",
  });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "google-results.json";
  a.click();
  URL.revokeObjectURL(url);
}
