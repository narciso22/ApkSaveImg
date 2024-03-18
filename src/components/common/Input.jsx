import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { useTheme } from '@react-navigation/native';

const Input = ({
  icon,
  errors,
  iconName,
  touched,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false)
  const inputRef = React.useRef(null)
  const { colors } = useTheme()
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
    inputRef.current.focus()
  }

  return (
    <TouchableOpacity onPress={() => inputRef.current.focus()}>
      <View className={`flex flex-row py-1  px-2 rounded-lg mt-1  border border-[#717576] ${icon ? 'items-center' : 'items-baseline'}`}>
        <Icon name={iconName} className="mr-3" color="#717576" type='material-community' size={32} />
        <TextInput      
          ref={inputRef}
          className="flex flex-1 w-[100%] "
          secureTextEntry={icon && !showPassword}
          placeholderTextColor="#717576"
          {...props}
        />

        {icon && (
          <TouchableOpacity onPress={togglePasswordVisibility} className='ml-2' activeOpacity={0.7}>
            <Icon
              type='material-community'
              name={showPassword ? 'eye-off-outline' : 'eye-outline'}
              className='my-1'
              color="#717576"
              size={26}
            />
          </TouchableOpacity>
        )}
      </View>

      {touched && errors ? (
        <View className="flex-row my-2 p-0.5 bg-gray-100 border-l-4 border-rose-600 rounded-md">
          <Icon name="info" className="mr-1" color={colors.icon} />
          <Text className="text-rose-600 align-middle my-auto">{errors}</Text>
        </View>
      ) : null}
    </TouchableOpacity>
  );
};

export default Input