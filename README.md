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
