import React from 'react';


import router from './router';



export function App( { children } ) {
    return (
        <div>
          { router() }
        </div>
    );
}

export default App;
