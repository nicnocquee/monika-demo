import { NextApiRequest, NextApiResponse } from "next";

let normal = 0;
let fail = 0;
let threshold = 4;

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
  console.log("LOGIN");
  const result = {
    uid: "1000",
  };

  if (normal < threshold) {
    normal++;
    res.status(200).json(result);
    return;
  }

  if (normal !== fail) {
    fail++;
    res.status(500).end();
  } else {
    normal = 0;
    fail = 0;
    res.status(200).json(result);
  }
};

export default handler;
