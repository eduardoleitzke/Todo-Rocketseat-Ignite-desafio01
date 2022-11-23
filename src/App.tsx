import './global.css'
import styles from './App.module.css'
import { Header } from './components/Header'
import { Tasks } from './components/Tasks'

function App() {

  return (
   
      <div >
        <Header />
       
        <main className={styles.containerApp}>
          <Tasks/>
        </main>
      </div>
   
  )
}

export default App
