import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateDetails, selectDetails } from "../../store/userSlice";

const Step2 = () => {
  const dispatch = useDispatch();
  const details = useSelector(selectDetails);
  const navigate = useNavigate();
  const { handleSubmit, register, watch, formState: { errors } } = useForm({
    defaultValues: details
  });

  const onSubmit = (data) => {
    dispatch(updateDetails(data));
    navigate("/assessment/step3");
  };

  const handleSaveForLater = () => {
    dispatch(updateDetails());
    alert("Your progress has been saved!");
  };

  const bornInGermany = watch("bornInGermany");

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="container mt-5 p-4 border rounded shadow mbcont">
      <h2 className="mb-4">Schritt 2</h2>

      <div className="row gy-4">
        <div className="col-md-12">
          <label className="form-label">Bist du in Deutschland geboren?</label>
          <div className="custom-control custom-radio custom-radio-sm">
            <input
              {...register("bornInGermany", { required: "Dieses Feld muss ausgefüllt werden." })}
              type="radio"
              className="custom-control-input"
              id="bornInGermanyJa"
              value="ja"
            />
            <label className="custom-control-label" htmlFor="bornInGermanyJa">Ja</label>
          </div>
          <div className="custom-control custom-radio custom-radio-sm">
            <input
              {...register("bornInGermany", { required: "Dieses Feld muss ausgefüllt werden." })}
              type="radio"
              className="custom-control-input"
              id="bornInGermanyNein"
              value="nein"
            />
            <label className="custom-control-label" htmlFor="bornInGermanyNein">Nein</label>
          </div>
          {errors.bornInGermany && <p className="text-danger">{errors.bornInGermany.message}</p>}
        </div>

        {bornInGermany === "ja" && (
          <>
            <div className="col-md-12">
              <label className="form-label">Hast du eine Geburtsurkunde oder einen Auszug aus dem Geburtenregister, der dies nachweist?</label>
              <div className="custom-control custom-radio custom-radio-sm">
                <input
                  {...register("hasBirthCertificate", { required: "Dieses Feld muss ausgefüllt werden." })}
                  className="custom-control-input"
                  type="radio"
                  id="hasBirthCertificateJa"
                  value="ja"
                />
                <label className="custom-control-label" htmlFor="hasBirthCertificateJa">Ja</label>
              </div>
              <div className="custom-control custom-radio custom-radio-sm">
                <input
                  {...register("hasBirthCertificate", { required: "Dieses Feld muss ausgefüllt werden." })}
                  className="custom-control-input"
                  type="radio"
                  id="hasBirthCertificateNein"
                  value="nein"
                />
                <label className="custom-control-label" htmlFor="hasBirthCertificateNein">Nein</label>
              </div>
              {errors.hasBirthCertificate && <p className="text-danger">{errors.hasBirthCertificate.message}</p>}
            </div>
          </>
        )}

        <div className="col-md-12">
          <label className="form-label">Ort hinzufügen:</label>
          <input className="form-control" {...register("geburtsort")} />
        </div>

        <div className="col-md-12">
          <label className="form-label">Wurde die Geburt dokumentiert?</label>
          <div className="custom-control custom-radio custom-radio-sm">
            <input
              {...register("birthDocumented", { required: "Dieses Feld muss ausgefüllt werden." })}
              className="custom-control-input"
              type="radio"
              id="birthDocumentedJa"
              value="ja"
            />
            <label className="custom-control-label" htmlFor="birthDocumentedJa">Ja</label>
          </div>
          <div className="custom-control custom-radio custom-radio-sm">
            <input
              {...register("birthDocumented", { required: "Dieses Feld muss ausgefüllt werden." })}
              className="custom-control-input"
              type="radio"
              id="birthDocumentedNein"
              value="nein"
            />
            <label className="custom-control-label" htmlFor="birthDocumentedNein">Nein</label>
          </div>
          {errors.birthDocumented && <p className="text-danger">{errors.birthDocumented.message}</p>}
        </div>
      </div>

      <div className="d-flex justify-content-between mt-4">
      <button type="button" className="btn btn-outline-secondary">Für später speichern</button>
        <button type="submit" className="btn btn-success">Weiter</button>
      </div>
    </form>
  );
};

export default Step2;

