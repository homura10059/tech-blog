const PageTitle: React.FC = ({ children }) => {
  return (
    <h1 className="mb-4 border-b border-background-light pb-1 text-3xl font-normal leading-snug">
      {children}
    </h1>
  )
}

export default PageTitle
