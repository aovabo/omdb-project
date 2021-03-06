import "bulma/css/bulma.min.css";
import "../public/style.css";
import Head from "next/head";

const App = (ctx) => (
  <div>
    <Head>
      <title>HeyMovies</title>
    </Head>

    <ctx.Component {...ctx.pageProps} />
  </div>
);

export default App;
