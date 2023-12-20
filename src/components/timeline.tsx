import React from "react";
import Dot from "./dot";
import TimelineCard from "./timelinecard";
import VerticalLine from "./verticalline";

export default function Timeline({
  data,
  backgroundColor = "white",
  color = "black",
  verticalLineColor = "#888",
}: {
  data: {
    title: string;
    subtitle: string;
    content: React.ReactNode;
  }[];
  backgroundColor?: string;
  color?: string;
  verticalLineColor?: string
}) {
  return (
    <div className="flex flex-col gap-4 relative">
		{data.map((data, index) => {
			const left: boolean = index % 2 === 0 ? true : false;
			return (
				<div key={index} className="w-full flex justify-center relative">
					<VerticalLine heightPxls={250} verticalLineColor={verticalLineColor} />
					<Dot  />
					<TimelineCard
						backgroundColor={backgroundColor}
						color={color}
						left={left}
						data={data} />
				</div>
			)
		})}
    </div>
  );
}
