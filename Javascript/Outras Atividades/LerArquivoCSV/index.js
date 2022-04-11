import csv from 'csv-parser';
import { createReadStream } from 'fs';
const results = [];

createReadStream('./arquivos/data.csv')
.pipe(csv())
  .on('data', (data) => results.push(data))
  .on('end', () => {
    console.log(results);
  });

  csv({
	mapHeaders: ({ header, index }) => header.toLowerCase()
  })