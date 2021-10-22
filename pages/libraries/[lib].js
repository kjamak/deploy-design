import axios from 'axios';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Col, Row } from 'react-grid-system';
import LibraryDetails from '../../components/LibraryDetails';
import LibraryStats from '../../components/LibraryStats';
import MainContainer from '../../components/MainContainer';
import NavBar from '../../components/NavBar';
import { server } from '../../config';
import { LIBRARIES } from '../../data/LIBRARIES';

function library({ library }) {
  const router = useRouter();
  const { lib } = router.query;
  const [stars, setStars] = useState();
  const [issues, setIssues] = useState();
  const [forks, setForks] = useState();
  const cancelTokenSource = axios.CancelToken.source();

  const getStars = async () => {
    const res = await axios.get(
      `${server}/api/libraries/get-stars?library=${lib}`,
      {
        cancelToken: cancelTokenSource.token,
      }
    );

    setStars(res.data);
  };

  const getIssues = async () => {
    const res = await axios.get(
      `${server}/api/libraries/get-issues?library=${lib}`,
      {
        cancelToken: cancelTokenSource.token,
      }
    );

    setIssues(res.data);
  };

  const getForks = async () => {
    const res = await axios.get(
      `${server}/api/libraries/get-forks?library=${lib}`,
      {
        cancelToken: cancelTokenSource.token,
      }
    );

    setForks(res.data);
  };

  useEffect(() => {
    if (lib !== undefined) {
      getStars();
      getForks();
      getIssues();
    }
  }, [lib]);

  useEffect(() => {
    return () => cancelTokenSource.cancel();
  }, []);
  return (
    <>
      <Head>
        {/*<link rel="stylesheet" href="/fonts.css" />*/}
        <title>{library.title}</title>
      </Head>
      <NavBar />
      <MainContainer>
        <Row justify="center" style={{ marginTop: '80px' }}>
          <Col md={7}>
            <LibraryDetails library={library} />
          </Col>
          <Col md={3}>
            <LibraryStats
              library={library}
              trends={{ stars: stars, forks: forks, issues: issues }}
            />
          </Col>
        </Row>
      </MainContainer>
    </>
  );
}

export default library;

export async function getStaticPaths() {
  const paths = LIBRARIES.map((library) => {
    return {
      params: { lib: library.slug },
    };
  });

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

export const getStaticProps = async (context) => {
  const res = await fetch(`${server}/api/libraries/${context.params.lib}`);
  const lib = await res.json();

  return {
    props: { library: lib },
  };
};
