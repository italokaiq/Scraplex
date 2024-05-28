import { zodResolver } from "@hookform/resolvers/zod";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { UserContext } from "../../../providers/UserContext";
import { Input } from "../Input";
import { InputPassword } from "../InputPassword";
import { loginFormSchema } from "./loginForm.schema";

export const LoginForm = () => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginFormSchema),
  });

  const { userLogin } = useContext(UserContext);

  const onSubmit = (payload) => {
    userLogin(payload, setLoading, reset);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form__container">
      <Input
        label="Seu e-mail"
        type="text"
        error={errors.email}
        {...register("email")}
      />

      <InputPassword
        label="Sua senha"
        error={errors.password}
        {...register("password")}
      />

      <div className="form__end">
        <Link className="link" to="/register">
          cadastre-se
        </Link>
        <button className="btn" type="submit">
          {loading ? "acessando..." : "acessar scraplex"}
        </button>
      </div>
    </form>
  );
};
