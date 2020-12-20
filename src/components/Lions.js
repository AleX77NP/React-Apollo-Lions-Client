import { useQuery, gql } from '@apollo/client';
import Lion from './Lion'

const LIONS_QUERY = gql`
  query GetLions {
    lions {
      _id
      name
      isKing
  }
}
`;

export default function Lions() {
  const { loading, error, data } = useQuery(LIONS_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{JSON.stringify(error)}</p>

  return data.lions.map(lion => (
    <div key={lion._id}>
      <Lion lion={lion} key={lion._id} />
    </div>
  ));
}