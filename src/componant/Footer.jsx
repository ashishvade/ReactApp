// import React from 'react'
// const footerStyle = {
//   backgroundColor: '#333333', // Dark Gray
//   color: 'white', // White text for contrast
//   padding: '10px 0',
//   textAlign: 'center'
// };

// function Footer() {
//   return (

//     <>

//       <footer class="footer" style={footerStyle} >
//         <div class="container text-center" >
//           <div class="row">

//             <h4 class="text-uppercase "> Shree Swami Smarath </h4>

//           </div>

//         </div>
//       </footer>

//     </>
//   )
// }



// export default Footer

import React from 'react';

const footerStyle = {
  backgroundColor: '#333333', // Dark Gray
  color: 'white', // White text for contrast
  padding: '10px 0',
  textAlign: 'center',
  width: '100%',
};

function Footer() {
  return (
    <footer className="footer" style={footerStyle}>
      <div className="container text-center">
        <h4 className="text-uppercase">Shree Swami Smarath</h4>
        <h6>@Ashish Vade</h6>
      </div>
    </footer>
  );
}

export default Footer;

