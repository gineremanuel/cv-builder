import { useForm, SubmitHandler } from "react-hook-form";

type ExperienceFormValues = {
  employer: string;
  jobTitle: string;
  mainResponsabilities : string;
  startDate: string,
  endDate: string;
}

type Props = {
  onSubmit : SubmitHandler<ExperienceFormValues>;
}

const FormExperienceInfo = ({onSubmit}: Props) => {
  const { 
    register,
    handleSubmit,
    formState: { errors }
   } = useForm<ExperienceFormValues>();

  return (
    <div className="forms">
      <h2>Professional Experience</h2>
      <form onSubmit = { handleSubmit(onSubmit) } >
      <label htmlFor="employer">Employer</label>
      <input 
        type="text"
        {...register("employer", {required: true})}
        aria-invalid= {errors.employer ? "true" : "false"} />
        {errors.employer?.type === "required" && (
        <p role="alert">Employeer is required</p>
      )}
      <label htmlFor="jobTitle">Job Title</label>
      <input 
        type="text"
        {...register("jobTitle")}  />
      <label htmlFor="mainResponsabilities">Main Responsabilities</label>
      <input 
        type="text"
        {...register("mainResponsabilities")}  />
      <label htmlFor="startDate">Start Date</label>
      <input 
        type="date"
        {...register("startDate")}  />
        <label htmlFor="endDate">End Date</label>
        <input 
        type="date"
        {...register("endDate")}  />
      <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default FormExperienceInfo;