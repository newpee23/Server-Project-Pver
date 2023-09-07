import { Request, Response } from "express"; // Import types for Request and Response

export const getQuestionnaireApi = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const f_id: string = req.params.f_id;

    res.status(200).json({ message: `f_id : ${f_id}` });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error });
  }
};
