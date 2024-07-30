import React, { useState } from 'react';
import Modal from './Modal'; // Example: Replace with your modal component

type Expression = 'happy' | 'sad' | 'angry' | 'stressed' | 'anxious';

type ExpressionGuidanceProps = {
  selectedExpression: Expression;
};

const ExpressionGuidance: React.FC<ExpressionGuidanceProps> = ({ selectedExpression }) => {
  const [showModal, setShowModal] = useState(false);

  const guidanceMap: Record<Expression, string> = {
    happy: 'To maintain happiness, try activities like spending time with loved ones, pursuing hobbies, and practicing gratitude.',
    sad: 'To overcome sadness, consider talking to a friend, journaling your thoughts, or engaging in physical exercise.',
    angry: 'To manage anger, practice deep breathing exercises, meditation, or go for a walk to cool down.',
    stressed: 'To relieve stress, try mindfulness meditation, yoga, or taking breaks to relax and unwind.',
    anxious: 'To reduce anxiety, practice deep breathing, progressive muscle relaxation, or engage in activities that distract your mind.',
  };

  const guidance = guidanceMap[selectedExpression];

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div>
      <h2>Guidance for {selectedExpression}</h2>
      <p>{guidance}</p>
      <button onClick={toggleModal}>Show Techniques</button>
      {showModal && (
        <Modal onClose={toggleModal}>
          <h3>Techniques to Reduce {selectedExpression}</h3>
          <p>{guidance}</p>
          {/* Add more specific techniques or details here */}
        </Modal>
      )}
    </div>
  );
};

export default ExpressionGuidance;
