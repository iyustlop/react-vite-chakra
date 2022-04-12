import { useState, useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import { Box, Flex, Spacer, Tag, Text } from '@chakra-ui/react';
import * as API from '../services/launch';

export function LaunchDetails() {
    const [launch, setLaunch] = useState({});
    const { launchId } = useParams();

    useEffect(() => {
        API.getLaunchByFlightNumber(launchId).then(setLaunch).catch(console.error)
    }, [launchId])

    return (
        <Box bg="gray.100" p={4} m={4} borderRadius="lg">
            {!launch ? (
                <div>loading</div>
            ) : (
                <>
                    <Flex>
                        <Text fontSize="2xl">
                            Mission <strong>{launch.mission_name}</strong> ({launch.launch_year})
                        </Text>
                        <Spacer />
                        <Tag p={2} colorScheme={launch.launch_success ? "green" : "red"}>
                            {launch.launch_success ? "Successs" : "Failure"}
                        </Tag>
                    </Flex>
                    <Box>
                        Rocket: {" "}
                        <Link to={`/rocket/${launch.rocket?.rocket_id}`}>
                            {launch.rocket?.rocket_name}
                        </Link>
                    </Box>
                </>
            )
            }
        </Box>
    );
}