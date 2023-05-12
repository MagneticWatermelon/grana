import { GlyphDot } from "@visx/glyph";
import {
  AnimatedAxis,
  AnimatedGrid,
  AnimatedLineSeries,
  Tooltip,
  XYChart,
} from "@visx/xychart";
import { DateTime } from "luxon";
import { RenderTooltipGlyphProps } from "@visx/xychart/lib/components/Tooltip";
import { Loader } from "@mantine/core";

const accessors = {
  // @ts-ignore
  xAccessor: (d) => d.time,
  // @ts-ignore
  yAccessor: (d) => d.value,
};

interface ReadingsChartProps {
  query: string;
  isLoading: boolean;
  data: any | undefined;
}

export function ReadingsChart({ query, isLoading, data }: ReadingsChartProps) {
  if (isLoading || !data) {
    return <Loader />;
  }

  return (
    <XYChart
      height={500}
      xScale={{ type: "time" }}
      yScale={{ type: "linear", nice: true }}
    >
      <AnimatedAxis
        tickFormat={(date: Date) => {
          return DateTime.fromJSDate(date).toLocaleString(
            DateTime.TIME_24_WITH_SECONDS
          );
        }}
        animationTrajectory="min"
        orientation="bottom"
        strokeWidth={0.5}
      />
      <AnimatedAxis
        animationTrajectory="min"
        orientation="left"
        strokeWidth={0.5}
        hideTicks
        hideZero
      />
      <AnimatedGrid columns={false} />
      <AnimatedLineSeries dataKey={query} data={data} {...accessors} />
      <Tooltip
        snapTooltipToDatumX
        snapTooltipToDatumY
        showVerticalCrosshair
        showSeriesGlyphs
        renderGlyph={({
          x,
          y,
          size,
          color,
          onPointerMove,
          onPointerOut,
          onPointerUp,
        }: RenderTooltipGlyphProps<{ date: string; value: number }>) => {
          const handlers = { onPointerMove, onPointerOut, onPointerUp };
          return (
            <GlyphDot left={x} top={y} fill={color} r={size} {...handlers} />
          );
        }}
        renderTooltip={({ tooltipData, colorScale }) => {
          if (tooltipData && tooltipData.nearestDatum && colorScale) {
            return (
              <div>
                <div
                  style={{
                    color: colorScale(tooltipData.nearestDatum.key),
                  }}
                >
                  {tooltipData.nearestDatum.key}
                </div>
                {accessors
                  .xAccessor(tooltipData.nearestDatum.datum)
                  .toLocaleString(DateTime.TIME_24_WITH_SECONDS)}
                {", "}
                {accessors.yAccessor(tooltipData.nearestDatum.datum)}
              </div>
            );
          }
        }}
      />
    </XYChart>
  );
}
