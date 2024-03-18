 import React from 'react'
 import { Formik } from 'formik'
 import { Button, TextInput, View } from 'react-native'

export default function LoginComponent({onSubmit, loading, initialValues}) {
  return (
    <View className='h-full bg-blue-50 items-center justify-center'>
      <Formik
        initialValues={initialValues}
        onSubmit={values => onSubmit(values)}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View className='flex flex-col w-[80%]'>
            <TextInput
              className='rounded border mb-4'
              onChangeText={handleChange('UserName')}
              onBlur={handleBlur('UserName')}
              value={values.UserName}
            />
            <TextInput
              className='rounded border mb-4'
              onChangeText={handleChange('Password')}
              onBlur={handleBlur('Password')}
              value={values.Password}
            />
            <Button disabled={loading} onPress={handleSubmit} title="Submit" />
          </View>
        )}
      </Formik>
    </View>
  )
}