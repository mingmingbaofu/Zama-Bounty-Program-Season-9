import React, { useState } from 'react';
import { encryptAmount } from '../utils/fhe';

export default function HomePage() {
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async () => {
    const encrypted = await encryptAmount(amount);
    // 模拟提交逻辑
    setMessage(`已加密并提交: ${encrypted.slice(0, 10)}...`);
  };

  return (
    <div className="p-4 text-white bg-black min-h-screen">
      <h1 className="text-3xl font-bold mb-4">🛡️ Confidential DCA Bot</h1>
      <input
        type="text"
        placeholder="请输入 USDC 金额"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="p-2 text-black"
      />
      <button onClick={handleSubmit} className="ml-2 px-4 py-2 bg-blue-500 rounded">提交</button>
      <div className="mt-4">{message}</div>
    </div>
  );
}
