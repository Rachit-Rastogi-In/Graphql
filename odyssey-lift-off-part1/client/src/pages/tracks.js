import React from 'react';
import { Layout } from '../components';
import {gql , useQuery} from '@apollo/client';
import { json } from 'react-router-dom';
import TrackCard from '../containers/track-card';
import QueryResult from '../components/query-result';

const TRACKS = gql`

query GetTracks {
  tracksForHome {
    id
    title
    thumbnail
    length
    modulesCount
    author {
      id
      name
      photo
    }
  }
}

`;

/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */
const Tracks = () => {
  const { loading,error,data} = useQuery(TRACKS);


  return <Layout grid>
    <QueryResult error={error} loading={loading} data={data}>
    {data?.tracksForHome?.map((track) => (
      <TrackCard key = {track.id} track = {track} />
    ))}
  </QueryResult>
  </Layout>;
};

export default Tracks;