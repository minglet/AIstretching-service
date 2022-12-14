// import User from "../db/models/User";
import User from "../models/User.model";
import { nullPrototypeHandler } from "../utils/nullPrototypeHandler";
import * as ClientError from "../responses/clientErrorResponse";
import * as ServerError from "../responses/serverErrorResponse";
import jwt from "jsonwebtoken";
import { v4 as uuidv4 } from "uuid";
import moment from "moment-timezone";
moment.tz.setDefault("Asia/Seoul");

class socialLoginService {
  ////////////////////////////////////////
  /////////////  카  카  오  ///////////////
  ////////////////////////////////////////
  //// 카카오 간편로그인 가입 & 로그인
  static async kakao({ email, access_token }) {
    // email 확인
    console.log("가즈아", email, access_token);
    const checkEmail = await User.findByEmail({ email });
    console.log("통과됌.", checkEmail);
    if (checkEmail.length !== 0 && checkEmail[0].provider !== "kakao")
      throw ClientError.unauthorized(
        "kakao 계정의 email로 이미 가입된 내역이 있습니다. 다시 한 번 확인해 주세요."
      );
    if (checkEmail.length == 1 && checkEmail[0].provider == "kakao") {
      // 기존 가입자 로그인(토큰 발급)
      const thisUser = checkEmail[0];
      const user_id = checkEmail[0].user_id;
      const secretKey = process.env.JWT_SECRET_KEY;
      const token = jwt.sign({ user_id: user_id }, secretKey);
      delete thisUser.password;
      const result_success = Object.assign(
        {
          result: true,
          message: `로그인이 성공적으로 이뤄졌습니다.`,
          token: token,
        },
        thisUser
      );
      return result_success;
    }
    if (checkEmail.length > 1) {
      throw ServerError.internalServerError(
        "[확인요망]: 해당 이메일로 가입된 사용자가 2명 이상입니다. 정책상 이메일 하나로 계정 하나만 생성 가능 합니다."
      );
    }
    // 신규 가입자 DB저장
    const user_id = uuidv4();
    const password = access_token;
    const nickname = `${email}_kakao`;
    const provider = "kakao";
    const newUser = await User.create({
      user_id,
      email,
      password,
      nickname,
      provider,
    });

    const checkNewUser = await User.findByEmail({ email });

    if (newUser[1] == 1 && checkNewUser.length == 1) {
      // 토큰 발급
      const thisUser = checkNewUser[0];
      const secretKey = process.env.JWT_SECRET_KEY;
      const token = jwt.sign({ user_id: user_id }, secretKey);
      delete thisUser.password;
      const result_success = Object.assign(
        {
          result: true,
          message: `회원가입이 성공적으로 이뤄졌습니다.`,
          token: token,
        },
        thisUser
      );
      return result_success;
    }
    if (newUser[1] !== 1 || checkNewUser.length == 0 || checkNewUser.length > 1)
      throw ServerError.internalServerError("[확인요망]: DB확인이 필요합니다.");
  }

  ////////////////////////////////////////
  /////////////  네  이  버  ///////////////
  ////////////////////////////////////////
  //// 네이버 간편로그인 가입 & 로그인
  static async naver({ email, access_token }) {
    // email 확인
    const checkEmail = await User.findByEmail({ email });
    if (checkEmail.length !== 0 && checkEmail[0].provider !== "naver")
      throw ClientError.unauthorized(
        "naver 계정의 email로 이미 가입된 내역이 있습니다. 다시 한 번 확인해 주세요."
      );
    if (checkEmail.length == 1 && checkEmail[0].provider == "naver") {
      // 기존 가입자 로그인(토큰 발급)
      const thisUser = checkEmail[0];
      const user_id = checkEmail[0].user_id;
      const secretKey = process.env.JWT_SECRET_KEY;
      const token = jwt.sign({ user_id: user_id }, secretKey);
      delete thisUser.password;
      const result_success = Object.assign(
        {
          result: true,
          message: `${thisUser.nickname}님의 로그인이 성공적으로 이뤄졌습니다.`,
          token: token,
        },
        thisUser
      );
      return result_success;
    }
    if (checkEmail.length > 1)
      throw ServerError.internalServerError(
        "[확인요망]: 해당 이메일로 가입된 사용자가 2명 이상입니다. 정책상 이메일 하나로 계정 하나만 생성 가능 합니다."
      );

    // 신규 가입자 DB저장
    const user_id = uuidv4();
    const password = access_token;
    const nickname = `${email}_naver`;
    const provider = "naver";
    const newUser = await User.create({
      user_id,
      email,
      password,
      nickname,
      provider,
    });

    const checkNewUser = await User.findByEmail({ email });

    if (newUser[1] == 1 && checkNewUser.length == 1) {
      // 토큰 발급
      const thisUser = checkNewUser[0];
      const secretKey = process.env.JWT_SECRET_KEY;
      const token = jwt.sign({ user_id: user_id }, secretKey);
      delete thisUser.password;
      const result_success = Object.assign(
        {
          result: true,
          message: `회원가입이 성공적으로 이뤄졌습니다.`,
          token: token,
        },
        thisUser
      );
      return result_success;
    }
    if (newUser[1] !== 1 || checkNewUser.length == 0 || checkNewUser.length > 1)
      throw ServerError.internalServerError("[확인요망]: DB확인이 필요합니다.");
  }

  ////////////////////////////////////////
  /////////////   구   글   ///////////////
  ////////////////////////////////////////
  //// 네이버 간편로그인 가입 & 로그인
  static async google({ email, refresh_token }) {
    // email 확인
    const checkEmail = await User.findByEmail({ email });
    if (checkEmail.length !== 0 && checkEmail[0].provider !== "google")
      throw ClientError.unauthorized(
        "google 계정의 email로 이미 가입된 내역이 있습니다. 다시 한 번 확인해 주세요."
      );
    if (checkEmail.length == 1 && checkEmail[0].provider == "google") {
      // 기존 가입자 로그인(토큰 발급)
      const thisUser = checkEmail[0];
      const user_id = checkEmail[0].user_id;
      const secretKey = process.env.JWT_SECRET_KEY;
      const token = jwt.sign({ user_id: user_id }, secretKey);
      delete thisUser.password;
      const result_success = Object.assign(
        {
          result: true,
          message: `로그인이 성공적으로 이뤄졌습니다.`,
          token: token,
        },
        thisUser
      );
      return result_success;
    }
    if (checkEmail.length > 1)
      throw ServerError.internalServerError(
        "[확인요망]: 해당 이메일로 가입된 사용자가 2명 이상입니다. 정책상 이메일 하나로 계정 하나만 생성 가능 합니다."
      );

    // 신규 가입자 DB저장
    const user_id = uuidv4();
    const password = refresh_token;
    const nickname = `${email}_google`;
    const provider = "google";
    const newUser = await User.create({
      user_id,
      email,
      password,
      nickname,
      provider,
    });

    const checkNewUser = await User.findByEmail({ email });

    if (newUser[1] == 1 && checkNewUser.length == 1) {
      // 토큰 발급
      const thisUser = checkNewUser[0];
      const secretKey = process.env.JWT_SECRET_KEY;
      const token = jwt.sign({ user_id: user_id }, secretKey);
      delete thisUser.password;
      const result_success = Object.assign(
        {
          result: true,
          message: `회원가입이 성공적으로 이뤄졌습니다.`,
          token: token,
        },
        thisUser
      );
      return result_success;
    }
    if (newUser[1] !== 1 || checkNewUser.length == 0 || checkNewUser.length > 1)
      throw ServerError.internalServerError("[확인요망]: DB확인이 필요합니다.");
  }
}

export = socialLoginService;
