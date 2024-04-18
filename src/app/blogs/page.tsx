import Link from 'next/link'

export default function BlogList() {
  const blogIds = ['first', 'second'] 

  return (
    <div>
      <h1>Blog List</h1>
      <ul>
        {blogIds.map(blogsId => (
          <li key={blogsId}>
            <Link href={`/blogs/${blogsId}`}>Blog {blogsId}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}