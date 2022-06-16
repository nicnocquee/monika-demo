import { NextApiRequest, NextApiResponse } from "next";

let normal = 0;
let fail = 0;
const delay = 3000;
let threshold = 4;

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
  const result = {
    commit: "COPARROT_COMMIT_HASH",
    date: "COPARROT_DEPLOY_DATE",
  };

  if (normal < threshold) {
    normal++;
    res.status(200).json(result);
    return;
  }

  if (normal !== fail) {
    fail++;
    await new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve();
      }, delay);
    });
    res.status(200).json(result);
  } else {
    normal = 0;
    fail = 0;
    res.status(200).json(result);
  }
};

export default handler;
