import React from 'react'
import Article from './Article'

function ArticleList({posts}) {
  return (
    <main>
        <Article key={posts[0].id} post={posts[0]}/>
        <Article key={posts[1].id} post={posts[1]}/>
        <Article key={posts[2].id} post={posts[2]}/>
    </main>
  )
}

export default ArticleList