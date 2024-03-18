import React from 'react';
import { View, Text, Modal, TouchableOpacity, TextInput, Button } from 'react-native';
import { Formik } from 'formik'
import { ValuesCompany } from '../context/values/InitialValues'
import Input from '../components/common/Input';

const AddCompany = ({closeModal, modalVisible, CompanySchema, onSubmit}) => {
  
  return (
    <Modal
    animationType="fade"
    transparent={true}
    visible={modalVisible}
    onRequestClose={closeModal}
    >
        <View style={{backgroundColor: 'rgba(0, 0, 0, 0.5)', height:'100%'}}>
            <View className='flex-1 justify-center items-center'>
                    <Formik
                        initialValues={ValuesCompany}
                        onSubmit={values => onSubmit(values)}
                        validationSchema={CompanySchema}
                    >
                        {({ handleChange, handleBlur, handleSubmit, values, touched, errors }) => (
                        <View className='flex flex-col gap-y-4 bg-white p-5 rounded-lg shadow-sm max-w-[80%]'>
                           
                            <Input
                                touched={touched.compañia}
                                errors={errors.compañia}
                                iconName="handshake"
                                onChangeText={handleChange('compañia')}
                                onBlur={handleBlur('compañia')}
                                placeholder='Compañia'
                                value={values.compañia}
                            />
                            <Input
                                touched={touched.estado}
                                errors={errors.estado}
                                iconName="map"
                                onChangeText={handleChange('estado')}
                                onBlur={handleBlur('estado')}
                                placeholder='Estado'
                                value={values.estado}
                            />
                            <Input
                                touched={touched.municipio}
                                errors={errors.municipio}
                                iconName="city"
                                onChangeText={handleChange('municipio')}
                                onBlur={handleBlur('municipio')}
                                placeholder='Municipio'
                                value={values.municipio}
                            />
                            <Input                            
                                keyboardType='numeric' 
                                touched={touched.cp}
                                errors={errors.cp}
                                iconName="map-marker-radius"
                                onChangeText={handleChange('cp')}
                                onBlur={handleBlur('cp')}
                                placeholder='Codigo postal'
                                value={values.cp}
                            />
                    
                            <View className='flex flex-row justify-around gap-x-2'>
                                <TouchableOpacity className='bg-red-900 rounded-lg px-2 py-1 ' onPress={closeModal}>
                                    <Text className='text-white'>Cancelar</Text>
                                </TouchableOpacity>
                                <TouchableOpacity className='bg-green-900 rounded-lg px-2 py-1 ' onPress={handleSubmit} title="Submit">
                                    <Text className='text-white'>Guardar</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        )}
                    </Formik>
                </View>
        </View>
    </Modal>
  )
}

export default AddCompany
