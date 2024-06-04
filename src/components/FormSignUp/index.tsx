import { useNavigate } from "react-router-dom";
import { Container } from "./styles";
import { Button } from "../Button";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAuth } from "../../hooks/useAuth";

type InputTypes = {
  name: string
  email: string;
  password: string;
};

export function FormSignUp() {
    const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<InputTypes>();

  const {signUp} = useAuth()
  const navigate = useNavigate()
  const onSubmit: SubmitHandler<InputTypes> = async (data) => {
    const userCreated= await signUp(data);
    if (userCreated) {
      navigate("/");
      reset();
    }
    
  };
  return (
    <Container>
      <h2>Crie sua conta</h2>

      <form onSubmit={ handleSubmit(onSubmit)}>
      <section>
          <label>
           Nome:
            <input type="text" placeholder="digite seu nome" {...register("name", {required: "campo obrigatório!", })} />
          </label>
            <span className="inputError" >{errors.name?.message}</span>

        </section>
        <section>
          <label>
           Email:
            <input type="text" placeholder="Example@gmail.com" {...register("email", {required: "campo obrigatório!", })} />
          </label>
            <span className="inputError" >{errors.email?.message}</span>

        </section>

        <section>
          <label>
            Senha:
            <input type="password" placeholder="minimum 7 characters" {...register("password", {
              required: "campo obrigatório!",
              minLength: {
                value: 7,
                message: "A senha deve ter no mínimo 7 dígitos",
              },
              pattern: {
                value: /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}|:"<>?,./\\[\]-]).+$/,
                message:
                  "A senha deve ter número, letra maiúscula e caractere especial",
              },
            })}/>
          </label>
          <span className="inputError" >{errors.password?.message}</span>
        </section>

        <Button title="Finalizar" loading={false} variant="secondary" />
      </form>

      <span className="messageChangePage">Não tem uma conta? </span>
      <button className="buttonChangePage" onClick={() => navigate("/")}>
        Registrar
      </button>
    </Container>
  );
}
