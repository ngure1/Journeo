type LoginDetails = {
    email : string;
    password: string;
}
type signUpDetails = {
    first_name: string,
    last_name: string,
    username: string,
    email: string,
    password: string,
    re_password: string,
  };

export type { LoginDetails,signUpDetails }