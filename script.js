let resultData = [];

async function search() {
  const keyword = document.getElementById("keyword").value;
  const url = `https://search2json.onrender.com/search?q=${encodeURIComponent(
    keyword
  )}`;

  const res = await fetch(url);
  resultData = await res.json();

  document.getElementById("result").textContent = JSON.stringify(
    resultData,
    null,
    2
  );
  document.getElementById("downloadBtn").style.display = "inline-block";
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
