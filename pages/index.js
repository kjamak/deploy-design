import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Col, Row } from '../components/grid-system';
import About from '../components/About';
import { Heading, Text } from '../components/common/Typography';
import FilterSortHeader from '../components/FilterSortHeader';
import Footer from '../components/Footer';
import Header from '../components/Header';
import LibraryCard from '../components/LibraryCard';
import MainContainer from '../components/MainContainer';
import SubmitAnother from '../components/SubmitAnother';
import TopTen from '../components/TopTen';
import { server } from '../config';
import { Top10Angular, Top10React } from '../data/TOP10';
import { sortLibraries } from '../helpers/sortLibraries';

export default function Home({ libraries }) {
  const [sortType, setSortType] = useState('stars');
  const [sorted, setSorted] = useState([]);
  const [filter, setFilter] = useState();
  const router = useRouter();

  useEffect(() => {
    setSorted(sortLibraries(libraries, sortType));
  }, [sortType]);

  useEffect(() => {
    if (filter) {
      router.push(filter);
    }
  }, [filter]);

  const renderLibraries = sorted?.map((library, index) => (
    <LibraryCard key={index} library={library} />
  ));
  return (
    <MainContainer>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        {/*<link rel="stylesheet" href="/fonts.css" />*/}
        <title>JSpreadsheet</title>
      </Head>

      <Header />
      <FilterSortHeader
        setFilter={setFilter}
        filter={filter}
        setSortType={setSortType}
        length={libraries.length}
      />

      <Row>
        {renderLibraries}
        <SubmitAnother />
      </Row>

      <Row style={{ marginTop: '100px' }}>
        <About />
        <TopTen title="Top 10 React data grids" items={Top10React} />
        <TopTen title="Top 10 Angular data grids" items={Top10Angular} />
      </Row>
      <Footer />
    </MainContainer>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/libraries`);
  const lib = await res.json();

  return {
    props: { libraries: lib },
  };
};
