const PageTitle: React.FC = ({ children }) => {
  return (
    <h1 className="pb-1 mb-4 text-3xl font-normal leading-snug border-b border-background-light">
      {children}
    </h1>
  )
}

export default PageTitle
