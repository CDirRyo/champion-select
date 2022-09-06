const Inputs = ({children}) => {
  return (
    <div className="w-142 text-xs">
        <div className="flex justify-end mb-1">{children}</div>
        <div className="h-px bg-gray-500/50 w-142 mb-2"></div>    
    </div>
  )
}

export default Inputs