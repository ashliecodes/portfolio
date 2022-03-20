import Navbar from "../components/Navbar";

function Layout({ children }) {
  return (
    <div>
      <Navbar />

      {children}
    </div>
  );
}

export default Layout;

/*

Purpose of Layout component:
any component that will be repeated on every page component should be contained
within the layout functional component to avoid having to code over and over again
also allows you to change things in only one place

we get access to whatever is nested within the Layout tags (see _app.js)
in this case it is the children property which is being destructured 
we are passing children as props in the layout functional component
it is anything that is inside the layout tags in the app.js file
the children need to be outputted into the layout functional component
this means wherever the children property is outputted inside the component
all the pages will go there
pages are nested between the navbar and the footer 
whatever page that is created will have the navbar and the footer on it 

*/
