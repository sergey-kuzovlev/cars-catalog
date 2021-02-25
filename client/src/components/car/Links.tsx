const Link = ({ active, children, onClick }: {active: boolean, children: object, onClick: React.MouseEventHandler<HTMLButtonElement>}) => (
  <button className="btn blue-grey"
    onClick={onClick}
    disabled={active}
  >
    {children}
  </button>
)

export default Link