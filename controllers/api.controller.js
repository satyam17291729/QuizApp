import Test from "./test.controller.js";
import Marks from "../models/marks.js";
class ApiController {
  dataGiver(req, res) {
    console.log(Test.quizQuestion)
    return res.send(Test.quizQuestion);
  }
  async dataReciver(req, res) {
    try {
      console.log(Test.nameOfSub);
      const isExist = await Marks.findOneAndUpdate(
        { email: req.session.email, subject: Test.nameOfSub },
        { $set: { marks: req.body.score } },
        { new: true }
      );
      console.log(isExist)

      if (!isExist) {
        const marksData = new Marks({
          email: req.session.email,
          marks: req.body.score,
          subject: Test.nameOfSub
        });
        const data = await marksData.save();
      }
    } catch (err) {
      console.log("something went wrong");
    }


  }
}
export default ApiController;