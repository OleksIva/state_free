import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom"; 
import { useDispatch, useSelector } from "react-redux";
import { updateDetails, selectDetails } from "../../store/userSlice";
import './assessment.css';

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

  // Watch for conditional fields
  const bornInGermany = watch("bornInGermany");
  const hasBirthCertificate = watch("hasBirthCertificate");
  const birthDocumented = watch("birthDocumented");

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="assessment-form__container">
      <h2>Step 2</h2>
      <div className="assessment-form__inputs">
      
        <label>Bist du in Deutschland geboren?</label>
        <label>
          <input
            {...register("bornInGermany", { required: "This is required." })}
            type="radio"
            value="ja"
          />
          Ja
        </label>
        <label>
          <input
            {...register("bornInGermany", { required: "This is required." })}
            type="radio"
            value="nein"
          />
          Nein
        </label>
        {errors.bornInGermany && <p>{errors.bornInGermany.message}</p>}
        
        {bornInGermany === "ja" && (
          <>
            <label>Hast du eine Geburtsurkunde oder einen Auszug aus dem Geburtenregister, der dies nachweist?</label>
            <label>
              <input
                {...register("hasBirthCertificate", { required: "This is required." })}
                type="radio"
                value="ja"
              />
              Ja
            </label>
            <label>
              <input
                {...register("hasBirthCertificate", { required: "This is required." })}
                type="radio"
                value="nein"
              />
              Nein
            </label>
            {errors.hasBirthCertificate && <p>{errors.hasBirthCertificate.message}</p>}

            {hasBirthCertificate === "nein" && (
              <label>
                Begründen:
                <textarea {...register("noCertificateReason")} />
              </label>
            )}
          </>
        )}

        {bornInGermany === "nein" && (
          <>
            <label>Falls nein, in welchem Land bist du geboren?</label>
            <input
              {...register("birthCountry", { required: "This is required." })}
            />
            {errors.birthCountry && <p>{errors.birthCountry.message}</p>}
          </>
        )}

        <label>Ort hinzufügen</label>
        <input
          {...register("geburtsort")}
        />

        <label>Wurde die Geburt dokumentiert?</label>
        <label>
          <input
            {...register("birthDocumented", { required: "This is required." })}
            type="radio"
            value="ja"
          />
          Ja
        </label>
        <label>
          <input
            {...register("birthDocumented", { required: "This is required." })}
            type="radio"
            value="nein"
          />
          Nein
        </label>
        {errors.birthDocumented && <p>{errors.birthDocumented.message}</p>}

        {birthDocumented === "nein" && (
          <label>
            Wenn nein, warum?
            <textarea {...register("noDocumentationReason")} />
          </label>
        )}

      </div>
      <input type="submit" />
    </form>
  );
};

export default Step2;





// import React from "react";
// import { useForm } from "react-hook-form";
// import { useNavigate } from "react-router-dom"; 
// import { useDispatch, useSelector } from "react-redux";
// import { updateDetails, selectDetails } from "../../store/userSlice";

// const Step2 = () => {
//   const dispatch = useDispatch();
//   const details = useSelector(selectDetails);
//   const navigate = useNavigate(); 
//   const { handleSubmit, register, formState: { errors } } = useForm({
//     defaultValues: details
//   });

//   const onSubmit = (data) => {
//     dispatch(updateDetails(data));
//     navigate("/assessment/step3"); 
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)} className="assessment-form__container">
//     <h2>Step 2</h2>
//     <div className="assessment-form__inputs">
//     <label>
//       Alter:
//       <input
//         {...register("age", {
//           required: "This is required",
//           min: {
//             value: 18,
//             message: "You are required to be 18 above."
//           }
//         })}
//         type="number"
//       />
//       {errors.age && <p>{errors.age.message}</p>}
//     </label>
//     <label>
//         Geburtsort:
//         <input
//           {...register("geburtsort", { required: "This is required." })}
//         />
//         {errors.lastName && <p>{errors.geburtsort.message}</p>}
//       </label>
//     </div>
//     <input type="submit" />
//   </form>
//   );
// };

// export default Step2;

