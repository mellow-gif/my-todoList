import React, { useState } from 'react';

interface InputProps {
  onAddTodo: (text: string) => void;
}

const TodoInput: React.FC<InputProps> = ({ onAddTodo }) => {
  const [inputValue, setInputValue] = useState('');
  const [isEnabled, setIsEnabled] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim() && isEnabled) {
      onAddTodo(inputValue);
      setInputValue('');
    }
  };

  const handleEnable = () => {
    setIsEnabled(true);
  };

  const handleDisable = () => {
    setIsEnabled(false);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          disabled={!isEnabled}
          placeholder="请输入待办事项"
        />
        <button type="submit" disabled={!isEnabled}>添加</button>
      </form>
      
      <div style={{ marginTop: '10px' }}>
        <span>功能状态: {isEnabled ? '已开启' : '已关闭'}</span>
        <button onClick={handleEnable} style={{ marginLeft: '10px' }}>开启</button>
        <button onClick={handleDisable} style={{ marginLeft: '5px' }}>关闭</button>
      </div>
    </div>
  );
};

export default TodoInput;