import { React, useState } from 'react';
import './submitBtn.css';

const SubmitBtn = ({ text, onSubmit }) => {
  //const [quantity, setQuantity] = useState(1);

  return (
    <div className="submit-btn" onClick={onSubmit} style={{ padding: '20px' }}>
      <span>{text}</span>
    </div>
  );
};

export default SubmitBtn;
