import { useNavigate } from "react-router-dom";
import { Container } from "./styles";
import { Button } from "../Button";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAuth } from "../../hooks/useAuth";

type InputTypes = {
  email: string;
  password: string;
};

export function FormLogin() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<InputTypes>();

const { signIn,isLoading } =  useAuth()


  const onSubmit: SubmitHandler<InputTypes> = async ({email, password}) => {
    const isLogged = await signIn ({email, password})
    if (isLogged) reset();
    
  }
  return (
    <Container>
      <h2>Faça seu login</h2>

      <form onSubmit={ handleSubmit(onSubmit)}>
        <section>
          <label>
            Email:
            <input type="email" placeholder="example@gmail.com" {...register("email", {required: "campo obrigatório!", pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "endereço de email inválido!"
            }})} />
          </label>
            <span className="inputError" >{errors.email?.message}</span>

        </section>

        <section>
          <label>
            Senha:
            <input type="password" placeholder="minimum 7 characters" {...register("password", {
              required: "campo obrigatório!",
            })}/>
          </label>
          <span className="inputError" >{errors.password?.message}</span>
        </section>

        <Button title="Login" loading={isLoading} />
      </form>

      <span className="messageChangePage">Não tem uma conta? </span>
      <button className="buttonChangePage" onClick={() => navigate("/signup")}>
        Registrar
      </button>
    </Container>
  );
}
