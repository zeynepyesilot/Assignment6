import { useEffect, useReducer, useState } from 'react';
import { fetchPosts } from './api/postsApi';
import { postsReducer, initialState } from './reducer/postsReducer';
import PostList from './components/PostList';
import FilterForm from './components/FilterForm';

function App() {
  // durum yönetimi 
  const [state, dispatch] = useReducer(postsReducer, initialState);
  
  // filtre durumu 
  const [filterText, setFilterText] = useState('');

  // veri çekme 
  useEffect(() => {
    const controller = new AbortController(); 

    const loadPosts = async () => {
      dispatch({ type: 'FETCH_START' });
      try {
        const data = await fetchPosts(controller.signal);
        dispatch({ type: 'FETCH_SUCCESS', payload: data });
      } catch (error) {
       
        if (error.name !== 'AbortError') {
          dispatch({ type: 'FETCH_ERROR', payload: error.message });
        }
      }
    };

    loadPosts();

    // bileşen ekrandan giderse isteği iptal et
    return () => {
      controller.abort();
    };
  }, []); // boş dizi = Sadece sayfa ilk açıldığında çalışır

  // filtrelenmiş listeyi state e kaydetmiyoruz her renderda hesaplıyor
  const filteredPosts = state.posts.filter((post) =>
    post.title.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Post Dashboard</h1>

      <FilterForm 
        filterText={filterText} 
        onFilterChange={setFilterText} 
      />
      
      {state.loading && <div style={{color: 'blue'}}>Loading posts...</div>}

      {state.error && <div style={{ color: 'red' }}>Error: {state.error}</div>}

      {!state.loading && !state.error && (
        <>
          {filteredPosts.length === 0 ? (
            <p>No posts found.</p>
          ) : (
            <PostList posts={filteredPosts} />
          )}
        </>
      )}
    </div>
  );
}

export default App;