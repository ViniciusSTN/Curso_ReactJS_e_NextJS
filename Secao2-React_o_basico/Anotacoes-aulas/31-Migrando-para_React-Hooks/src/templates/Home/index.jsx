import { useCallback, useEffect, useState } from 'react';

import './styles.css';

import { Button } from '../../components/Button';
import { Posts } from '../../components/Posts';
import { TextInput } from '../../components/TextInput';
import { loadPosts } from '../../utils/load-posts';

export const Home = () => {
  const [posts, setPosts] = useState([]);
  const [allPosts, setAllPosts] = useState([]);
  const [page, setPage] = useState(0);
  const [postsPerPage] = useState(10);
  const [searchValue, setSearchValue] = useState('');

  const noMorePosts = page + postsPerPage >= allPosts.length;

  const filteredPosts = !!searchValue ?
    allPosts.filter(post => {
      return post.title.toLowerCase().includes(searchValue.toLowerCase());
    })
    : posts;

  // para resolver o problema do loop, usar useCallback
  const handleLoadPosts = useCallback(async (page, postsPerPage) => {
    const postsAndPhotos = await loadPosts();

    setPosts(postsAndPhotos.slice(page, postsPerPage));
    setAllPosts(postsAndPhotos);
  }, []);

  // substitui os métodos de ciclo de vida de componentes em componentes de classe
  // aqui terá um problema, pois handleLoadPosts agora é uma dependencia do useEffect, mas não podemos passar essa função no array de dependências pois irá gerar um loop infinito
  useEffect(() => {
    handleLoadPosts(0, postsPerPage);
  }, [handleLoadPosts, postsPerPage]);

  const loadMorePosts = () => {
    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
    posts.push(...nextPosts);

    setPosts(posts);
    setPage(nextPage);
  }

  const handleChange = (e) => {
    const { value } = e.target;
    setSearchValue(value);
  }


  return (
    <section className='container'>

      <div className='search-container'>
        {!!searchValue && (<h1>Search: {searchValue}</h1>)}

        <TextInput searchvalue={searchValue} handleChange={handleChange} />
      </div>

      {filteredPosts.length > 0 && (
        <Posts posts={filteredPosts} />
      )}

      {filteredPosts.length === 0 && (
        <p>Nenhum post encontrado</p>
      )}

      <div className='button-container'>
        {!searchValue && (
          <Button
            text={'Load more posts'}
            click={loadMorePosts}
            disabled={noMorePosts}
          />
        )}
      </div>
    </section>
  );
}

// export class Home2 extends Component {
//   state = {
//     posts: [],
//     allPosts: [],
//     page: 0,
//     postsPerPage: 6,
//     searchvalue: '',
//   };

//   async componentDidMount() {
//     await this.loadPosts();
//   }

//   loadPosts = async () => {
//     const { page, postsPerPage } = this.state;
//     const postsAndPhotos = await loadPosts();
//     this.setState({
//       posts: postsAndPhotos.slice(page, postsPerPage),
//       allPosts: postsAndPhotos,
//     });
//   }

//   loadMorePosts = () => {
//     const {
//       page,
//       postsPerPage,
//       allPosts,
//       posts
//     } = this.state;
//     const nextPage = page + postsPerPage;
//     const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
//     posts.push(...nextPosts);

//     this.setState({ posts, page: nextPage });
//   }

//   handleChange = (e) => {
//     const { value } = e.target;
//     this.setState({ searchvalue: value });
//   }

//   render() {
//     const { posts, page, postsPerPage, allPosts, searchvalue } = this.state;
//     const noMorePosts = page + postsPerPage >= allPosts.length;

//     const filteredPosts = !!searchvalue ?
//       allPosts.filter(post => {
//         return post.title.toLowerCase().includes(searchvalue.toLowerCase());
//       })
//       : posts;

//     return (
//       <section className='container'>

//         <div className='search-container'>
//           {!!searchvalue && (<h1>Search: {searchvalue}</h1>)}

//           <TextInput searchvalue={searchvalue} handleChange={this.handleChange} />
//         </div>

//         {filteredPosts.length > 0 && (
//           <Posts posts={filteredPosts} />
//         )}

//         {filteredPosts.length === 0 && (
//           <p>Nenhum post encontrado</p>
//         )}

//         <div className='button-container'>
//           {!searchvalue && (
//             <Button
//               text={'Load more posts'}
//               click={this.loadMorePosts}
//               disabled={noMorePosts}
//             />
//           )}
//         </div>
//       </section>
//     );
//   }
// }

