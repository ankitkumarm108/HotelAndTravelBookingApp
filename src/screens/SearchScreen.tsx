// import { View, TextInput, Text, Image, Button } from 'react-native'
// import React, { useState } from 'react'
// import Container from '../components/Container'
// import { StylesByMain } from '../styles/CommonStyles'
// import { Colors, ImagePaths } from '../assets/variables'
// import DatePicker from 'react-native-date-picker'

// const SearchScreen = () => {
//       const [date, setDate] = useState(new Date())
//   const [open, setOpen] = useState(false)
//   return (
//     <Container>
//        <View style={[StylesByMain.h100,StylesByMain.backgroundColorBlue]}>
//         <Text style={{textAlign:"center", color: Colors.white, paddingTop:8, fontSize:24,fontWeight:'600'}}>Search Hotels & More</Text>
//         </View>
//        <View style={[StylesByMain.backgroundColorWhite,{marginTop:-70, marginHorizontal:16, padding: 10, borderRadius:10}]} >
//         <View style={{flexDirection:"row", borderWidth:1, padding:10, borderRadius:10, alignItems:"center"}}>
//         <Image source={ImagePaths.search} style={{height:24, width:24}} />
//         <View style={{flex:1, flexGrow:1, paddingHorizontal: 11}}>
//         <TextInput placeholder='City' placeholderTextColor={Colors.black} />
//         </View>
//         </View>
//          <Button title="Open" onPress={() => setOpen(true)} />
//       <DatePicker
//         modal
//         open={open}
//         date={date}
//         onConfirm={(date) => {
//           setOpen(false)
//           setDate(date)
//         }}
//         onCancel={() => {
//           setOpen(false)
//         }}
//       />
//         </View>
//     </Container>
//   )
// }

// export default SearchScreen

// import { View, TextInput, Text, Image, TouchableOpacity } from 'react-native'
// import React, { useState } from 'react'
// import Container from '../components/Container'
// import { StylesByMain } from '../styles/CommonStyles'
// import { Colors, ImagePaths } from '../assets/variables'
// import DatePicker from 'react-native-date-picker'

// const SearchScreen = () => {
//   const [checkInDate, setCheckInDate] = useState(new Date())
//   const [checkOutDate, setCheckOutDate] = useState(new Date())
//   const [openPicker, setOpenPicker] = useState(null) // 'checkIn' | 'checkOut' | null

//   return (
//     <Container>
//       <View style={[StylesByMain.h100, StylesByMain.backgroundColorBlue]}>
//         <Text style={{
//           textAlign: "center",
//           color: Colors.white,
//           paddingTop: 8,
//           fontSize: 24,
//           fontWeight: '600'
//         }}>Search Hotels & More</Text>
//       </View>

//       <View style={[
//         StylesByMain.backgroundColorWhite,
//         { marginTop: -70, marginHorizontal: 16, padding: 10, borderRadius: 10 }
//       ]}>

//         {/* City Search Input */}
//         <View style={{
//           flexDirection: "row",
//           borderWidth: 1,
//           padding: 10,
//           borderRadius: 10,
//           alignItems: "center",
//           marginBottom: 12
//         }}>
//           <Image source={ImagePaths.search} style={{ height: 24, width: 24 }} />
//           <View style={{ flex: 1, paddingHorizontal: 11 }}>
//             <TextInput placeholder='City' placeholderTextColor={Colors.black} />
//           </View>
//         </View>

//         {/* Check-In Date */}
//         <TouchableOpacity
//           onPress={() => setOpenPicker('checkIn')}
//           style={{
//             borderWidth: 1,
//             borderRadius: 10,
//             padding: 12,
//             marginBottom: 10
//           }}
//         >
//           <Text style={{ color: Colors.black }}>
//             Check-In: {checkInDate.toDateString()}
//           </Text>
//         </TouchableOpacity>

//         {/* Check-Out Date */}
//         <TouchableOpacity
//           onPress={() => setOpenPicker('checkOut')}
//           style={{
//             borderWidth: 1,
//             borderRadius: 10,
//             padding: 12
//           }}
//         >
//           <Text style={{ color: Colors.black }}>
//             Check-Out: {checkOutDate.toDateString()}
//           </Text>
//         </TouchableOpacity>

//         {/* Common Date Picker Modal */}
//        <DatePicker
//   modal
//   mode="date"
//   open={openPicker !== null}
//   date={openPicker === 'checkOut' ? checkOutDate : checkInDate}
//   onConfirm={(selectedDate) => {
//     setOpenPicker(null)
//     if (openPicker === 'checkIn') {
//       setCheckInDate(selectedDate)
//       if (selectedDate >= checkOutDate) {
//         const nextDay = new Date(selectedDate)
//         nextDay.setDate(selectedDate.getDate() + 1)
//         setCheckOutDate(nextDay)
//       }
//     } else if (openPicker === 'checkOut') {
//       setCheckOutDate(selectedDate)
//     }
//   }}
//   onCancel={() => setOpenPicker(null)}
//   minimumDate={openPicker === 'checkOut' ? checkInDate : new Date()}
//   title={openPicker === 'checkIn' ? 'Select Check-In Date' : 'Select Check-Out Date'}
// />

//       </View>
//     </Container>
//   )
// }

// export default SearchScreen

import { View, TextInput, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Container from '../components/Container'
import { StylesByMain } from '../styles/CommonStyles'
import { Colors, ImagePaths } from '../assets/variables'
import DatePicker from 'react-native-ui-datepicker'
import { format } from 'date-fns'

const SearchScreen = () => {
  const [checkInDate, setCheckInDate] = useState(new Date())
  const [checkOutDate, setCheckOutDate] = useState(new Date(Date.now() + 86400000)) // +1 day
  const [activePicker, setActivePicker] = useState(null) // 'checkIn' | 'checkOut' | null

  const handleDateSelect = (date) => {
    if (activePicker === 'checkIn') {
      setCheckInDate(date)
      if (date >= checkOutDate) {
        const nextDay = new Date(date)
        nextDay.setDate(date.getDate() + 1)
        setCheckOutDate(nextDay)
      }
    } else if (activePicker === 'checkOut') {
      setCheckOutDate(date)
    }
    setActivePicker(null)
  }

  return (
    <Container>
      <View style={[StylesByMain.h100, StylesByMain.backgroundColorBlue]}>
        <Text style={{
          textAlign: "center",
          color: Colors.white,
          paddingTop: 8,
          fontSize: 24,
          fontWeight: '600'
        }}>Search Hotels & More</Text>
      </View>

      <View style={[
        StylesByMain.backgroundColorWhite,
        { marginTop: -70, marginHorizontal: 16, padding: 10, borderRadius: 10 }
      ]}>

        {/* City Search Input */}
        <View style={{
          flexDirection: "row",
          borderWidth: 1,
          padding: 10,
          borderRadius: 10,
          alignItems: "center",
          marginBottom: 12
        }}>
          <Image source={ImagePaths.search} style={{ height: 24, width: 24 }} />
          <View style={{ flex: 1, paddingHorizontal: 11 }}>
            <TextInput placeholder='City' placeholderTextColor={Colors.black} />
          </View>
        </View>

        {/* Check-In Field */}
        <TouchableOpacity
          onPress={() => setActivePicker('checkIn')}
          style={{
            borderWidth: 1,
            borderRadius: 10,
            padding: 12,
            marginBottom: 10
          }}
        >
          <Text style={{ color: Colors.black }}>
            Check-In: {format(checkInDate, 'dd MMM yyyy')}
          </Text>
        </TouchableOpacity>

        {/* Check-Out Field */}
        <TouchableOpacity
          onPress={() => setActivePicker('checkOut')}
          style={{
            borderWidth: 1,
            borderRadius: 10,
            padding: 12
          }}
        >
          <Text style={{ color: Colors.black }}>
            Check-Out: {format(checkOutDate, 'dd MMM yyyy')}
          </Text>
        </TouchableOpacity>

        {/* Show the UI DatePicker only when active */}
        {activePicker !== null && (
          <View style={{ marginTop: 20 }}>
            <Text style={{ fontWeight: 'bold', marginBottom: 10 }}>
              {activePicker === 'checkIn' ? 'Select Check-In Date' : 'Select Check-Out Date'}
            </Text>
            <DatePicker
              mode="single"
              date={activePicker === 'checkIn' ? checkInDate : checkOutDate}
              onDateChange={handleDateSelect}
              minimumDate={activePicker === 'checkOut' ? checkInDate : new Date()}
              selectedTextColor="#fff"
              selectedItemColor="#007bff"
            />
          </View>
        )}

      </View>
    </Container>
  )
}

export default SearchScreen
