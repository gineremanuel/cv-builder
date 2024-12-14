import { Fragment, useState } from 'react';
import FormBasicInfo from './components/FormBasic';
import FormEducationInfo from './components/FormEducation';
import FormExperienceInfo from './components/FormExperience';
import DisplayEducationInfo from './components/DisplayEducationInfo';
import DisplayBasicInfo from './components/DisplayBasicInfo';
import DisplayExperienceInfo from './components/DisplayExperienceInfo';
import { SubmitHandler } from "react-hook-form";

import './styles/form_basic_info.css'


type BasicFormValues = {
  name: string;
  email: string;
  phoneNumber : number;
  address: string;
}

type EducationFormValues = {
  school: string;
  degree: string;
  startDate : string;
  endDate: string;
}

type ExperienceFormValues = {
  employer: string;
  jobTitle: string;
  mainResponsabilities : string;
  startDate: string,
  endDate: string;
}

const SectionBasicInfo = () => {
  const [formData, setFormData] = useState<BasicFormValues>({
    name: '',
    email: '',
    phoneNumber: 0,
    address: ''
  });

  const onSubmit: SubmitHandler<BasicFormValues> = (data) => {
    setFormData(data);
  };

  return (
    <Fragment>
      <FormBasicInfo onSubmit = { onSubmit } />
      <DisplayBasicInfo data = { formData } />
    </Fragment>
  ) 
}

const SectionEducationInfo = () => {
  const [formData, setFormData] = useState<EducationFormValues>({
    school: '',
    degree: '',
    startDate : '',
    endDate: ''
  });

  const onSubmit : SubmitHandler<EducationFormValues> = (data) => {
    setFormData(data);
  };
  
  return (
    <Fragment>
      <FormEducationInfo onSubmit = { onSubmit }/>
      <DisplayEducationInfo data = { formData } />
    </Fragment>
  )
}

function SectionExperienceInfo() {
  const [formData, setFormData] = useState<ExperienceFormValues>({
    employer: '',
    jobTitle: '',
    mainResponsabilities : '',
    startDate: '',
    endDate: ''
  });

  const onSubmit : SubmitHandler<ExperienceFormValues> = (data) => {
    setFormData(data);
  }
  
  return (
    <Fragment>
      <FormExperienceInfo onSubmit = { onSubmit } />
      <DisplayExperienceInfo data = { formData } />
    </Fragment>
  )
}


const App: React.FC = () => {
  return (
    <>
      <div className="infoSection">
        <SectionBasicInfo />
      </div>
      <div className="infoSection">
        <SectionEducationInfo />
      </div>
      <div className="infoSection experienceSection">
        <SectionExperienceInfo />
      </div>
    </>
  )
}

export default App
