import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import leaderboard from '../leaderboard.json';

const Index = () => (
  <div>
    <Link href="/about">
      <a>About Page</a>
    </Link>
    <p>Hello Next.js</p>
  </div>
);

Index.getInitialProps = async function() {
  console.log(leaderboard);
  const res = await fetch('https://api.commadotai.com/v2/leaderboard');
  const leaderboard = await res.json();

  console.log(`Fetched data ${leaderboard}`);

  return {
    leaderboard
  };
};

export default Index;
