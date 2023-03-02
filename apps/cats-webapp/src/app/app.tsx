import styles from './app.module.scss';
import { QueryCache, QueryClient, QueryClientProvider } from 'react-query';
import Cats from './cats/cats';
import toast, { Toaster } from 'react-hot-toast';

const queryClient = new QueryClient({
  queryCache: new QueryCache({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onError: (error: any) => {
      toast.error(`Something went wrong: ${error.message}`);
    },
  }),
});

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
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
