import React, { useState } from 'react';
import styled from 'styled-components';
import CryptoJS from 'crypto-js';

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #0056b3;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

const DialogOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const DialogContainer = styled.div`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 40px;
  border-radius: 15px;
  max-width: 600px;
  max-height: 80vh;
  overflow-y: auto;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
  animation: slideIn 0.3s ease;

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(-50px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const Title = styled.h2`
  margin: 0 0 20px 0;
  font-size: 28px;
  text-align: center;
`;

const Tabs = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  border-bottom: 2px solid rgba(255, 255, 255, 0.3);
`;

const TabButton = styled.button`
  padding: 10px 20px;
  background: ${props => props.active ? 'rgba(255, 255, 255, 0.2)' : 'transparent'};
  border: none;
  border-bottom: 3px solid ${props => props.active ? 'white' : 'transparent'};
  color: white;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

const TimelineContainer = styled.div`
  position: relative;
  padding: 20px 0;
  
  &::before {
    content: '';
    position: absolute;
    left: 20px;
    top: 0;
    bottom: 0;
    width: 2px;
    background: rgba(255, 255, 255, 0.3);
  }
`;

const TimelineItem = styled.div`
  margin-left: 60px;
  margin-bottom: 30px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: -40px;
    top: 5px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: white;
    border: 3px solid #667eea;
  }
`;

const TimelineDate = styled.span`
  font-weight: bold;
  font-size: 14px;
  color: #ffd700;
`;

const TimelineDescription = styled.p`
  margin: 5px 0 0 0;
  font-size: 14px;
  line-height: 1.5;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Label = styled.label`
  font-size: 14px;
  font-weight: 600;
`;

const Input = styled.input`
  padding: 10px 15px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  font-size: 14px;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: white;
    background: rgba(255, 255, 255, 0.2);
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }
`;

const TextArea = styled.textarea`
  padding: 10px 15px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  font-size: 14px;
  resize: vertical;
  min-height: 120px;
  font-family: inherit;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: white;
    background: rgba(255, 255, 255, 0.2);
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  justify-content: flex-end;
`;

const SubmitButton = styled.button`
  padding: 12px 24px;
  background: #ffd700;
  color: #333;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #ffed4e;
    transform: translateY(-2px);
  }
`;

const CancelButton = styled.button`
  padding: 12px 24px;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: 2px solid white;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }
`;

const EncryptedMessageBox = styled.div`
  background: rgba(0, 0, 0, 0.3);
  padding: 15px;
  border-radius: 8px;
  margin-top: 10px;
  word-break: break-all;
  font-size: 12px;
  font-family: monospace;
  max-height: 150px;
  overflow-y: auto;
  color: #ffd700;
`;

const SuccessMessage = styled.div`
  background: rgba(76, 175, 80, 0.2);
  color: #4caf50;
  padding: 12px;
  border-radius: 8px;
  border-left: 4px solid #4caf50;
`;

const ErrorMessage = styled.div`
  background: rgba(244, 67, 54, 0.2);
  color: #f44336;
  padding: 12px;
  border-radius: 8px;
  border-left: 4px solid #f44336;
`;

const PASSWORD = '114912';

const JourneyButton = () => {
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState('timeline');
  const [letterContent, setLetterContent] = useState('');
  const [encryptedLetter, setEncryptedLetter] = useState('');
  const [message, setMessage] = useState('');
  const [letterTitle, setLetterTitle] = useState('');

  const journeyTimeline = [
    { date: '2024-01-15', description: 'Journey begins with first step' },
    { date: '2024-03-20', description: 'Milestone achieved: First success' },
    { date: '2024-06-10', description: 'Expanded horizons and new perspectives' },
    { date: '2024-09-05', description: 'Major breakthrough and transformation' },
    { date: '2025-01-01', description: 'New chapter: Reflection and growth' },
  ];

  const handleClick = () => {
    setDialogOpen(true);
    setPassword('');
    setIsAuthenticated(false);
    setMessage('');
  };

  const handleClose = () => {
    setDialogOpen(false);
    setPassword('');
    setIsAuthenticated(false);
    setLetterContent('');
    setEncryptedLetter('');
    setLetterTitle('');
    setMessage('');
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (password === PASSWORD) {
      setIsAuthenticated(true);
      setMessage('');
    } else {
      setMessage('Incorrect password');
      setPassword('');
    }
  };

  const handleLetterEncrypt = (e) => {
    e.preventDefault();
    if (!letterTitle.trim() || !letterContent.trim()) {
      setMessage('Please fill in both title and letter content');
      return;
    }

    try {
      const letterData = {
        title: letterTitle,
        content: letterContent,
        timestamp: new Date().toISOString(),
      };
      
      const encrypted = CryptoJS.AES.encrypt(
        JSON.stringify(letterData),
        PASSWORD
      ).toString();
      
      setEncryptedLetter(encrypted);
      setMessage('Letter encrypted successfully!');
      setLetterTitle('');
      setLetterContent('');
    } catch (error) {
      setMessage('Error encrypting letter: ' + error.message);
    }
  };

  const handleDownloadEncrypted = () => {
    if (!encryptedLetter) {
      setMessage('No encrypted letter to download');
      return;
    }

    const element = document.createElement('a');
    element.setAttribute(
      'href',
      'data:text/plain;charset=utf-8,' + encodeURIComponent(encryptedLetter)
    );
    element.setAttribute('download', 'private-letter-encrypted.txt');
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const handleCopyEncrypted = () => {
    navigator.clipboard.writeText(encryptedLetter);
    setMessage('Encrypted letter copied to clipboard!');
  };

  return (
    <div>
      <Button onClick={handleClick}>🌟 Open Journey</Button>
      
      {isDialogOpen && (
        <DialogOverlay onClick={handleClose}>
          <DialogContainer onClick={(e) => e.stopPropagation()}>
            <Title>✨ Your Life Journey</Title>

            {!isAuthenticated ? (
              <Form onSubmit={handlePasswordSubmit}>
                <FormGroup>
                  <Label>Enter Password to Access Private Content</Label>
                  <Input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter password"
                    autoFocus
                  />
                </FormGroup>
                {message && <ErrorMessage>{message}</ErrorMessage>}
                <ButtonGroup>
                  <CancelButton type="button" onClick={handleClose}>
                    Cancel
                  </CancelButton>
                  <SubmitButton type="submit">
                    Unlock
                  </SubmitButton>
                </ButtonGroup>
              </Form>
            ) : (
              <>
                <Tabs>
                  <TabButton
                    active={activeTab === 'timeline'}
                    onClick={() => {
                      setActiveTab('timeline');
                      setMessage('');
                    }}
                  >
                    📅 Timeline
                  </TabButton>
                  <TabButton
                    active={activeTab === 'letter'}
                    onClick={() => {
                      setActiveTab('letter');
                      setMessage('');
                    }}
                  >
                    💌 Private Letter
                  </TabButton>
                </Tabs>

                {activeTab === 'timeline' && (
                  <TimelineContainer>
                    <h3 style={{ marginTop: 0 }}>Journey Milestones</h3>
                    {journeyTimeline.map((item, index) => (
                      <TimelineItem key={index}>
                        <TimelineDate>{item.date}</TimelineDate>
                        <TimelineDescription>{item.description}</TimelineDescription>
                      </TimelineItem>
                    ))}
                  </TimelineContainer>
                )}

                {activeTab === 'letter' && (
                  <>
                    {!encryptedLetter ? (
                      <Form onSubmit={handleLetterEncrypt}>
                        <FormGroup>
                          <Label>Letter Title</Label>
                          <Input
                            type="text"
                            value={letterTitle}
                            onChange={(e) => setLetterTitle(e.target.value)}
                            placeholder="Give your letter a title"
                          />
                        </FormGroup>

                        <FormGroup>
                          <Label>Write Your Private Letter</Label>
                          <TextArea
                            value={letterContent}
                            onChange={(e) => setLetterContent(e.target.value)}
                            placeholder="Write your personal thoughts, dreams, and memories here. This will be encrypted with a secure password."
                          />
                        </FormGroup>

                        {message && (
                          message.includes('successfully') ? (
                            <SuccessMessage>{message}</SuccessMessage>
                          ) : (
                            <ErrorMessage>{message}</ErrorMessage>
                          )
                        )}

                        <ButtonGroup>
                          <CancelButton
                            type="button"
                            onClick={() => {
                              setLetterTitle('');
                              setLetterContent('');
                              setMessage('');
                            }}
                          >
                            Clear
                          </CancelButton>
                          <SubmitButton type="submit">
                            🔐 Encrypt & Save
                          </SubmitButton>
                        </ButtonGroup>
                      </Form>
                    ) : (
                      <>
                        <SuccessMessage>
                          ✅ Your letter has been encrypted and secured!
                        </SuccessMessage>
                        
                        <Label style={{ marginTop: '20px', display: 'block' }}>
                          Encrypted Data:
                        </Label>
                        <EncryptedMessageBox>
                          {encryptedLetter}
                        </EncryptedMessageBox>

                        <ButtonGroup style={{ marginTop: '20px' }}>
                          <CancelButton
                            onClick={() => {
                              setEncryptedLetter('');
                              setLetterTitle('');
                              setLetterContent('');
                              setMessage('');
                            }}
                          >
                            Write New Letter
                          </CancelButton>
                          <SubmitButton onClick={handleCopyEncrypted}>
                            📋 Copy
                          </SubmitButton>
                          <SubmitButton onClick={handleDownloadEncrypted}>
                            ⬇️ Download
                          </SubmitButton>
                        </ButtonGroup>
                      </>
                    )}
                  </>
                )}

                <ButtonGroup style={{ marginTop: '20px' }}>
                  <CancelButton onClick={handleClose}>
                    Close
                  </CancelButton>
                </ButtonGroup>
              </>
            )}
          </DialogContainer>
        </DialogOverlay>
      )}
    </div>
  );
};

export default JourneyButton;