import Image from 'next/image'

import { allPosts } from 'contentlayer/generated'

import { Mdx } from '@/components'
import Button from '@/components/Button'

export default function Home() {
  const posts = allPosts.map(post => post)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 dangerouslySetInnerHTML={{ __html: posts[0]?.title }} />
      <Button />
      <Image src={posts[0].image} width={700} height={700} alt="" />

      <Mdx code={posts[0].body.code} />
    </main>
  )
}
