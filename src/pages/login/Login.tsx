import Button from "../../components/Button";
import { IButtonProps } from "../../components/Button/props";
import IconGoogle from "../../assets/images/icon-google.svg";
import IconFacebook from "../../assets/images/icon-facebook.svg";
const data: IButtonProps[] = [
  {
    text: `Đăng nhập bằng Google`,
    icon: IconGoogle,
    className: "my-2",
  },
  {
    text: `Đăng nhập bằng Facebook`,
    icon: IconFacebook,
    className: "my-2",
  },
];

function Login() {
  return (
    <>
      {data.map((props) => (
        <Button {...props} />
      ))}
    </>
  );
}

export default Login;
