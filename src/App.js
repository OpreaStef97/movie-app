import { FeaturesBar, Search } from "./components/features";
import MoviesContent from "./components/movies/MoviesContent";

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
