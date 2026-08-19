import React, { useState, useEffect } from 'react';
import { Layout } from './components/Layout';
import { Hero, Mindset, Projects, Timeline } from './components/Sections';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [darkMode]);

  return (
    <Layout darkMode={darkMode} setDarkMode={setDarkMode}>
      <Hero />
      <Mindset />
      <Projects />
      <Timeline />
    </Layout>
  );
}

export default App;
