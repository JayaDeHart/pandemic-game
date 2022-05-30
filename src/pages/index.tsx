import type { NextPage } from 'next';
import { useSelector } from 'react-redux';

const IndexPage: NextPage = () => {
  const state = useSelector((state) => state);
  console.log(state);
  return <div>hello!</div>;
};

export default IndexPage;
