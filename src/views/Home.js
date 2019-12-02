import React from 'react'

import Content from '../components/Content'
import PageHeader from '../components/PageHeader'
import BlobHeader from '../components/BlobHeader'
import './Home.css'

export default ({ fields }) => {
  const { title, subtitle, featuredImage, body } = fields
  return (
    <main className='Home'>
      <BlobHeader className='blobHeader'/>
      <div className='test'/>
      <PageHeader
        large
        title={title}
        subtitle={subtitle}
        backgroundImage={featuredImage}
      />

      <div className='section'>

        <BlobHeader className='blobHeader'/>

        <div className='container'>
          <Content source={body} />
        </div>
      </div>
    </main>
  )
}
