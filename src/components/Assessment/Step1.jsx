import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom"; 
import { useDispatch, useSelector } from "react-redux";
import { updateDetails, selectDetails } from "../../store/userSlice";
import './assessment.css';

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
    <form onSubmit={handleSubmit(onSubmit)} className="assessment-form__container">
      <h2>Step 1</h2>
      <div className="assessment-form__inputs">
      
      <label>
        Anrede:
        <select {...register("salutation", { required: "This is required." })}>
          <option value="">Bitte auswählen</option>
          <option value="Herr">Herr</option>
          <option value="Frau">Frau</option>
          <option value="Dr">Dr</option>
          <option value="ohne Anrede">ohne Anrede</option>
        </select>
        {errors.salutation && <p>{errors.salutation.message}</p>}
      </label>
      
      <label>
        Titel (optional):
        <input
          {...register("title")}
        />
      </label>

      <label>
        Vorname/n:
        <input
          {...register("firstName", { required: "This is required." })}
        />
        {errors.firstName && <p>{errors.firstName.message}</p>}
      </label>

      <label>
        Nachname:
        <input
          {...register("lastName", { required: "This is required." })}
        />
        {errors.lastName && <p>{errors.lastName.message}</p>}
      </label>

      <label>
        Andere Name/n:
        <input
          {...register("otherNames")}
        />
      </label>

      <label>
        Ausweiss-oder Aufenthaltsdokument:
        <input
          {...register("documentType", { required: "This is required." })}
        />
        {errors.documentType && <p>{errors.documentType.message}</p>}
      </label>

      <label>
        Nummer des Dokuments:
        <input
          {...register("documentNumber", { required: "This is required." })}
        />
        {errors.documentNumber && <p>{errors.documentNumber.message}</p>}
      </label>

      <label>
        Welche Staatsgehörigkeit steht in deinen Dokumenten:
        <input
          {...register("nationality", { required: "This is required." })}
        />
        {errors.nationality && <p>{errors.nationality.message}</p>}
      </label>

      <label>
        Ethnische Zugehörigkeit:
        <input
          {...register("ethnicity")}
        />
      </label>

      <label>
        Religion:
        <input
          {...register("religion")}
        />
      </label>

      </div>
      <input type="submit" />
    </form>
  );
};

export default Step1;





// import React from "react";
// import { useForm } from "react-hook-form";
// import { useNavigate } from "react-router-dom"; 
// import { useDispatch, useSelector } from "react-redux";
// import { updateDetails, selectDetails } from "../../store/userSlice";

// const Step1 = () => {
//   const dispatch = useDispatch();
//   const details = useSelector(selectDetails);
//   const navigate = useNavigate(); 
//   const { handleSubmit, register, formState: { errors } } = useForm({
//     defaultValues: details
//   });

//   const onSubmit = (data) => {
//     dispatch(updateDetails(data));
//     navigate("/assessment/step2"); 
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)} className="assessment-form__container">
//       <h2>Step 1</h2>
//       <div className="assessment-form__inputs">
//       <label>
//         Vorname:
//         <input
//           {...register("firstName", { required: "This is required." })}
//         />
//         {errors.firstName && <p>{errors.firstName.message}</p>}
//       </label>
//       <label>
//         Nachname:
//         <input
//           {...register("lastName", { required: "This is required." })}
//         />
//         {errors.lastName && <p>{errors.lastName.message}</p>}
//       </label>
//       </div>
//       <input type="submit" />
//     </form>
//   );
// };

// export default Step1;
