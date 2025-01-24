import './index.css';
import React, { useState } from 'react';
import TodoList from './components/TodoList';
import PaginatedData from './components/PaginatedData'; 
import MultiStepForm from './components/MultiStepForm';
import SearchableList from './components/SearchableList';
import ModalComponent from './components/ModalComponent';
import { ThemeProvider } from './context/ThemeContext';

const App = () => {
  const [activeComponent, setActiveComponent] = useState('todos'); 

  const renderComponent = () => {
    switch (activeComponent) {
      case 'todos':
        return <TodoList />;
      case 'paginated':
        return <PaginatedData />;
      case 'multistep':
        return <MultiStepForm />;
      case 'search':
        return <SearchableList />;
      case 'modal':
        return <ModalComponent />;
      default:
        return <TodoList />;
    }
  };

  return (
    <ThemeProvider>
      <div className="container mx-auto p-4">
        <nav className="mb-4 space-x-2">
          {['todos', 'paginated', 'multistep', 'search', 'modal'].map((comp) => (
            <button
              key={comp}
              onClick={() => setActiveComponent(comp)}
              className="px-4 py-2 bg-blue-500 text-white rounded"
            >
              {comp}
            </button>
          ))}
        </nav>
        {renderComponent()}
      </div>
    </ThemeProvider>
  );
};

export default App;
