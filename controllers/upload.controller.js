const { StatusCodes } = require("http-status-codes");

const upload = async (req, res) => {
  const file = req.file;
  const fileName = file.originalname;

  return res.status(StatusCodes.OK).json({ files: fileName });
};

module.exports = { upload };
