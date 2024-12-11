import { Fragment, useState } from 'react';
import FormBasicInfo from './components/FormBasic';
import FormEducationInfo from './components/FormEducation';
import FormExperienceInfo from './components/FormExperience';
import DisplayEducationInfo from './components/DisplayEducationInfo';
import DisplayBasicInfo from './components/DisplayBasicInfo';
import DisplayExperienceInfo from './components/DisplayExperienceInfo';
import './styles/form_basic_info.css'

const SectionBasicInfo = () => {
  const [formData, setFormData] = useState(null);
  const onSubmit = (data) => {
    setFormData(data);
  }
  return (
    <Fragment>
      <FormBasicInfo onSubmit = { onSubmit } />
      <DisplayBasicInfo data = { formData } />
    </Fragment>
  ) 
}

const SectionEducationInfo = () => {
  const [formData, setFormData] = useState(null);
  const onSubmit = (data) => {
    setFormData(data);
  }
  return (
    <Fragment>
      <FormEducationInfo onSubmit = { onSubmit }/>
      <DisplayEducationInfo data = { formData } />
    </Fragment>
  )
}

function SectionExperienceInfo() {
  const [formData, setFormData] = useState(null);
  const onSubmit = (data) => {
    setFormData(data);
  }
  return (
    <Fragment>
      <FormExperienceInfo onSubmit = { onSubmit } />
      <DisplayExperienceInfo data = { formData } />
    </Fragment>
  )
}


function App() {
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
