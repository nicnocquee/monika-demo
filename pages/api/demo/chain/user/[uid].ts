import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  console.log("/api/demo/chain/user/[uid]");
  console.log(req.query.uid);
  if (req.query.uid !== "1000") {
    res.status(404).json({
      status: "not-found",
    });
    return;
  }

  console.log("returning /user/[uid]");
  res.status(200).json({
    status: "ok",
  });
};

export default handler;
