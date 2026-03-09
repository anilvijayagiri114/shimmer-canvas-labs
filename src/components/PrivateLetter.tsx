import React from 'react';

const PrivateLetter: React.FC = () => {
    const encryptedMessage = "U2FsdGVkX1+vI+wtdjKpwNne4ZH6f5CpX5n4Gj2rO7I="; // Example Encrypted Message

    return (
        <div>
            <h1>Private Letter</h1>
            <p>Your encrypted message: {encryptedMessage}</p>
            <p>Please keep this letter secure!</p>
        </div>
    );
};

export default PrivateLetter;