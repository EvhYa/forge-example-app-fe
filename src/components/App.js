import ResponsiveAppBar from "./AppBarMenu/AppBarMenu";
import { Viewer } from "./Viewer/Viewer";


export const App = () => {
   return (
      <div>
         <ResponsiveAppBar/>
         <Viewer />
      </div>
   );
};

export default App;
