import { useSelector } from "react-redux"
import { selectLoadingState, selectPosts } from "../../store/selector"
import PostInList from "../../component/PostInList";

const Home = () => {
  const posts = useSelector(selectPosts);
  const { getPostsFromAPIState } = useSelector(selectLoadingState);

  return (
    <>
      <h3>Liste des posts :</h3>
      {
        getPostsFromAPIState === 'loading' ?
          <div>Chargement ...</div>
          :
          getPostsFromAPIState === 'error' ?
            <div>Erreur, essaies encore :)</div>
            :
            posts.length > 0 ?
              <ul style={{ textAlign: 'left' }}>
                {
                  posts.map((post, index) => <PostInList key={index} post={post} />)
                }
              </ul>
              :
              <span>Vous n'avez rien à faire ici !</span>
      }
    </>
  )
}

export default Home