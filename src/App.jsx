import './App.css'
import { ImageVisor } from './components/image-visor-component/image-visor-component'

const image = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Q2NqVIDYiHgQOhwue-PVLQHaEv%26pid%3DApi&f=1&ipt=6614374f2a5e1f7259f20a2cd128511d836cbf5d47832cd25bddddab076386ec&ipo=images"
const label = "Hi!"

function App() {
  return (
    <>
      <ImageVisor label={label} imageSrc={image}/>
    </>
  )
}

export default App
