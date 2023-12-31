import { 
   Route,  
   RouterProvider, 
   createBrowserRouter, 
   createRoutesFromElements 
} from 'react-router-dom';

//pages
import Home from './Home';

//layouts
import RootLayout from './Layouts/RootLayout';
import RepoDetail, { RepoDetailLoader } from './pages/RepoDetail';
import NotFound from './NotFound';
import ReposList from './RepoList';
import Count from './Count';
import ErrorBoundary from './ErrorBoundary';
// import { ErrorBoundary } from './ErrorBoundary';
// import RepoDetail from './pages/RepoDetail';

// const App = () => {
//   return (  
//       <div className="page">
//         <Home/>
//         {/* hello world */}
//       </div>


//   );
// }

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout/>}>
      <Route index element= {<Home/>}/>
      <Route path='/repo' element={<ReposList/>}/>
      <Route path='/count' element={<Count/>} errorElement={<ErrorBoundary/>}/>
      

      <Route>
        <Route
          index
          element={<ReposList/>}
          // loader={}
        />

        <Route 
          path='repo/:id' 
          element={<RepoDetail/>}
          loader={RepoDetailLoader}
        />
        
        <Route
          path='/count'
          element={<Count/>}
        />
      </Route>

      
    

      <Route path="*" element={<NotFound/>}/>
    </Route>
  )
)


function App(){
  return (
    <>
      <RouterProvider router={router}/>    
    </>
  )
}
 
export default App;





//was wroking before 
// <BrowserRouter>
//   <main>
//     <Routes>
//       <Route path = "/" element={<Home/>}/>
//       <Route path = "repodetail" element={<RepoDetail/>}/>
//     </Routes>
//   </main>
// </BrowserRouter>