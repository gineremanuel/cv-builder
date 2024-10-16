import { useForm } from "react-hook-form";

const FormBasicInfo = ({ onSubmit }) => {
  const { register, handleSubmit } = useForm();
  return (
    <div className="forms">
      <h2>Personal Information</h2>
      <form onSubmit = { handleSubmit(onSubmit) } >
      <label htmlFor="name">Full name</label>
      <input 
        type="text"
        {...register("name")} 
      />
      <label htmlFor="email">Email</label>
      <input 
        type="email"
        {...register("email")} 
      />
      <label htmlFor="phoneNumber">Phone</label>
      <input 
        type="text"
        {...register("phoneNumber")}  
      />
      <label htmlFor="address">Address</label>
      <input 
        type="text"
        {...register("address")}  
      />
      <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default FormBasicInfo;