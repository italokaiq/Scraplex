/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { ScrapContext } from "../../../providers";
import { Textarea } from "../Textarea";
import { useNavigate } from "react-router-dom";

export const UpdateScrapForm = () => {
  const { updateScrap, editScrap } = useContext(ScrapContext);
  const [loading, setLoading] = useState(false);

  const { handleSubmit, register, reset } = useForm();

  const navigate = useNavigate();

  useEffect(() => {
    if (!editScrap) {
      navigate("/dashboard");
    }
  }, [editScrap]);

  const submit = (payload) => {
    updateScrap(payload, setLoading, reset);
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <Textarea
        placeholder={editScrap?.content}
        label={"Sua mensagem"}
        {...register("content")}
      />
      <button type="submit" className="btn solid">
        {loading ? "Editando scrap..." : "Editar scrap"}
      </button>
    </form>
  );
};
