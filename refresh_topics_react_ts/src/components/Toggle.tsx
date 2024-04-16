
interface ToggleProps {
    onToggle: (state: string) => void;
  }
 const Toggle: React.FC<ToggleProps> = (props)=>{
  const [toggle ,setToggle] =useState<string>('off')

  const handleToggleOn = () => {
    setToggle("ON");
    props.onToggle("ON");
  };
  
  const handleToggleOff = () => {
    setToggle("OFF");
    props.onToggle("OFF");
  };
  return (
    <div>
        <p>Toggle: {toggle}</p>
        <button onClick={handleToggleOn}>On</button>
        <button onClick={handleToggleOff}>Off</button>
    </div>
  )
}

function useState<T>(arg0: string): [any, any] {
    throw new Error("Function not implemented.");
}
