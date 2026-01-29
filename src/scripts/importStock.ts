import fs from "fs";
import prisma from "../lib/prisma";
import csvParser from "csv-parser";
import path from "path";

const filePath = "C:/Users/Michael/Downloads/eyeopticstocklistcsv.csv";

// Normalize header: lowercase, remove spaces and quotes
const normalizeHeader = (header: string) =>
  header.toLowerCase().replace(/\s+/g, "_").replace(/^"|"$/g, "");

const mapRowToStock = (row: any) => ({
  name: row["name"]?.trim() || "",
  sold: Number(row["sold"] || 0),
  qty: Number(row["qty"] || 0),
  priceUsd: Number(row["price_in_usd"] || 0),
  priceKsh: Number(row["price_in_kshs"] || 0),
  etr: row["etr"] ? new Date(row["etr"]) : null,
  prevCostPb: Number(row["prevcostpb"] || 0),
  costKsh: Number(row["cost_in_kshs"] || 0),
  costUsd: Number(row["cost_in_usd"] || 0),
  profitPerBale: Number(row["prperbale"] || 0),
  bought: row["bought"] ? new Date(row["bought"]) : null,
  type: row["type"]?.trim() || "",
  code: row["code"]?.trim() || "",
  loading: Number(row["loading"] || 0),
  supplier: row["supplier"]?.trim() || "",
  notes: row["notes"]?.trim() || "",
  fob: Number(row["fob"] || 0),
  imageUrl: row["imageurl"]?.trim() || "",
  appPrice: Number(row["app_price"] || 0),
});

const importCSV = async () => {
  const rows: any[] = [];

  fs.createReadStream(filePath)
    .pipe(
      csvParser({
        separator: ",", // if you saved as comma CSV
        mapHeaders: ({ header }) => normalizeHeader(header),
      })
    )
    .on("data", (row) => {
      rows.push(mapRowToStock(row));
    })
    .on("end", async () => {
      console.log("Total rows parsed:", rows.length);

      for (const r of rows) {
        try {
          if (!r.name) {
            console.warn("Skipping row without name:", r);
            continue;
          }
          await prisma.stock.create({ data: r });
        } catch (err) {
          console.error("Failed to insert row:", r, err);
        }
      }

      console.log("Stock import completed!");
      process.exit(0);
    });
};

importCSV();