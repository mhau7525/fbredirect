import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const images = [
  {
    src: '/uploads/image1.jpg', // Đường dẫn tới ảnh trên server
    alt: 'Image 1',
    link: 'https://example.com/page1'
  },
  {
    src: '/uploads/image2.jpg',
    alt: 'Image 2',
    link: 'https://example.com/page2'
  },
  {
    src: '/uploads/image3.jpg',
    alt: 'Image 3',
    link: 'https://example.com/page3'
  },
];

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Image Gallery</title>
        <meta name="description" content="Image gallery with links" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to the Image Gallery
        </h1>

        <div className={styles.grid}>
          {images.map((image, index) => (
            <a href={image.link} key={index} className={styles.card} target="_blank" rel="noopener noreferrer">
              <Image src={image.src} alt={image.alt} width={300} height={200} />
              <p>{image.alt}</p>
            </a>
          ))}
        </div>

        <iframe
          src="https://example.com"
          style={{ width: '100%', height: '500px', border: 'none', marginTop: '20px' }}
          title="Embedded Content"
        ></iframe>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home;
