import { NextApiRequest, NextApiResponse } from "next";

let normal = 0;
let fail = 0;
let threshold = 3;

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
  console.log("/api/demo/status");
  const result = {
    commit: "COPARROT_COMMIT_HASH",
    date: "COPARROT_DEPLOY_DATE",
  };

  if (normal < threshold) {
    normal++;
    console.log("returning 200");
    res.status(200).json(result);
    return;
  }

  if (normal !== fail) {
    fail++;
    console.log("returning 500");
    res.status(500).end();
  } else {
    normal = 0;
    fail = 0;
    console.log("returning 200");
    res.status(200).json(result);
  }
};

export default handler;
