import Card from 'components/Card';
import * as S from './styles';

const Home = () => {
  return (
    <S.HomeContainer>
      <Card height="70px" title="Header" as="header" bgColor="skyblue" />
      <div className="page-content">
        <aside>
          <Card title="Hero" bgColor="lilac" style={{ flex: 1 }} />
          <Card title="Sidebar" bgColor="pistachio" style={{ flex: 2 }} />
        </aside>
        <main>
          <Card
            title="Main Content"
            bgColor="yellow"
            description='**if things do not look right, make sure your browser is in "Experimental Mode"'
          />
          <Card title="Extra Content" bgColor="grey" />
        </main>
      </div>
      <div className="related">
        <Card title="Related Images" bgColor="green" />
        <Card title="Related Posts" bgColor="pink" />
      </div>
      <Card title="Footer" bgColor="orange" />
    </S.HomeContainer>
  );
};

export default Home;
