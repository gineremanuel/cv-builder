import { useForm } from "react-hook-form";

const FormEducationInfo = ({ onSubmit }) => {
  const { register, handleSubmit } = useForm();
  return (
    <div className="forms">
      <h2>Education</h2>
      <form onSubmit = { handleSubmit(onSubmit) } >
      <label htmlFor="school">School</label>
      <input 
        type="text"
        {...register("school")} 
      />
      <label htmlFor="degree">Degree</label>
      <input 
        type="text"
        {...register("degree")}  
      />
      <label htmlFor="startDate">Start Date</label>
      <input 
        type="date"
        {...register("startDate")}  
      />
      <label htmlFor="endDate">End Date</label>
      <input 
        type="date"
        {...register("endDate")}  />
      <button type="submit">Submit</button>
    </form>
    </div>
  )
}

export default FormEducationInfo;