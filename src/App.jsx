import { Fragment, useState } from 'react';
import FormBasicInfo from './components/Form_basic';
import FormEducationInfo from './components/Form_education';
import FormExperienceInfo from './components/Form_experience';
import DisplayEducationInfo from './components/Display_education_info';
import DisplayBasicInfo from './components/Display_basic_info';
import DisplayExperienceInfo from './components/Display_experience_info';
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
