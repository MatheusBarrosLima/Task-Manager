import { Link } from "react-router-dom";
import { Container } from "./styles";
import logoReprograma from "../../assets/logo-rj.png";
import { FormLogin } from "../../components/FormLogin";
import { FormSignUp } from "../../components/FormSignUp";

export function SignUp() {
  return (
    <Container>
     <div className="signInPart2">
        <FormSignUp/>

      </div>

      <div className="signInPart1">
      <div>
          <h1>Task Manager</h1>
          <Link
            to={"https://emanuelquintino.github.io/Page-WDC"}
            target="_blank"
          >
            <img src={logoReprograma} alt="" />
          </Link>
        </div>
      </div>
    </Container>
  );
}