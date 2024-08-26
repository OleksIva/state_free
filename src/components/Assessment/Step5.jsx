import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom"; 
import { useDispatch, useSelector } from "react-redux";
import { updateDetails, selectDetails } from "../../store/userSlice";
import './assessment.css';

const Step5 = () => {
  const dispatch = useDispatch();
  const details = useSelector(selectDetails);
  const navigate = useNavigate(); 
  const { handleSubmit, register, formState: { errors } } = useForm({
    defaultValues: details
  });

  const onSubmit = (data) => {
    dispatch(updateDetails(data));
    navigate("/assessment/result"); 
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="assessment-form__container">
    <h2>Step 5</h2>
    {/* <div className="assessment-form__inputs">
    <label>
      Age:
      <input
        {...register("age", {
          required: "This is required",
          min: {
            value: 18,
            message: "You are required to be 18 above."
          }
        })}
        type="number"
      />
      {errors.age && <p>{errors.age.message}</p>}
    </label>
    <label>
      Years of experience:
      <input
        {...register("yearsOfExp", {
          required: "This is required",
          min: {
            value: 1,
            message: "You need at least 1 year of experience."
          }
        })}
        type="number"
      />
      {errors.yearsOfExp && <p>{errors.yearsOfExp.message}</p>}
    </label>
    </div> */}
    <input type="submit" />
  </form>
  );
};

export default Step5;