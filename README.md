# Challenges and the Process of the Kumia Build

## Import Statements Increasing and deforming the code

To improve this, I created a root file named `index.jsx` inside the `pages` folder, where I exported all the needed imports. Now, I can import all the components with a one-liner.

From this:

```js
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
```

To this:

```js
import { Home, Contact } from "./pages";
```

## Imported React Toastify in the root file - `App.jsx`
Instead of importing ToastContainer in various pages, I just had to import it in just the `App.jsx` file.

```js
// import toastify
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <>
      <BrowserRouter>
        <ToastContainer/>
        ...
      </BrowserRouter>
    </>
  );
}
```