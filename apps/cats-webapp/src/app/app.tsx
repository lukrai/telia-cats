import styles from './app.module.scss';
import { QueryClient, QueryClientProvider } from 'react-query';
import Cats from './cats/cats';

const queryClient = new QueryClient();

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className={`${styles.container} ${styles.welcome}`}>
        <h1>
          <span> Hello there, </span>
          Welcome to the cats webapp 👋
          <span>
            {' '}
            This a very basic table with pagination and filtering functionality,
            try it out!{' '}
          </span>
        </h1>
        <Cats />
      </div>
    </QueryClientProvider>
  );
}

export default App;
