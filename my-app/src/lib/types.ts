
export type SuccessResponse = {
  message: string;
};

export type ErrorResponse = {
  message?: string;
  firstName?: string;
  lastName?: string;
  telegram?: string;
  email?: string;
  collegeGroup?: string;
  nameTeam?: string;
}

export enum ErrorTypesEnum {
  message = "message",
  firstName = "firstName",
  lastName = "lastName",
  telegram = "telegram",
  email = "email",
  collegeGroup = "collegeGroup",
  nameTeam = "nameTeam",
}
