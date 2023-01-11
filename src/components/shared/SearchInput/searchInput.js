

import React , {createRef, useState} from 'react'
import { View , Text, TouchableOpacity} from 'react-native'
import { scale } from '../../../constants/scale'
import IconGenerator from '../IconGenerator'
import InputComp from './InputComp'
import styles from './styles'

export default function SearchInput(){
  const nameRef = createRef();
  const emailRef = createRef();
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState('');

  const handleTextChange = (name, value) => {
    if (name === 'name') {
      setName(value);
      setNameError('');
    }

  };

    return(
        <View>

      
<View style={{flexDirection:'row'}}>
<View style={{flex:1, marginRight:scale(10)}}>
<InputComp
  ref={nameRef}
  editable
  maxLength={40}
//   label="Name"
  autoCapitalize="none"
  name="search"
  icon={'User'}
  SearchStyle
  returnKeyType="next"
  autoCorrect={false}
  onSubmitEditing={() => {
    if (emailRef && emailRef.current) {
      emailRef.current.focus();
    }
  }}


  autoCompleteType="email"
  placeholder="search specific skills"
  value={name}
  onChangeText={text => handleTextChange('name', text)}
  blurOnSubmit={false}
  error={nameError}

/>

</View>

<TouchableOpacity style={{   alignSelf:'center', marginBottom:scale(15)}}>
<IconGenerator tagName={"SearchFilter"} />


</TouchableOpacity>


         


</View>


        </View>
    )
}