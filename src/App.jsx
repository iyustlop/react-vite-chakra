import { Routes, Route } from "react-router-dom";
import { LaunchDetails } from "./componets/LaunchDetails";
import { LaunchList } from './componets/LaunchList'
import { RocketDetails } from "./componets/RocketDetails";

export function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LaunchList />} />
        <Route path="launch/:launchId" element={<LaunchDetails />} />
        <Route path="rocket/:rocketId" element={<RocketDetails />} />
      </Routes>
    </>
  );
}