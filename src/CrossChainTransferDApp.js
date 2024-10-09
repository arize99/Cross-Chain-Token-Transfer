import React, { useState } from 'react';

const CrossChainTransferDApp = () => {
  const [amount, setAmount] = useState('');
  const [fromChain, setFromChain] = useState('');
  const [toChain, setToChain] = useState('');
  const [recipient, setRecipient] = useState('');
  const [status, setStatus] = useState('');

  const handleTransfer = async () => {
    try {
      setStatus('Initiating transfer...');

      // Simulate a delay to mimic blockchain interaction
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Validate input (basic example)
      if (!amount || isNaN(parseFloat(amount)) || !fromChain || !toChain || !recipient) {
        throw new Error('Please fill in all fields with valid information.');
      }

      // Simulate transfer process
      setStatus('Processing transfer...');
      await new Promise(resolve => setTimeout(resolve, 3000));

      // Simulate successful transfer
      setStatus(`Transfer completed successfully! Sent ${amount} tokens from ${fromChain} to ${toChain}. Recipient: ${recipient}`);
    } catch (error) {
      console.error('Transfer error:', error);
      setStatus(`Transfer failed: ${error.message}`);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl">
      <h1 className="text-2xl font-bold mb-6">Cross-Chain Token Transfer</h1>
      <div className="space-y-4">
        <input
          type="text"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          placeholder="From Chain"
          value={fromChain}
          onChange={(e) => setFromChain(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          placeholder="To Chain"
          value={toChain}
          onChange={(e) => setToChain(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          placeholder="Recipient Address"
          value={recipient}
          onChange={(e) => setRecipient(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <button
          onClick={handleTransfer}
          className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Transfer
        </button>
      </div>
      {status && (
        <div className="mt-4 p-2 bg-gray-100 rounded">
          <p>{status}</p>
        </div>
      )}
    </div>
  );
};

export default CrossChainTransferDApp;
