export default function Dot({ dotColor = "#555" }: { dotColor?: string }) {
	return (
		 <div style={{ backgroundColor: dotColor}} 
		 className="rounded-full w-2 h-2 top-[65px] absolute "/>
	)
}