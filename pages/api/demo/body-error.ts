import { NextApiRequest, NextApiResponse } from "next";

let normal = 0;
let fail = 0;
let threshold = 4;

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
  const okResult = {
    status: "ok",
  };
  const notOkResult = {
    status: "error",
  };

  if (normal < threshold) {
    normal++;
    res.status(200).json(okResult);
    return;
  }

  if (normal !== fail) {
    fail++;
    res.status(200).json(notOkResult);
  } else {
    normal = 0;
    fail = 0;
    res.status(200).json(okResult);
  }
};

export default handler;
