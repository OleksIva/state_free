import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateDetails, selectDetails } from "../../store/userSlice";

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

  const handleSaveForLater = () => {
    dispatch(updateDetails());
    alert("Your progress has been saved!");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="container mt-5 p-4 border rounded shadow mbcont">
      <h2 className="mb-4">Schritt 3</h2>

      <div className="row gy-4">
        <div className="col-md-12">
          <label className="form-label">Hast du gerade eine Staatsangehörigkeit?</label>
          <div className="custom-control custom-radio custom-radio-sm">
            <input
              {...register("currentNationality", { required: "Dieses Feld muss ausgefüllt werden." })}
              className="custom-control-input"
              type="radio"
              id="currentNationalityJa"
              value="ja"
            />
            <label className="custom-control-label" htmlFor="currentNationalityJa">Ja</label>
          </div>
          <div className="custom-control custom-radio custom-radio-sm">
            <input
              {...register("currentNationality", { required: "Dieses Feld muss ausgefüllt werden." })}
              className="custom-control-input"
              type="radio"
              id="currentNationalityNein"
              value="nein"
            />
            <label className="custom-control-label" htmlFor="currentNationalityNein">Nein</label>
          </div>
          {errors.currentNationality && <p className="text-danger">{errors.currentNationality.message}</p>}
        </div>

        <div className="col-md-12">
          <label className="form-label">Wurde dir eine Staatsangehörigkeit zugeschrieben, die du aber nicht besitzt?</label>
          <div className="custom-control custom-radio custom-radio-sm">
            <input
              {...register("attributedNationality", { required: "Dieses Feld muss ausgefüllt werden." })}
              className="custom-control-input"
              type="radio"
              id="attributedNationalityJa"
              value="ja"
            />
            <label className="custom-control-label" htmlFor="attributedNationalityJa">Ja</label>
          </div>
          <div className="custom-control custom-radio custom-radio-sm">
            <input
              {...register("attributedNationality", { required: "Dieses Feld muss ausgefüllt werden." })}
              className="custom-control-input"
              type="radio"
              id="attributedNationalityNein"
              value="nein"
            />
            <label className="custom-control-label" htmlFor="attributedNationalityNein">Nein</label>
          </div>
          {errors.attributedNationality && <p className="text-danger">{errors.attributedNationality.message}</p>}
        </div>

        <div className="col-md-12">
          <label className="form-label">Hattest du jemals eine Staatsangehörigkeit?</label>
          <input
            className="form-control"
            {...register("everHadNationality", { required: "Dieses Feld muss ausgefüllt werden." })}
          />
          {errors.everHadNationality && <p className="text-danger">{errors.everHadNationality.message}</p>}
        </div>

        <div className="col-md-12">
          <label className="form-label">Wenn ja, welche und warum wurde sie dir entzogen?</label>
          <textarea
            className="form-control"
            {...register("revokedNationalityDetails", { required: "Dieses Feld muss ausgefüllt werden." })}
          />
          {errors.revokedNationalityDetails && <p className="text-danger">{errors.revokedNationalityDetails.message}</p>}
        </div>

        <div className="col-md-12">
          <label className="form-label">Hast du die Staatsangehörigkeit in Deutschland oder in einem anderen Land beantragt?</label>
          <div className="mb-3">
            <label className="form-label">Land des Antrags:</label>
            <input
              className="form-control"
              {...register("applicationCountry", { required: "Dieses Feld muss ausgefüllt werden." })}
            />
            {errors.applicationCountry && <p className="text-danger">{errors.applicationCountry.message}</p>}
          </div>
          <div>
            <label className="form-label">Datum des Antrags:</label>
            <input
              className="form-control"
              type="date"
              {...register("applicationDate", { required: "Dieses Feld muss ausgefüllt werden." })}
            />
            {errors.applicationDate && <p className="text-danger">{errors.applicationDate.message}</p>}
          </div>
        </div>

        <div className="col-md-12">
          <label className="form-label">Entscheidung:</label>
          <textarea
            className="form-control"
            {...register("decision", { required: "Dieses Feld muss ausgefüllt werden." })}
          />
          {errors.decision && <p className="text-danger">{errors.decision.message}</p>}
        </div>

        <div className="col-md-12">
          <label className="form-label">Gilst du in einem anderen Land als staatenlos?</label>
          <div className="custom-control custom-radio custom-radio-sm">
            <input
              {...register("statelessInOtherCountry", { required: "Dieses Feld muss ausgefüllt werden." })}
              className="custom-control-input"
              type="radio"
              id="statelessInOtherCountryJa"
              value="ja"
            />
            <label className="custom-control-label" htmlFor="statelessInOtherCountryJa">Ja</label>
          </div>
          <div className="custom-control custom-radio custom-radio-sm">
            <input
              {...register("statelessInOtherCountry", { required: "Dieses Feld muss ausgefüllt werden." })}
              className="custom-control-input"
              type="radio"
              id="statelessInOtherCountryNein"
              value="nein"
            />
            <label className="custom-control-label" htmlFor="statelessInOtherCountryNein">Nein</label>
          </div>
          {errors.statelessInOtherCountry && <p className="text-danger">{errors.statelessInOtherCountry.message}</p>}
        </div>

        <div className="col-md-12">
          <label className="form-label">Falls ja, hast du dafür ein Dokument, das das nachweisen kann?</label>
          <div className="custom-control custom-radio custom-radio-sm">
            <input
              {...register("hasDocument", { required: "Dieses Feld muss ausgefüllt werden." })}
              className="custom-control-input"
              type="radio"
              id="hasDocumentJa"
              value="ja"
            />
            <label className="custom-control-label" htmlFor="hasDocumentJa">Ja</label>
          </div>
          <div className="custom-control custom-radio custom-radio-sm">
            <input
              {...register("hasDocument", { required: "Dieses Feld muss ausgefüllt werden." })}
              className="custom-control-input"
              type="radio"
              id="hasDocumentNein"
              value="nein"
            />
            <label className="custom-control-label" htmlFor="hasDocumentNein">Nein</label>
          </div>
          {errors.hasDocument && <p className="text-danger">{errors.hasDocument.message}</p>}
        </div>

        <div className="col-md-12">
          <label className="form-label">Falls nein, hast du bereits versucht, einen Nachweis dafür zu erlangen?</label>
          <div className="custom-control custom-radio custom-radio-sm">
            <input
              {...register("triedToObtainProof", { required: "Dieses Feld muss ausgefüllt werden." })}
              className="custom-control-input"
              type="radio"
              id="triedToObtainProofJa"
              value="ja"
            />
            <label className="custom-control-label" htmlFor="triedToObtainProofJa">Ja</label>
          </div>
          <div className="custom-control custom-radio custom-radio-sm">
            <input
              {...register("triedToObtainProof", { required: "Dieses Feld muss ausgefüllt werden." })}
              className="custom-control-input"
              type="radio"
              id="triedToObtainProofNein"
              value="nein"
            />
            <label className="custom-control-label" htmlFor="triedToObtainProofNein">Nein</label>
          </div>
          {errors.triedToObtainProof && <p className="text-danger">{errors.triedToObtainProof.message}</p>}
        </div>

        <div className="col-md-12">
          <label className="form-label">Bitte erkläre, warum du staatenlos bist und dich kein Staat als Staatsangehörige*r ansieht.</label>
          <textarea
            className="form-control"
            {...register("statelessReason", { required: "Dieses Feld muss ausgefüllt werden." })}
          />
          {errors.statelessReason && <p className="text-danger">{errors.statelessReason.message}</p>}
        </div>
      </div>

      <div className="d-flex justify-content-between mt-4">
      <button type="button" className="btn btn-outline-secondary">Für später speichern</button>
        <button type="submit" className="btn btn-success">Weiter</button>
      </div>
    </form>
  );
};

export default Step3;

