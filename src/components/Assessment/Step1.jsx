import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom"; 
import { useDispatch, useSelector } from "react-redux";
import { updateDetails, selectDetails } from "../../store/userSlice";

const Step1 = () => {
  const dispatch = useDispatch();
  const details = useSelector(selectDetails);
  const navigate = useNavigate(); 
  const { handleSubmit, register, formState: { errors } } = useForm({
    defaultValues: details
  });

  const onSubmit = (data) => {
    dispatch(updateDetails(data));
    navigate("/assessment/step2"); 
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="container mt-5 p-4 border rounded shadow mbcont">
      <h2 className="mb-4">Schritt 1</h2>
      <div className="row gy-4">
        <div className="col-md-6">
          <label className="form-label">Anrede:</label>
          <select className="form-select" {...register("salutation", { required: "Dieses Feld muss ausgefüllt werden." })}>
            <option value="">Bitte auswählen</option>
            <option value="Herr">Herr</option>
            <option value="Frau">Frau</option>
            <option value="Dr">Dr</option>
            <option value="ohne Anrede">ohne Anrede</option>
          </select>
          {errors.salutation && <p className="text-danger">{errors.salutation.message}</p>}
        </div>

        <div className="col-md-6">
          <label className="form-label">Titel (optional):</label>
          <input className="form-control" {...register("title")} />
        </div>

        <div className="col-md-6">
          <label className="form-label">Vorname/n:</label>
          <input className="form-control" {...register("firstName", { required: "Dieses Feld muss ausgefüllt werden." })} />
          {errors.firstName && <p className="text-danger">{errors.firstName.message}</p>}
        </div>

        <div className="col-md-6">
          <label className="form-label">Nachname:</label>
          <input className="form-control" {...register("lastName", { required: "Dieses Feld muss ausgefüllt werden." })} />
          {errors.lastName && <p className="text-danger">{errors.lastName.message}</p>}
        </div>

        <div className="col-md-6">
          <label className="form-label">Andere Name/n:</label>
          <input className="form-control" {...register("otherNames")} />
        </div>

        <div className="col-md-6">
          <label className="form-label">Ausweiss-oder Aufenthaltsdokument:</label>
          <input className="form-control" {...register("documentType", { required: "Dieses Feld muss ausgefüllt werden." })} />
          {errors.documentType && <p className="text-danger">{errors.documentType.message}</p>}
        </div>

        <div className="col-md-6">
          <label className="form-label">Nummer des Dokuments:</label>
          <input className="form-control" {...register("documentNumber", { required: "Dieses Feld muss ausgefüllt werden." })} />
          {errors.documentNumber && <p className="text-danger">{errors.documentNumber.message}</p>}
        </div>

        <div className="col-md-6">
          <label className="form-label">Welche Staatsgehörigkeit steht in deinen Dokumenten:</label>
          <input className="form-control" {...register("nationality", { required: "Dieses Feld muss ausgefüllt werden." })} />
          {errors.nationality && <p className="text-danger">{errors.nationality.message}</p>}
        </div>

        <div className="col-md-6">
          <label className="form-label">Ethnische Zugehörigkeit:</label>
          <input className="form-control" {...register("ethnicity")} />
        </div>

        <div className="col-md-6">
          <label className="form-label">Religion:</label>
          <input className="form-control" {...register("religion")} />
        </div>
      </div>
      
      <div className="d-flex justify-content-between mt-4">
        <button type="button" className="btn btn-outline-secondary">Für später speichern</button>
        <button type="submit" className="btn btn-success">Weiter</button>
      </div>
    </form>
  );
};

export default Step1;

