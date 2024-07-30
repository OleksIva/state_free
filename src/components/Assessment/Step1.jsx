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
    <form onSubmit={handleSubmit(onSubmit)} className="assessment-form__container">
      <h2>Step 1</h2>
      <div className="assessment-form__inputs">
      <label>
        Vorname:
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
      </div>
      <input type="submit" />
    </form>
  );
};

export default Step1;
