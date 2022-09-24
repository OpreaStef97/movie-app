import { FeaturesBar } from "./components/features";
import MoviesContent from "./components/movies/MoviesContent";
import Search from "./components/search/Search";
import { Layout } from "./components/ui-components";

const App = () => (
  <Layout>
    <Layout.Header>
      <Search />
    </Layout.Header>
    <Layout.Content>
      <FeaturesBar />
      <MoviesContent />
    </Layout.Content>
  </Layout>
);

export default App;
