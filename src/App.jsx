import { useState, useEffect } from 'react'
import * as API from './services/launch'
import { Heading } from '@chakra-ui/react';

export function App() {
  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    API.getAllLaunches().then(setLaunches);
  }, []);

  return (
    <>
      <Heading as="h1" size="lg">SpaceX Missions</Heading>
      <ul>
        {launches.map((launch) => (
          <li key={launch.flight_number}>
            {launch.mission_name} ({launch.launch_year})
          </li>
        ))}
      </ul>
    </>
  );
}