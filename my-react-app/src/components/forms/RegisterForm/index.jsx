import { zodResolver } from "@hookform/resolvers/zod";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { UserContext } from "../../../providers/UserContext";
import { Input } from "../Input";
import { InputPassword } from "../InputPassword";
import { registerFormSchema } from "./registerForm.schema";

export const RegisterForm = () => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerFormSchema),
  });

  const { userRegister } = useContext(UserContext);

  const onSubmit = (payload) => {
    userRegister(payload, setLoading, reset);
  };

  return (
    <form className="form__container" onSubmit={handleSubmit(onSubmit)}>
      <Input
        label="Seu nome"
        type="text"
        error={errors.name}
        {...register("name")}
      />

      <Input
        label="Seu e-mail"
        type="text"
        error={errors.email}
        {...register("email")}
      />

      <InputPassword
        label="Crie uma senha"
        error={errors.password}
        {...register("password")}
      />

      <InputPassword
        label="Confirme sua senha"
        error={errors.confirmPassword}
        {...register("confirmPassword")}
      />

      <div className="form__end">
        <Link className="link" to="/">
          voltar
        </Link>
        <button className="btn" type="submit">
          {loading ? "cadastrando..." : "cadastre-se"}
        </button>
      </div>
    </form>
  );
};
