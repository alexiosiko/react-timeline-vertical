export default function VerticalLine({ verticalLineColor = "#888", heightPxls = 156 }
	: { 
		verticalLineColor?: string,
		heightPxls?: number
	}) {
	return (
		<div style={{ backgroundColor: verticalLineColor, height: heightPxls}} className={` w-1 absolute`}/>
	)
}