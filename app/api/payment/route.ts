import { Client } from "square";
import { randomUUID } from 'crypto';
import { NextResponse } from 'next/server';
import { NextApiRequest, NextApiResponse } from "next";
(BigInt.prototype as any).toJSON = function () {
  return this.toString();
};

const { paymentsApi } = new Client({
  // accessToken: process.env.SQUARE_TOKEN,
  accessToken: "EAAAl3BM5mS4NS2mUYnbUiGlIiL4JtRni2pU9GtQlxWAFc_BgwFu_J3VRcb7lRah",
  environment: "sandbox" as any,
});


export default async function POST(req:NextApiRequest, res:NextApiResponse) {
    const { result } = await paymentsApi.createPayment({
      idempotencyKey: randomUUID(),
      sourceId: req.body.sourceId,
      amountMoney: {
        currency: 'USD',
        amount: 1 as any
      }
    })
    console.log(result);
    res.status(200).json(result);
    return NextResponse.json(result)
}