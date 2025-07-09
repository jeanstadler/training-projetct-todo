import { NoticeProvider } from "./provider/noticeContext"
import AppRouter from "./service/router"
import './assets/style/notice.css'

function App() {


  return (
    <NoticeProvider>
      <AppRouter />
    </NoticeProvider>
  )
}

export default App
