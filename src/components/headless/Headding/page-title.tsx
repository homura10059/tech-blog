const PageTitle: React.FC = ({ children }) => {
  return (
    <h1 className="mb-4 border-b border-background-light pb-1 font-normal leading-snug text-3xl">
      {children}
    </h1>
  )
}

export default PageTitle
