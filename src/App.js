import Header from "./components/Header";
import Pagination from "./components/Pagination"
import Blog from "./components/Blog"
import { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext";
import "./App.css"

export default function App() {

  const {fetchBlogPosts}=useContext(AppContext)

  useEffect(()=>{
    fetchBlogPosts();
  },[])
  return (
    <div className=" w-full h-full flex flex-col gap-y-1 justify-center items-center">
    <Header/>
    <Blog/>
    <Pagination/>
  </div>
  )
}
