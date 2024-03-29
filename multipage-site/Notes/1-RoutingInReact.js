/**
 * React router package:-
 *
 * In react we do not make repetative calls to the server(single page concept)
 * for different pages it is just one html document, so, what actually happnes
 * is that react intersepts the request and then swaps the page content for the
 * desired pages and these are the routes which in themselves are components.
 *
 *
 * In App.js import { BrowserRouter, Route } from "react-router-dom";
 *
 * <BrowserRouter> component - It surrounds anything that its gonna use the router.
 * links etc.
 *
 * To generate the routes we use the <Routes> and <Routes> component, with prop path.
 * Ex - <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
 * 
 * Component inside the route component is rendered.
 * 
 */
