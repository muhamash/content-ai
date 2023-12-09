/* eslint-disable no-unused-vars */
import './App.css';
import Login from './components/login/login';
import Nav from './components/nav';
import { motion, useAnimation, motionValue } from 'framer-motion';


function App() {
  return (
    <div>
     <motion.div
      initial={{ opacity: 0, y: -30 }} 
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      style={{
        width: '100%',
        height: '100vh',
      }}
    >
        {/* <Nav /> */ }
        <Login/>
    </motion.div>
    </div>
  );
}

export default App;
