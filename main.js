const fs = require("fs");
const data = require("./data.json");
const processedData = data.map((row) => {
  const meanings = row.meaning.split("-")[1].split("<")[0].split(",");
  return { word: row.word, meanings };
});

fs.writeFileSync("./processed-data.json", JSON.stringify(processedData));
