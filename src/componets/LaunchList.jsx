import { useState, useEffect } from 'react'
import * as API from '../services/launch'
import { Heading } from '@chakra-ui/react';
import { LaunchItem } from './LaunchItem';

export function LaunchList() {
    const [launches, setLaunches] = useState([]);

    useEffect(() => {
        API.getAllLaunches().then(setLaunches).catch(console.error);
    }, []);

    return (
        <>
            <Heading as="h1" size="lg" m={4}>
                SpaceX Missions
            </Heading>
            {
                launches.length === 0 ? (
                    <div>Loading ...</div>
                ) : (
                    <section>
                        {launches.map((launch) => (
                            <LaunchItem key={launch.flight_number} {...launch}></LaunchItem>
                        ))}
                    </section>)
            }
        </>
    )

}