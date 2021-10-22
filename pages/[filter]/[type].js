import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Col, Row } from 'react-grid-system';
import { Heading, Text } from '../../components/common/Typography';
import FilterSortHeader from '../../components/FilterSortHeader';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import LibraryCard from '../../components/LibraryCard';
import MainContainer from '../../components/MainContainer';
import SubmitAnother from '../../components/SubmitAnother';
import { server } from '../../config';
import { FILTERS } from '../../data/FILTERS';
import { sortLibraries } from '../../helpers/sortLibraries';

function type({ libraries, info, params }) {
  const [sortType, setSortType] = useState('stars');
  const [sorted, setSorted] = useState([]);
  const [filter, setFilter] = useState(params);
  const router = useRouter();
  useEffect(() => {
    setSorted(sortLibraries(libraries, sortType));
  }, [sortType, libraries]);

  useEffect(() => {
    if (filter !== params) {
      router.push(filter);
    }
  }, [filter]);

  const renderLibraries = sorted?.map((library, index) => (
    <LibraryCard key={index} library={library} />
  ));
  return (
    <MainContainer>
      <Head>
        {/*<link rel="stylesheet" href="/fonts.css" />*/}
        <link rel="stylesheet" href="/fonts.css" />
        <title>JSpreadsheet</title>
      </Head>

      <Header />
      <FilterSortHeader
        setFilter={setFilter}
        setSortType={setSortType}
        length={libraries.length}
        filter={filter}
      />

      <Row>
        {renderLibraries}
        <SubmitAnother />
      </Row>
      <Row style={{ marginTop: '100px' }}>
        <Col md={4}>
          <Heading marginBottom="20px" level={2}>
            {info.title}
          </Heading>
          <Text>{info.description}</Text>
        </Col>
      </Row>
      <Footer />
    </MainContainer>
  );
}
export default type;

export async function getStaticPaths() {
  const paths = FILTERS.map((filter) => {
    const data = filter.slug.split('/');
    return {
      params: { filter: data[0], type: data[1] },
    };
  });

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

export const getStaticProps = async (context) => {
  const res = await fetch(`${server}/api/libraries/specific-libraries`, {
    method: 'POST',
    body: JSON.stringify({
      filter: context.params.filter,
      type: context.params.type,
    }),
    headers: { 'Content-Type': 'application/json' },
  });

  const data = await res.json();

  return {
    props: {
      info: data.info,
      libraries: data.libraries,
      params: `/${context.params.filter}/${context.params.type}`,
    },
  };
};
