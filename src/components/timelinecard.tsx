import React from "react";
import Triangle from "./triangle";

export default function TimelineCard({ data, left, backgroundColor, color }: { 
	data: {
		title: string;
		subtitle: string;
		content: React.ReactNode;
	},
	left: boolean,
	backgroundColor?: string,
	color?: string
}) {
	
	const cardClassName = left ? "left-[20%]" : "right-[20%]"
	return (
		<div
			style={{ backgroundColor: backgroundColor, color: color }}
			className={`${cardClassName} rounded-md shadow-lg p-4 h-full justify-center w-[30%] relative`}
			>
			<Triangle left={left} backgroundColor={backgroundColor}  />
			<h1 className={`${left ? "text-left" : "text-right"} font-bold text-xl`}>{data.title}</h1> 
			<h2 className={`${left ? "text-left" : "text-right"} italic`}>{data.subtitle}</h2>
			<div>{data.content}</div> 
		</div>
	)
}