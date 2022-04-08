import { Routes, Route } from "react-router-dom";
import { LaunchList } from './componets/LaunchList'

export function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LaunchList />} />
      </Routes>
    </>
  );
}