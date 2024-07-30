import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom"; 
import { useDispatch, useSelector } from "react-redux";
import { updateDetails, selectDetails } from "../../store/userSlice";

const Step2 = () => {
  const dispatch = useDispatch();
  const details = useSelector(selectDetails);
  const navigate = useNavigate(); 
  const { handleSubmit, register, formState: { errors } } = useForm({
    defaultValues: details
  });

  const onSubmit = (data) => {
    dispatch(updateDetails(data));
    navigate("/assessment/step3"); 
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="assessment-form__container">
    <h2>Step 2</h2>
    <div className="assessment-form__inputs">
    <label>
      Alter:
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
        Geburtsort:
        <input
          {...register("geburtsort", { required: "This is required." })}
        />
        {errors.lastName && <p>{errors.geburtsort.message}</p>}
      </label>
    </div>
    <input type="submit" />
  </form>
  );
};

export default Step2;



{/* <form onSubmit={handleSubmit(onSubmit)} className="assessment-form__container">
      <h2>Step 2</h2>
      <div className="assessment-form__inputs">
      <label>
        Age:
        <input
          name="age"
          type="number"
          ref={register({
            required: "This is required",
            min: {
              value: 18,
              message: "You are required to be 18 above."
            }
          })}
        />
        <ErrorMessage errors={errors} name="age" as="p" />
      </label>
      <label>
        Years of experience:
        <input
          name="yearsOfExp"
          type="number"
          ref={register({
            required: "This is required",
            min: {
              value: 1,
              message: "you need 1 year of exp."
            }
          })}
        />
        <ErrorMessage errors={errors} name="yearsOfExp" as="p" />
      </label>
      </div>
      <input type="submit" />
    </form> */}