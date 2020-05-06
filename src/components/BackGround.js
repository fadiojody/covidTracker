import React, { Component } from 'react';
import { Image, ImageBackground} from 'react-native';

// export default class Header1 extends Component {
//   render() {
//     let pic = {
//       uri: 'https://image.freepik.com/free-vector/world-scare-corona-virus-illustration-corona-mascot-cartoon-character-world-concept-isolated_138676-865.jpg',
//     };
//     return <Image source={pic} style={{ width: 193, height: 110 }} />;
//   }
// }

class BackGround extends Component {
     render() {
       return (
         <ImageBackground
           style={{width: 420, height:800, justifyContent:'center' }}
           source={{uri: 'https://image.freepik.com/free-vector/world-scare-corona-virus-illustration-corona-mascot-cartoon-character-world-concept-isolated_138676-865.jpg'}}
       >
        
       </ImageBackground>
     );
  }
}

export default BackGround; 