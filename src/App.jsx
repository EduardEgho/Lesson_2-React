import './App.css'
import {Routes, Route} from "react-router-dom";
import PostPage from "./pages/PostPage.jsx";
import Layout from "./pages/Layout.jsx";
import SinglePostPage from "./pages/SinglePostPage.jsx";
import FormPage from "./pages/FormPage.jsx";



function App() {

  return (
    <>

      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<PostPage/>}/>
          <Route path='form' element={<FormPage/>}/>
          <Route path='/:postId' element={<SinglePostPage/>} />

          <Route path='*' element={<h4>Not found</h4>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App




































