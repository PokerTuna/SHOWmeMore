import React from 'react';

export default class NoShow extends React.Component {
  render () {
      return <div className="info error">
            <p>:(</p>
          <p> We are sorry, but we couldn't find the show you are looking for.
          </p>
          <p>Make sure the spelling is correct and keep in mind that we simply might not have your show in our database.</p>
      </div>
   }
}
