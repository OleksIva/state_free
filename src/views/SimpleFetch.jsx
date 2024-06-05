import React, { useEffect } from 'react';

const SimpleFetch = () => {
  useEffect(() => {
    fetch('http://localhost:8000/user/register')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Response from server:', data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <p>Simple fetch. Check the console for the response from the server.</p>
    </div>
  );
};

export default SimpleFetch;

// import React, { useEffect } from 'react';

// const SimpleFetch = () => {
//   useEffect(() => {
//     fetch('http://localhost:8000/user')
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response.json();
//       })
//       .then(data => {
//         console.log('Response from server:', data);
//       })
//       .catch(error => {
//         console.error('Error fetching data:', error);
//       });
//   }, []);

//   return (
//     <div>
//       <p>Simple fetch. Check the console for the response from the server.</p>
//     </div>
//   );
// };

// export default SimpleFetch;

