import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = await fetch(
      "https://pro-openapi.debank.com/v1/token?chain_id=base&id=0xe3CF8dBcBDC9B220ddeaD0bD6342E245DAFF934d",
      {
        headers: {
          accept: "application/json",
          AccessKey: process.env.DEBANK_API_KEY || "",
        },
      }
    );

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch token price" },
      { status: 500 }
    );
  }
}
