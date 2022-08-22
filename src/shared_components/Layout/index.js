import Footer from "./footer";
import Header from "./header";

function Layout(props) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-1">
        <div className="max-w-6xl mx-auto">{props.children}</div>
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
