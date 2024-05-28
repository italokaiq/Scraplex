import { z } from "zod";

const registerFormSchema = z
  .object({
    name: z.string().min(1, "Este campo é obrigatório."),
    email: z
      .string()
      .email("Forneça um e-mail válido.")
      .min(1, "Este campo é obrigatório."),
    password: z
      .string()
      .min(8, "São necessários pelo menos oito (8) caracteres.")
      .regex(/[a-z]+/, "É necessário conter pelo menos uma letra minúscula.")
      .regex(/[A-Z]+/, "É necessário conter pelo menos uma letra maiúscula.")
      .regex(/[0-9]+/, "É necessário conter pelo menos um número.")
      .regex(
        /[!@#$%^&*()_+{}[\]:;<>,.?~\\-]+/,
        "É necessário conter pelo menos um caracter especial."
      ),
    confirmPassword: z.string().min(1, "Confirmar a senha é obrigatório."),
  })
  .refine(({ password, confirmPassword }) => password === confirmPassword, {
    message: "As senhas não correspondem.",
    path: ["confirmPassword"],
  })
  .refine(({ name, password }) => !password.includes(name), {
    message: "A senha não pode conter seu nome.",
    path: ["password"],
  });

export { registerFormSchema };
