import type { ReactNode } from 'react'
import { Section, Heading } from './index'

interface LegalPageTemplateProps {
  title: string
  lastUpdated: string
  children: ReactNode
}

const LegalPageTemplate = ({ title, lastUpdated, children }: LegalPageTemplateProps) => {
  return (
    <>
      <Section padding="sm">
        <div className="text-center mb-12">
          <Heading as="h1" size="5xl" className="mb-4">
            {title}
          </Heading>
          <p className="font-body text-gray-600">
            Last updated: {lastUpdated}
          </p>
        </div>
      </Section>
      
      <Section background="gray" padding="lg">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 md:p-12">
          <div className="prose prose-lg max-w-none font-body">
            {children}
          </div>
        </div>
      </Section>
    </>
  )
}

export default LegalPageTemplate