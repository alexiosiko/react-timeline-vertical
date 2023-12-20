
export default function Triangle({ left, backgroundColor }: { left: boolean, backgroundColor?: string }) {
	const style = {
		width: 0,
		height: 0,
		borderLeft: '0.4rem solid transparent',
		borderRight: '0.4rem solid transparent',
		borderBottom: backgroundColor ? `12px solid ${backgroundColor}` : '12px solid white',
		boxShadow: '0 8px 8px -6px rgba(0, 0, 0, 0.4)', // Apply shadow only to the bottom
	  };
	  
	const leftStyle: string = left ? "-rotate-90  left-0 -translate-x-3" : "rotate-90 right-0 translate-x-3";
	
	return <div className={`${leftStyle} absolute`} style={style}></div>;
  }
  