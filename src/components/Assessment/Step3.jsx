import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateDetails, selectDetails } from "../../store/userSlice";
import './assessment.css';

const Step3 = () => {
  const dispatch = useDispatch();
  const details = useSelector(selectDetails);
  const navigate = useNavigate();
  const { handleSubmit, register, formState: { errors } } = useForm({
    defaultValues: details
  });

  const onSubmit = (data) => {
    dispatch(updateDetails(data));
    navigate("/assessment/step4");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="assessment-form__container">
      <h2>Step 3</h2>

      <div className="assessment-form__inputs">
        {/* Вопросы о гражданстве */}
        <label>
          Hast du gerade eine Staatsangehörigkeit?
          <div>
            <label><input {...register("currentNationality")} type="radio" value="ja" /> Ja</label>
            <label><input {...register("currentNationality")} type="radio" value="nein" /> Nein</label>
          </div>
        </label>

        <label>
          Wurde dir eine Staatsangehörigkeit zugeschrieben, die du aber nicht besitzt?
          <div>
            <label><input {...register("attributedNationality")} type="radio" value="ja" /> Ja</label>
            <label><input {...register("attributedNationality")} type="radio" value="nein" /> Nein</label>
          </div>
        </label>

        <label>
          Hattest du jemals eine Staatsangehörigkeit?
          <input {...register("everHadNationality")} />
        </label>

        <label>
          Wenn ja, welche und warum wurde sie dir entzogen?
          <textarea {...register("revokedNationalityDetails")} />
        </label>

        {/* Заявка на гражданство */}
        <label>
          Hast du die Staatsangehörigkeit in Deutschland oder in einem anderen Land beantragt?
          <div>
            <label>Land des Antrags: <input {...register("applicationCountry")} /></label>
            <label>Datum des Antrags: <input {...register("applicationDate")} type="date" /></label>
          </div>
        </label>

        <label>
          Entscheidung:
          <textarea {...register("decision")} />
        </label>

        {/* Статус без гражданства */}
        <label>
          Gilst du in einem anderen Land als staatenlos?
          <div>
            <label><input {...register("statelessInOtherCountry")} type="radio" value="ja" /> Ja</label>
            <label><input {...register("statelessInOtherCountry")} type="radio" value="nein" /> Nein</label>
          </div>
        </label>

        <label>
          Falls ja, hast du dafür ein Dokument, das das nachweisen kann?
          <div>
            <label><input {...register("hasDocument")} type="radio" value="ja" /> Ja</label>
            <label><input {...register("hasDocument")} type="radio" value="nein" /> Nein</label>
          </div>
        </label>

        <label>
          Falls nein, hast du bereits versucht, einen Nachweis dafür zu erlangen?
          <div>
            <label><input {...register("triedToObtainProof")} type="radio" value="ja" /> Ja</label>
            <label><input {...register("triedToObtainProof")} type="radio" value="nein" /> Nein</label>
          </div>
        </label>

        <label>
          Bitte erkläre, warum du staatenlos bist und dich kein Staat als Staatsangehörige*r ansieht.
          <textarea {...register("statelessReason")} />
        </label>
      </div>

      <input type="submit" />
    </form>
  );
};

export default Step3;
