import { useForm, SubmitHandler } from "react-hook-form";

type BasicFormValues = {
  name: string;
  email: string;
  phoneNumber : number;
  address: string;
}

const FormBasicInfo = () => {
  const { 
    register,
    handleSubmit,
    formState: { errors }
   } = useForm<BasicFormValues>();
  const onSubmit : SubmitHandler<BasicFormValues> = (data) => console.log(data);
  
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