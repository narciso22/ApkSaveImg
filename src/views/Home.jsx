import React,{useState} from 'react'
import HomeComponent from '../components/HomeComponent'
import * as Yup from 'yup';

export default function Home({navigation}) {
  const [company, setCompany] = useState('option1')
  const [modalVisible, setModalVisible] = useState(false);

  const statusModal = () => {
    setModalVisible(!modalVisible)
  };

  function setSelectedValue(item){
    setCompany(item)
  }

  const CompanySchema = Yup.object().shape({
    compañia: Yup.string()
      .min(2, '¡Demasiado corto!')
      .max(50, '¡Demasiado largo!')
      .required('Requerido'),
    municipio: Yup.string()
      .min(2, '¡Demasiado corto!')
      .max(50, '¡Demasiado largo!')
      .required('Requerido'),
    estado: Yup.string()
      .min(2, '¡Demasiado corto!')
      .max(50, '¡Demasiado largo!')
      .required('Requerido'),
    cp: Yup.string()
      .required('Number is required')
      .min(4, 'Number must be at least 4') 
      .max(10, 'Number must be at most 10'),
  })

  const onSubmit = (values) =>{
    console.log(values)
  }

  return (
    <HomeComponent 
      company={company}
      navigation={navigation}
      statusModal={statusModal}
      modalVisible={modalVisible}
      setSelectedValue={setSelectedValue}
      CompanySchema={CompanySchema}
      onSubmit={onSubmit}
    />
  )
}