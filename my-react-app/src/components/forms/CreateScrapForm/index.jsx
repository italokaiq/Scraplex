import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { ScrapContext } from "../../../providers";
import { Textarea } from "../Textarea";

export const CreateScrapForm = () => {
  const { createScrap } = useContext(ScrapContext);
  const [loading, setLoading] = useState(false);

  const { handleSubmit, register, reset } = useForm();

  const submit = (payload) => {
    createScrap(payload, setLoading, reset);
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <Textarea label="Sua mensagem" {...register("content")} />
      <button type="submit" className="btn solid">
        {loading ? "Deixando scrap..." : "Deixar scrap"}
      </button>
    </form>
  );
};
