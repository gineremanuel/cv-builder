import { useForm } from "react-hook-form";

const FormExperienceInfo = ({ onSubmit }) => {
  const { register, handleSubmit } = useForm();
  return (
    <div className="forms">
      <h2>Professional Experience</h2>
      <form onSubmit = { handleSubmit(onSubmit) } >
      <label htmlFor="employer">Employer</label>
      <input 
        type="text"
        {...register("employer")} />
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