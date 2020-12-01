import React from 'react';

class GoogleAuth extends React.Component {
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '767991804832-c9l71vph53915qa4ovcq7g35editjkic.apps.googleusercontent.com',
                scope: 'email'
            });
        });
    }

    render(){
        return <div>Google Auth</div>
    }
}

export default GoogleAuth;