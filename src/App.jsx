import { useState, useEffect } from 'react'
import * as API from './services/launch'
import { Heading, Box, Flex, Text, Spacer, Tag } from '@chakra-ui/react';

export function App() {
  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    API.getAllLaunches().then(setLaunches);
  }, []);

  return (
    <>
      <Heading as="h1" size="lg" m={4}>
        SpaceX Missions
      </Heading>
      <section>
        {launches.map((launch) => (
          <Box
            key={launch.flight_number}
            bg="gray.100"
            p={4}
            m={4}
            borderRadius="lg"
          >
            <Flex display="flex">
              <Text fontSize="2xl">
                Mission <strong>{launch.mission_name}</strong> ({launch.launch_year})
              </Text>
              <Spacer />
              <Tag p={4} colorScheme="green">
                {launch.launch_success ? "Successs" : "Failure"}
              </Tag>
            </Flex>
          </Box>
        ))}
      </section>
    </>
  );
}