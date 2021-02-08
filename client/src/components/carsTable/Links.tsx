const Link = ({ active, children, onClick }: {active: boolean, children: object, onClick: any}) => (
    <button
      onClick={onClick}
      disabled={active}
    >
      {children}
    </button>
)

export default Link