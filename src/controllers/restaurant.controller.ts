import { Request, Response } from "express";
import mongoose from "mongoose";
import { T } from "../libs/types/common";
import MemberService from "../models/Member.service";
import { MemberInput } from "../libs/types/member";
import { MemberType } from "../libs/enums/member.enum";

const restaurantController: T = {};
restaurantController.goHome = (req: Request, res: Response) => {
  try {
    // LOGIC
    // SERVICE MODEL
    // ...
    console.log("goHome");
    res.send("Home Page");
    // send | json | redirect | end | render
  } catch (err) {
    console.log("Error goHome:", err);
  }
};

restaurantController.getLogin = (req: Request, res: Response) => {
  try {
    console.log("getLogin");
    res.send("Login Page");
  } catch (err) {
    console.log("Error getLogin:", err);
  }
};

restaurantController.getSignup = (req: Request, res: Response) => {
  try {
    console.log("getSignup");
    res.send("Signup Page");
  } catch (err) {
    console.log("Error getSignup:", err);
  }
};

restaurantController.processLogin = (req: Request, res: Response) => {
  try {
    console.log("processLogin");
    res.send("Done");
  } catch (err) {
    console.log("Error processLogin:", err);
  }
};

restaurantController.processSignup = async (req: Request, res: Response) => {
  try {
    console.log("processSignup");
    console.log("body:", req.body);

    const newMember: MemberInput = req.body;
    newMember.memberType = MemberType.RESTAURANT;

    const memberService = new MemberService();
    const result = await memberService.processSignup(newMember);

    res.send(result);
  } catch (err) {
    console.log("Error processSignup:", err);
    res.send(err);

    //     //
    //     if (err instanceof mongoose.Error.ValidationError) {
    //       return res.status(400).json({
    //         message: "Some signup fields are missing or invalid.",
    //         fields: Object.keys(err.errors),
    //       });
    //     }

    //     if (
    //       typeof err === "object" &&
    //       err !== null &&
    //       "code" in err &&
    //       err.code === 11000
    //     ) {
    //       return res.status(409).json({
    //         message: "That nickname or phone number is already registered.",
    //       });
    //     }

    //     return res.status(500).json({ message: "Signup failed. Please try again." });
  }
};

export default restaurantController;
